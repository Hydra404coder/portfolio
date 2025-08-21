"use client";

import { useEffect, useState } from "react";

const codeSnippets = [
  "const ai = new MachineLearning()",
  "import tensorflow as tf",
  "def neural_network():",
  "class DeepLearning:",
  "npm install react",
  "git commit -m 'feat'",
  "SELECT * FROM data",
  "async function api()",
  "docker run -p 3000",
  "pip install pandas",
  "const model = tf.sequential()",
  "return prediction.argmax()",
  "useEffect(() => {",
  "from sklearn import",
  "console.log('AI')",
  "transform: scale(1.1)",
  "background: linear-gradient",
  "flex items-center",
  "z-index: 9999",
  "opacity: 0.8",
];

interface FloatingCode {
  id: number;
  text: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

export function CodeBackground() {
  const [codes, setCodes] = useState<FloatingCode[]>([]);

  useEffect(() => {
    const initialCodes = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 0.05 + Math.random() * 0.2,
      opacity: 0.25 + Math.random() * 0.35, // more visible
    }));
    setCodes(initialCodes);

    const interval = setInterval(() => {
      setCodes((prevCodes) =>
        prevCodes.map((code) => ({
          ...code,
          y: code.y <= -10 ? 110 : code.y - code.speed,
          opacity: Math.sin(Date.now() * 0.001 + code.id) * 0.2 + 0.25, // brighter
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ backgroundColor: "#f8f8f8" }} // off-white
    >
      {/* Matrix rain */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute font-mono text-sm animate-matrix-fall text-accent/50"
            style={{
              left: `${(i * 1.5) % 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              textShadow: "0 0 4px rgba(6,182,212,0.5)", // subtle glow
            }}
          >
            {String.fromCharCode(0x30a0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      {/* Floating code */}
      {codes.map((code) => (
        <div
          key={code.id}
          className="absolute font-mono text-sm whitespace-nowrap transition-all duration-100"
          style={{
            left: `${code.x}%`,
            top: `${code.y}%`,
            opacity: code.opacity,
            transform: `rotate(${Math.sin(code.id) * 10}deg)`,
            color: "rgba(6,182,212,0.7)", // more visible
            textShadow: "0 0 6px rgba(6,182,212,0.5)", // subtle glow
          }}
        >
          {code.text}
        </div>
      ))}

      {/* Binary rain */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={`binary-${i}`}
            className="absolute font-mono text-base animate-binary-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              color: "rgba(6,182,212,0.5)", // brighter
              textShadow: "0 0 3px rgba(6,182,212,0.5)", // glow
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      {/* Patterns */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`pattern-${i}`}
            className="absolute border-2 animate-pulse shadow-lg"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + i * 6}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.3}s`,
              borderRadius: i % 2 === 0 ? "50%" : "0%",
              borderColor: "rgba(6,182,212,0.2)",
              boxShadow: "0 0 8px rgba(6,182,212,0.1)",
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animationDuration: "4s",
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              backgroundColor: "rgba(6,182,212,0.4)", // brighter
              boxShadow: "0 0 4px rgba(6,182,212,0.4)", // subtle glow
            }}
          />
        ))}
      </div>
    </div>
  );
}
