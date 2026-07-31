import { motion } from "framer-motion";

const particles = Array.from({ length: 18 });

export default function Dust() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.15 + Math.random() * 0.2,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-8, 8, -8],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}