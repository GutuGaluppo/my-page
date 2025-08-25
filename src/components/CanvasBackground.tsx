import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";

interface Line {
  start: { x: number; y: number };
  end: { x: number; y: number };
  angle: number;
  speed: number;
  brightness: number;
  colorIndex: number;
}

const CanvasBackground: React.FC = () => {
  const theme = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const linesRef = useRef<Line[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const initializeLines = (canvas: HTMLCanvasElement) => {
    const numLines = Math.min(window.innerHeight * 0.05, 100);
    const lines: Line[] = [];

    for (let i = 0; i < numLines; i++) {
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const x2 = x1 + (Math.random() - 0.5) * 200;
      const y2 = y1 + (Math.random() - 0.5) * 200;

      lines.push({
        start: { x: x1, y: y1 },
        end: { x: x2, y: y2 },
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() + 0.5) * 0.01,
        brightness: Math.random() * 0.3 + 0.1,
        colorIndex: i % 3,
      });
    }

    linesRef.current = lines;
  };

  const distanceFromPointToLine = (
    px: number,
    py: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ): number => {
    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;
    if (lenSq !== 0) {
      param = dot / lenSq;
    }

    let xx: number, yy: number;

    if (param < 0) {
      xx = x1;
      yy = y1;
    } else if (param > 1) {
      xx = x2;
      yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const animate = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    time: number,
  ) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    linesRef.current.forEach((line, i) => {
      // Rotate the line
      line.angle += line.speed;

      // Calculate new end point based on rotation
      const length = 100 + Math.sin(time * 0.001 + i) * 50;
      line.end.x = line.start.x + Math.cos(line.angle) * length;
      line.end.y = line.start.y + Math.sin(line.angle) * length;

      // Mouse interaction
      const distance = distanceFromPointToLine(
        mouseRef.current.x,
        mouseRef.current.y,
        line.start.x,
        line.start.y,
        line.end.x,
        line.end.y,
      );

      if (distance < 50) {
        line.brightness = Math.min(0.8, line.brightness + 0.02);
      } else {
        line.brightness = Math.max(0.1, line.brightness - 0.01);
      }

      // Draw the line
      const color = colors[line.colorIndex];
      const rgb = hexToRgb(color);
      const strokeColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${line.brightness})`;

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(line.start.x, line.start.y);
      ctx.lineTo(line.end.x, line.end.y);
      ctx.stroke();
    });

    animationRef.current = requestAnimationFrame((newTime) =>
      animate(canvas, ctx, newTime),
    );
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

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeLines(canvas);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize lines
    initializeLines(canvas);

    // Start animation
    animationRef.current = requestAnimationFrame((time) =>
      animate(canvas, ctx, time),
    );

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
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
        background: theme.palette.background.default,
        pointerEvents: "none",
      }}
    />
  );
};

export default CanvasBackground;
