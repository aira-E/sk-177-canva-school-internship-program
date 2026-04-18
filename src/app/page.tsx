"use client";
import { ArrowRight, Star, Layers, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const timeline = [
    { title: "Application phase", desc: "Top 10 youth participants selected", icon: Zap },
    { title: "Structured Workshop", desc: "Master practical graphic design skills using Canva", icon: Star },
    { title: "Weekly Outputs", desc: "Complete 1 design per week for actual SK 177 initiatives", icon: Layers },
    { title: "Portfolio Building", desc: "Receive a ₱1,000 monthly stipend and build strong portfolios", icon: ArrowRight },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-primary/10 rounded-full blur-3xl mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-yellow-primary/20 rounded-full blur-3xl mix-blend-multiply opacity-40 animate-blob animation-delay-2000" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-4xl flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-primary/10 rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-blue-dark">
            <span className="flex h-2 w-2 rounded-full bg-yellow-primary animate-pulse" />
            <span>Applications open for 10 Selected Participants</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-dark via-blue-primary to-red-primary mb-6 tracking-tight leading-tight pt-2">
            Equip. <br /> Create. Serve.
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl font-light">
            A skills-development initiative equipping youth with practical graphic design skills using Canva. Join the training, apply your skills for SK 177 initiatives, and earn a monthly stipend.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/about#join" className="px-8 py-4 rounded-full bg-blue-primary text-white font-bold text-lg hover:bg-blue-dark hover:scale-105 transition-all shadow-xl shadow-blue-primary/30 flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span>Join the Program</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/gallery" className="px-8 py-4 rounded-full bg-white text-blue-dark border border-blue-100 font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-sm w-full sm:w-auto text-center">
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Visual Timeline Section */}
      <section className="w-full max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-dark">Your Journey</h2>
          <p className="text-foreground/60 text-lg">A structured path to learning immersion, training, and building a high-quality portfolio.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-light via-red-light to-transparent -z-10 rounded-full" />
          
          {timeline.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-3xl canva-glass flex items-center justify-center mb-6 text-red-dark group-hover:scale-110 group-hover:bg-red-primary group-hover:text-white transition-all shadow-lg mx-auto transform -rotate-3 group-hover:rotate-0">
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-foreground/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

