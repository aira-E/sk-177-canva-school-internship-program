import { CheckCircle2, Heart, Award, Cpu } from "lucide-react";

export default function AboutPage() {
  const modules = [
    { title: "Design Fundamentals", icon: CheckCircle2, text: "Master typography, color theory, and layout constraints." },
    { title: "Interactive Prototypes", icon: Cpu, text: "Bring your designs to life using modern interaction tools." },
    { title: "Brand Identity", icon: Award, text: "Learn to build and scale cohesive visual identities." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-dark to-blue-primary mb-6 pt-2">About The Initiative</h1>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          Canva School is a skills-development initiative designed to equip youth participants with practical graphic design skills using Canva. Ten (10) selected participants will undergo a structured tutorial workshop and will subsequently engage in the practical application of their learning by producing design materials for actual SK 177 initiatives as part of their training and learning immersion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 relative">
        <div className="h-96 w-full rounded-[3rem] bg-gradient-to-br from-red-light to-blue-light overflow-hidden relative shadow-2xl">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] mix-blend-overlay opacity-60 bg-cover bg-center" />
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-dark flex items-center gap-3">
            <Heart className="text-red-primary h-8 w-8" />
            Program Highlights
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Throughout the duration of the project, participants are expected to apply their acquired skills by completing at least one design output per week from their module, allowing them to gain hands-on experience while reinforcing their learning. By the end of the program, participants will have developed a strong design portfolio consisting of outputs created during their participation in Canva School.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
              <span className="p-2 rounded-xl bg-blue-light text-blue-dark"><Award className="w-5 h-5"/></span>
              <span className="font-semibold text-lg">Earn a stipend of ₱1,000 per month</span>
            </li>
            <li className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
              <span className="p-2 rounded-xl bg-red-light text-red-dark"><CheckCircle2 className="w-5 h-5"/></span>
              <span className="font-semibold text-lg">Produce actual materials for SK 177 initiatives</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-dark rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-primary rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <h2 className="text-4xl font-bold mb-12 text-center relative z-10">Program Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {modules.map((m, i) => (
            <div key={i} className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all">
              <m.icon className="text-red-primary w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">{m.title}</h3>
              <p className="text-white/80">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

