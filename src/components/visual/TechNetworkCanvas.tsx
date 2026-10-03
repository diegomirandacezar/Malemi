'use client';
// A11y reference: lang="pt-BR"
import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  isAccent: boolean;
}

export function TechNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    window.addEventListener('resize', handleResize);

    // Node count adapted to screen size
    const nodeCount = Math.floor((width * height) / 16000);
    const clampedCount = Math.min(Math.max(nodeCount, 25), 65);

    const nodes: Node[] = [];
    for (let i = 0; i < clampedCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.2,
        isAccent: Math.random() < 0.22 // 22% of nodes have the emerald accent
      });
    }

    // Packet animation along edges
    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }
    const packets: Packet[] = [];
    const maxPackets = 6;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      // Draw connections
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (nodes[i].isAccent || nodes[j].isAccent) {
              ctx.strokeStyle = `rgba(9, 204, 162, ${alpha * 1.5})`;
            } else {
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.9})`;
            }
            ctx.lineWidth = 1;
            ctx.stroke();

            // Spawn random packet along connected edges
            if (packets.length < maxPackets && Math.random() < 0.002) {
              packets.push({
                fromIndex: i,
                toIndex: j,
                progress: 0,
                speed: 0.8 + Math.random() * 0.6
              });
            }
          }
        }
      }

      // Update and draw packets (moving data pulses)
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed * dt;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const from = nodes[pkt.fromIndex];
        const to = nodes[pkt.toIndex];
        if (!from || !to) {
          packets.splice(p, 1);
          continue;
        }

        const px = from.x + (to.x - from.x) * pkt.progress;
        const py = from.y + (to.y - from.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#09CCA2';
        ctx.shadowColor = '#09CCA2';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (node.isAccent) {
          ctx.fillStyle = `rgba(9, 204, 162, ${node.baseAlpha + 0.3})`;
        } else {
          ctx.fillStyle = `rgba(226, 232, 240, ${node.baseAlpha})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none w-full h-full opacity-60 transition-opacity duration-700"
    />
  );
}
