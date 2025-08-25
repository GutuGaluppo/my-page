import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

interface Point {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
}

const ParticleFieldBackground: React.FC = () => {
  const theme = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const colors = [
    "rgb(31,31,29)",
    "rgba(31,31,29,0.3)",
    "rgba(31,31,29,0.5)",
    "#ffe359",
  ];

  const initializePoints = (canvas: HTMLCanvasElement) => {
    const numPoints = 500;
    const points: Point[] = [];

    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      points.push({
        x,
        y,
        originalX: x,
        originalY: y,
      });
    }

    pointsRef.current = points;
  };

  const distance = (x1: number, y1: number, x2: number, y2: number): number => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  const isWithinCircle = (
    point: Point,
    center: { x: number; y: number },
    radius: number,
  ): boolean => {
    return distance(point.x, point.y, center.x, center.y) <= radius;
  };

  const drawCircle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string,
  ) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  };

  const animate = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    // Clear canvas with background color
    ctx.fillStyle = theme.palette.background.default;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Calculate radius based on mouse distance from center
    const mouseDistanceFromCenter = distance(
      mouseRef.current.x,
      centerX,
      mouseRef.current.y,
      centerY,
    );
    const maxDistance = Math.max(centerX, centerY);
    const radius = (mouseDistanceFromCenter / maxDistance) * 150 + 70;

    // Process each point
    pointsRef.current.forEach((point, i) => {
      if (isWithinCircle(point, mouseRef.current, radius)) {
        // Point is within the interaction circle
        const pointDistance = distance(
          point.x,
          point.y,
          mouseRef.current.x,
          mouseRef.current.y,
        );
        const distanceRatio = (radius - pointDistance) / radius;

        // Calculate new position (move toward mouse)
        const dx = mouseRef.current.x - point.x;
        const dy = mouseRef.current.y - point.y;
        const scale = 1 + distanceRatio;

        const newX = point.x + dx * (distanceRatio * 0.1);
        const newY = point.y + dy * (distanceRatio * 0.1);

        // Draw enlarged circle
        const circleRadius = distanceRatio * 25;
        const color = colors[i % 4];
        drawCircle(ctx, newX, newY, Math.max(circleRadius, 1), color);

        // Gradually move point toward mouse
        point.x = newX;
        point.y = newY;
      } else {
        // Point is outside interaction circle - draw small dot and return to original position
        drawCircle(ctx, point.x, point.y, 0.5, "#333");

        // Gradually return to original position
        const returnSpeed = 0.02;
        point.x += (point.originalX - point.x) * returnSpeed;
        point.y += (point.originalY - point.y) * returnSpeed;
      }
    });

    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
  };

  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas || !event.touches[0]) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.touches[0].clientX - rect.left,
      y: event.touches[0].clientY - rect.top,
    };
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reinitialize points for new canvas size
    initializePoints(canvas);

    // Reset mouse position to center
    mouseRef.current = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize mouse position to center
    mouseRef.current = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    // Initialize points
    initializePoints(canvas);

    // Start animation
    animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        // backgroundColor: theme.palette.background.default,
      }}
    />
  );
};

export default ParticleFieldBackground;
