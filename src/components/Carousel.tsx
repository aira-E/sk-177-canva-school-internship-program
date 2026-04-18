"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import s2 from '@/components/slides/2.png';
import s3 from '@/components/slides/3.png';
import s4 from '@/components/slides/4.png';
import s5 from '@/components/slides/5.png';
import s6 from '@/components/slides/6.png';
import s7 from '@/components/slides/7.png';
import s8 from '@/components/slides/8.png';
import s9 from '@/components/slides/9.png';
import s10 from '@/components/slides/10.png';

const slides = [s2, s3, s4, s5, s6, s7, s8, s9, s10];

export default function AutoPlayCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500); // changes every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i: number) => {
    if (i === currentIndex) return;
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-background border border-foreground/10 shadow-lg mt-6 mb-6">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex]}
            alt={`Portfolio Slide ${currentIndex + 1}`}
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-background/50 backdrop-blur-md px-3 py-2 rounded-full border border-foreground/10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-blue-primary w-6" : "bg-foreground/20 w-2 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
