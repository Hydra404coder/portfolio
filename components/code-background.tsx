"use client";

import React, { useEffect, useMemo, useState } from "react";

const CODE_SNIPPETS = [
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
  "from sklearn import svm",
  "curl -X POST /predict",
  "yarn add next",
  "pnpm i lucide-react",
];

type FloatCode = {
  id: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  text: string;
};

type MatrixCol = {
  id: string;
  left: number;
  delay: number;
  duration: number;
  chars: string[];
};

type GlowDot = {
  id: string;
  left: number;
  top: number;
  delay: number;
  duration: number;
};

type PatternBox = {
  id: string;
  left: number;
  top: number;
  size: number;
  delay: number;
  rotate: number;
  circle: boolean;
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

function useViewportScaledCounts() {
  const [counts, setCounts] = useState(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1280;
    if (w < 480) return { matrix: 12, codes: 6, glows: 20, patterns: 6, spark: 25 };
    if (w < 768) return { matrix: 18, codes: 10, glows: 28, patterns: 8, spark: 35 };
    if (w < 1280) return { matrix: 26, codes: 14, glows: 36, patterns: 10, spark: 45 };
    return { matrix: 32, codes: 18, glows: 44, patterns: 12, spark: 55 };
  });

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 480) setCounts({ matrix: 12, codes: 6, glows: 20, patterns: 6, spark: 25 });
      else if (w < 768) setCounts({ matrix: 18, codes: 10, glows: 28, patterns: 8, spark: 35 });
      else if (w < 1280) setCounts({ matrix: 26, codes: 14, glows: 36, patterns: 10, spark: 45 });
      else setCounts({ matrix: 32, codes: 18, glows: 44, patterns: 12, spark: 55 });
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return counts;
}

function randomChar(): string {
  return Math.random() > 0.5 ? "1" : "0"; // randomly pick 1 or 0
}

function CodeBackgroundInner() {
  const reducedMotion = useReducedMotion();
  const { matrix, codes, glows, patterns, spark } = useViewportScaledCounts();

  const matrixCols: MatrixCol[] = useMemo(
    () =>
      Array.from({ length: matrix }).map((_, i) => ({
        id: `matrix-${i}`,
        left: ((i * 100) / matrix + Math.random() * (100 / matrix)) % 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        chars: Array.from({ length: 18 }).map(() => randomChar()), // multiple chars per stream
      })),
    [matrix]
  );

  const floatingCodes: FloatCode[] = useMemo(
    () =>
      Array.from({ length: codes }).map((_, i) => ({
        id: `code-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 1.5,
        duration: 3 + Math.random() * 3,
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
      })),
    [codes]
  );

  const glowDots: GlowDot[] = useMemo(
    () =>
      Array.from({ length: glows }).map((_, i) => ({
        id: `glow-${i}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
      })),
    [glows]
  );

  const patternBoxes: PatternBox[] = useMemo(
    () =>
      Array.from({ length: patterns }).map((_, i) => ({
        id: `pattern-${i}`,
        left: 5 + i * (90 / Math.max(patterns - 1, 1)) + (Math.random() * 4 - 2),
        top: 12 + i * (70 / Math.max(patterns - 1, 1)) + (Math.random() * 4 - 2),
        size: 30 + Math.random() * 50,
        delay: i * 0.25,
        rotate: i * 30,
        circle: i % 2 === 0,
      })),
    [patterns]
  );

  const sparks = useMemo(
    () =>
      Array.from({ length: spark }).map((_, i) => ({
        id: `spark-${i}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
      })),
    [spark]
  );

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ backgroundColor: "#f8f8f8" }}
      aria-hidden
    >
      {/* Matrix rain */}
      {!reducedMotion && (
        <div className="absolute inset-0">
          {matrixCols.map((col) => (
            <div
              key={col.id}
              className="absolute font-mono text-sm text-cyan-500/70"
              style={{
                left: `${col.left}%`,
                animation: "matrixRain linear infinite",
                animationDelay: `${col.delay}s`,
                animationDuration: `${col.duration}s`,
                willChange: "transform, opacity",
              }}
            >
              {col.chars.map((c, i) => (
                <div
                  key={i}
                  style={{
                    opacity: 1 - i * 0.06, // fading trail
                    textShadow: "0 0 6px rgba(6,182,212,0.5)",
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Floating code lines */}
      {!reducedMotion &&
        floatingCodes.map((code) => (
          <div
            key={code.id}
            className="absolute font-mono text-sm whitespace-nowrap transition-transform"
            style={{
              left: `${code.x}%`,
              top: `${code.y}%`,
              animation: "floatY ease-in-out infinite",
              animationDelay: `${code.delay}s`,
              animationDuration: `${code.duration}s`,
              color: "rgba(2,132,199,0.45)",
              textShadow: "0 0 6px rgba(6,182,212,0.35)",
              willChange: "transform",
            } as React.CSSProperties}
          >
            {code.text}
          </div>
        ))}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Pulsing pattern boxes */}
      {!reducedMotion && (
        <div className="absolute inset-0">
          {patternBoxes.map((b) => (
            <div
              key={b.id}
              className="absolute border-2 shadow-lg"
              style={{
                left: `${b.left}%`,
                top: `${b.top}%`,
                width: `${b.size}px`,
                height: `${b.size}px`,
                transform: `rotate(${b.rotate}deg)`,
                animation: "softPulse ease-in-out infinite",
                animationDelay: `${b.delay}s`,
                borderRadius: b.circle ? "50%" : "0%",
                borderColor: "rgba(6,182,212,0.20)",
                boxShadow: "0 0 8px rgba(6,182,212,0.10)",
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>
      )}

      {/* Glow dots */}
      {!reducedMotion && (
        <div className="absolute inset-0">
          {glowDots.map((dot) => (
            <div
              key={dot.id}
              className="absolute rounded-full"
              style={{
                width: 3,
                height: 3,
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                animation: "glowDot ease-in-out infinite",
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration}s`,
                backgroundColor: "rgba(6,182,212,0.4)",
                boxShadow: "0 0 4px rgba(6,182,212,0.4)",
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>
      )}

      {/* Sparks */}
      {!reducedMotion && (
        <div className="absolute inset-0">
          {sparks.map((s) => (
            <div
              key={s.id}
              className="absolute"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: 60,
                height: 1,
                opacity: 0.08,
                transform: "rotate(35deg)",
                background:
                  "linear-gradient(90deg, rgba(6,182,212,0) 0%, rgba(6,182,212,0.6) 40%, rgba(6,182,212,0) 100%)",
                animation: "sparkMove ease-in-out infinite",
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(-6px); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(-6px); }
        }
        @keyframes softPulse {
          0% { opacity: 0.35; transform: scale(1) rotate(var(--rot,0)); }
          50% { opacity: 0.55; transform: scale(1.04) rotate(var(--rot,0)); }
          100% { opacity: 0.35; transform: scale(1) rotate(var(--rot,0)); }
        }
        @keyframes glowDot {
          0% { opacity: 0.35; }
          50% { opacity: 0.8; }
          100% { opacity: 0.35; }
        }
        @keyframes sparkMove {
          0% { opacity: 0.0; transform: translateX(-15px) rotate(35deg); }
          50% { opacity: 0.12; transform: translateX(15px) rotate(35deg); }
          100% { opacity: 0.0; transform: translateX(-15px) rotate(35deg); }
        }
        @keyframes matrixRain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(120vh); }
        }
      `}</style>
    </div>
  );
}

export const CodeBackground = React.memo(CodeBackgroundInner);
