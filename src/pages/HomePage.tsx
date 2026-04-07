import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-blue-50/80 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-indigo-50/60 blur-[120px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900">
          Freelance Gerito
        </h1>
      </motion.div>
    </div>
  );
}
