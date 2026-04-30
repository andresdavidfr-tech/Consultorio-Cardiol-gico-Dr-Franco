import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: "lazy" | "eager";
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc,
  loading = "lazy"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // If there's an error and no fallback, we might want to show a generic placeholder
  const finalSrc = error && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-med-light/30 border-t-med-light rounded-full animate-spin" />
          </motion.div>
        )}
        {error && !fallbackSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-50 flex items-center justify-center text-slate-300"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 px-2 text-center">{alt}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={finalSrc}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0, 
          scale: isLoaded ? 1 : 1.1 
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
