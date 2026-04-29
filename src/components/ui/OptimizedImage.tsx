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
  fallbackSrc = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
  loading = "lazy"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

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
      </AnimatePresence>

      <motion.img
        src={error ? fallbackSrc : src}
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
