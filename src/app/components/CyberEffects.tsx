'use client';

import { useEffect, useRef, useMemo, useState } from 'react';

export function HexagonParticles() {
  const [mounted, setMounted] = useState(false);
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${15 + Math.random() * 10}s`,
      color: ['cyan', 'pink', 'purple'][Math.floor(Math.random() * 3)],
    })), []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="hexagon-particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            background: `rgba(${
              particle.color === 'cyan' ? '0, 255, 255' :
              particle.color === 'pink' ? '255, 0, 255' :
              '179, 0, 255'
            }, 0.3)`,
          }}
        />
      ))}
    </div>
  );
}

export function DigitalRain() {
  const [mounted, setMounted] = useState(false);
  const columns = 20;
  const chars = '01アイウエオカキクケコサシスセソタチツテト';
  
  const rainDrops = useMemo(() => 
    Array.from({ length: columns }, (_, i) => ({
      id: i,
      left: `${(i / columns) * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
      char: chars[Math.floor(Math.random() * chars.length)],
    })), []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="digital-rain-char"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        >
          {drop.char}
        </div>
      ))}
    </div>
  );
}

export function DataStreams() {
  const [mounted, setMounted] = useState(false);
  const streams = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: `${10 + i * 12}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    })), []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="data-stream"
          style={{
            top: stream.top,
            animationDelay: stream.delay,
            animationDuration: stream.duration,
          }}
        />
      ))}
    </div>
  );
}

export function StatusIndicator({ label, status }: { label: string; status: 'online' | 'active' | 'ready' }) {
  const colors = {
    online: 'bg-cyan-400',
    active: 'bg-pink-400',
    ready: 'bg-purple-400',
  };

  return (
    <div className="flex items-center gap-2 text-xs font-mono">
      <span className={`w-2 h-2 ${colors[status]} rounded-full animate-pulse`}></span>
      <span className="text-gray-400">{label}</span>
      <span className="terminal-cursor"></span>
    </div>
  );
}

export function CornerBrackets({ className = '' }: { className?: string }) {
  return (
    <>
      <div className={`absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cyan-400/60 ${className}`}></div>
      <div className={`absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cyan-400/60 ${className}`}></div>
      <div className={`absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-pink-400/60 ${className}`}></div>
      <div className={`absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-pink-400/60 ${className}`}></div>
    </>
  );
}

export function CircuitLines() {
  return (
    <div className="absolute inset-0 circuit-pattern opacity-50 pointer-events-none"></div>
  );
}
