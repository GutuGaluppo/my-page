import React, { useRef, useEffect, useState } from "react";

interface SkillSphereOptions {
  widthVw?: number;
  heightVh?: number;
  radius?: number;
  fontSize?: number;
  tilt?: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  text: string;
}

const SkillSphere: React.FC<SkillSphereOptions> = ({
  widthVw = 500,
  heightVh = 500,
  radius = 140,
  fontSize = 20,
  tilt = Math.PI / 9,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(1);
  const mouseRef = useRef({
    isDown: false,
    lastX: 0,
    lastY: 0,
    velocityX: 0.2, // Constant gentle rotation
    velocityY: 0.15,
    rotationX: Math.PI * 0.1,
    rotationZ: 0,
  });

  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  // Update dimensions when viewport changes
  useEffect(() => {
    const updateDimensions = () => {
      const width = (widthVw / 100) * window.innerWidth;
      const height = (heightVh / 100) * window.innerHeight;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [widthVw, heightVh]);

  const words = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Next.js",
    "Tailwind",
    "Firebase",
    "Redis",
    "Git",
  ];

  // Distribute words evenly on sphere
  const createPoints = (): Point3D[] => {
    const points: Point3D[] = [];
    const total = words.length;

    for (let i = 0; i < total; i++) {
      // Golden spiral distribution for even spacing
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = i * Math.PI * (3 - Math.sqrt(5)); // Golden angle

      points.push({
        x: Math.cos(theta) * radiusAtY * radius,
        y: y * radius,
        z: Math.sin(theta) * radiusAtY * radius,
        text: words[i],
      });
    }

    return points;
  };

  const [points] = useState<Point3D[]>(createPoints());

  const rotate = (x: number, y: number, angle: number): [number, number] => [
    x * Math.cos(angle) - y * Math.sin(angle),
    x * Math.sin(angle) + y * Math.cos(angle),
  ];

  const render = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const mouse = mouseRef.current;

    // Clear entire canvas
    ctx.clearRect(0, 0, widthVw, heightVh);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Always update rotation with momentum
    mouse.rotationX += mouse.velocityX * 0.01;
    mouse.rotationZ += mouse.velocityY * 0.01;

    // Apply friction only when not dragging, but maintain minimum velocity
    if (!mouse.isDown) {
      mouse.velocityX *= 0.985;
      mouse.velocityY *= 0.985;

      // Maintain gentle constant rotation
      if (Math.abs(mouse.velocityX) < 0.1)
        mouse.velocityX += (Math.random() - 0.5) * 0.02 + 0.05;
      if (Math.abs(mouse.velocityY) < 0.08)
        mouse.velocityY += (Math.random() - 0.5) * 0.02 + 0.04;
    }

    // Calculate responsive radius and font size based on canvas size
    const responsiveRadius = Math.min(widthVw, heightVh) * 0.25;
    const responsiveFontSize = Math.min(widthVw, heightVh) * 0.035;

    // Transform and render each point
    const transformedPoints = points.map((point) => {
      let { x, y, z } = point;

      // Scale points to responsive radius
      const scale = responsiveRadius / radius;
      x *= scale;
      y *= scale;
      z *= scale;

      // Apply rotations
      [y, z] = rotate(y, z, tilt);
      [x, z] = rotate(x, z, mouse.rotationZ);
      [x, y] = rotate(x, y, mouse.rotationX);

      // Calculate depth-based properties
      const depth = (x + responsiveRadius) / (2 * responsiveRadius);
      const alpha = 0.4 + 0.6 * depth;
      const size = responsiveFontSize * (0.8 + 0.4 * depth);

      return {
        ...point,
        screenX: y + widthVw / 2,
        screenY: -z + heightVh / 2,
        alpha,
        size,
        depth: x,
      };
    });

    // Sort by depth (back to front)
    transformedPoints
      .sort((a, b) => a.depth - b.depth)
      .forEach((point) => {
        ctx.fillStyle = `rgba(51, 65, 85, ${point.alpha})`;
        ctx.font = `${point.size}px "Bebas Neue",-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
        ctx.fillText(point.text, point.screenX, point.screenY);
      });

    // Always continue animation for perpetual motion
    animationRef.current = requestAnimationFrame(render);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const mouse = mouseRef.current;
    mouse.isDown = true;
    mouse.lastX = e.clientX;
    mouse.lastY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const mouse = mouseRef.current;
    if (!mouse.isDown) return;

    const deltaX = e.clientX - mouse.lastX;
    const deltaY = e.clientY - mouse.lastY;

    mouse.velocityX = deltaX * 0.3;
    mouse.velocityY = -deltaY * 0.3;

    mouse.lastX = e.clientX;
    mouse.lastY = e.clientY;

    // Start animation if not already running
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(render);
    }
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Setup high DPI canvas with explicit dimensions
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    // Set actual canvas size (in memory)
    canvas.width = widthVw * dpr;
    canvas.height = heightVh * dpr;

    // Set display size (CSS pixels)
    canvas.style.width = `${widthVw}px`;
    canvas.style.height = `${heightVh}px`;
    canvas.style.fontFamily = "Bebas Neue";
    canvas.style.fontWeight = "bold";

    // Scale for high DPI
    ctx.scale(dpr, dpr);

    // Clear any potential background
    ctx.clearRect(0, 0, widthVw, heightVh);

    // Start perpetual animation
    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [widthVw, heightVh]);

  return (
    <canvas
      ref={canvasRef}
      className="rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        width: `${widthVw}vw`,
        height: `${heightVh}vh`,
        display: "block",
        // margin: "0 auto",
      }}
      id="skills"
    />
  );
};

export default SkillSphere;
