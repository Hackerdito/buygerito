import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 font-sans overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-emerald-50/80 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-teal-50/80 blur-[120px]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <CheckCircle2 className="w-20 h-20 text-zinc-900 mb-8" strokeWidth={1} />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-5">
          Pago completado.
        </h1>
        
        <p className="text-zinc-500 text-lg leading-relaxed">
          Tu transacción se ha procesado correctamente. Recibirás un correo con los detalles de tu compra en breve.
        </p>
      </motion.div>
    </div>
  );
}
