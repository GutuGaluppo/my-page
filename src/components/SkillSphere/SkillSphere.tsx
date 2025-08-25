import React, { useRef, useEffect, useState } from "react";

interface SkillSphereOptions {
  width?: number;
  height?: number;
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
  width = 500,
  height = 500,
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

  const words = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Material UI",
    "Tailwind CSS",
    "Redux",
    "RTK Query",
    "Node.js",
    "GraphQL",
    "AWS",
    "Next.js",
    "Tailwind",
    "Firebase",
    "Git",
  ];

  // Calculate sphere radius to use full canvas dimensions
  // Use 45% of the smaller dimension to ensure the sphere fits with some padding
  const sphereRadius = Math.min(width, height) * 0.45;

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
        x: Math.cos(theta) * radiusAtY * sphereRadius,
        y: y * sphereRadius,
        z: Math.sin(theta) * radiusAtY * sphereRadius,
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
    ctx.clearRect(0, 0, width, height);
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

    // Calculate responsive font size based on canvas size and provided fontSize
    const responsiveFontSize = Math.min(width, height) * (fontSize / 500); // Scale based on 500px reference

    // Transform and render each point
    const transformedPoints = points.map((point) => {
      let { x, y, z } = point;

      // Apply rotations
      [y, z] = rotate(y, z, tilt);
      [x, z] = rotate(x, z, mouse.rotationZ);
      [x, y] = rotate(x, y, mouse.rotationX);

      // Calculate depth-based properties
      const depth = (x + sphereRadius) / (2 * sphereRadius);
      const alpha = 0.4 + 0.6 * depth;
      const size = responsiveFontSize * (0.8 + 0.4 * depth);

      return {
        ...point,
        screenX: y + width / 2,
        screenY: -z + height / 2,
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
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Set display size (CSS pixels)
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.fontFamily = "Bebas Neue";
    canvas.style.fontWeight = "bold";

    // Scale for high DPI
    ctx.scale(dpr, dpr);

    // Clear any potential background
    ctx.clearRect(0, 0, width, height);

    // Start perpetual animation
    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        display: "block",
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
      }}
      id="skills"
    />
  );
};

export default SkillSphere;
