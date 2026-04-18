"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  CheckCircle2, Heart, Award,
  ChevronDown, Palette, Layout, Type, Shapes,
  Image as ImageIcon, MonitorPlay, Presentation, Briefcase,
  FileDown, ArrowRight, ExternalLink, ArrowUpRight
} from "lucide-react";
import Carousel from '@/components/Carousel';

type Module = {
  id: string;
  week: string;
  title: string;
  description: string;
  icon: React.ElementType;
  topics: string[];
};

type Month = {
  title: string;
  modules: Module[];
};

const curriculum: Month[] = [
  {
    title: "Month 1: Fundamentals of Design & Canva",
    modules: [
      {
        id: "w1", week: "Week 1", title: "Introduction to Canva & Design Thinking",
        description: "Get familiar with the Canva workspace and understand the core principles of design thinking.",
        icon: Shapes,
        topics: ["Navigating the Canva Editor", "Understanding the Design Thinking Process", "Empathy in Design", "Creating your first Canva design"]
      },
      {
        id: "w2", week: "Week 2", title: "Color Theory & Typography",
        description: "Master the art of combining colors and selecting typography to communicate effectively.",
        icon: Palette,
        topics: ["Psychology of Colors", "Creating Color Palettes in Canva", "Font Pairing Strategies", "Hierarchy and Readability"]
      },
      {
        id: "w3", week: "Week 3", title: "Layouts, Grids & Composition",
        description: "Learn how to structure your designs for maximum impact using grids and alignment.",
        icon: Layout,
        topics: ["The Rule of Thirds", "Grid Systems in Canva", "White Space and Visual Tension", "Balancing Elements"]
      },
      {
        id: "w4", week: "Week 4", title: "Branding & Visual Identity",
        description: "Develop comprehensive brand kits and understand how to maintain visual consistency.",
        icon: Type,
        topics: ["What makes a strong Brand?", "Setting up Canva Brand Kits", "Designing Logos and Assets", "Creating Brand Guidelines"]
      }
    ]
  },
  {
    title: "Month 2: Advanced Design & Workflow",
    modules: [
      {
        id: "w5", week: "Week 5", title: "UI/UX Principles in Canva",
        description: "Apply user interface and user experience principles to create functional digital designs.",
        icon: MonitorPlay,
        topics: ["Designing Wireframes", "Mocking up Websites/Apps", "Interactive Canva Prototypes", "Accessibility in Design"]
      },
      {
        id: "w6", week: "Week 6", title: "Social Media & Animations",
        description: "Create engaging, dynamic content optimized for various social media platforms.",
        icon: ImageIcon,
        topics: ["Platform Specific Dimensions", "Canva Animation Effects", "Video Editing Basics", "Designing Carousels"]
      },
      {
        id: "w7", week: "Week 7", title: "Presentations & Pitch Decks",
        description: "Design compelling presentations that captivate audiences and tell a story.",
        icon: Presentation,
        topics: ["Storytelling with Data", "Dynamic Canva Presentations", "Adding Audio and Voiceovers", "Pitch Deck Structures"]
      },
      {
        id: "w8", week: "Week 8", title: "Final Projects & Portfolio Building",
        description: "Compile your best work into a stunning portfolio and present your final project.",
        icon: Briefcase,
        topics: ["Curating your Work", "Creating a Canva Website Portfolio", "Presenting your Final Project", "Career Preparation"]
      }
    ]
  }
];

export default function AboutPage() {
  const [expandedId, setExpandedId] = useState<string | null>("w1");

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-background min-h-screen">

      {/* 1. About the Initiative (from original /about page) */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-dark to-blue-primary mb-6 pt-2">
            About The Initiative
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Canva School is a skills-development initiative designed to equip youth participants with practical graphic design skills using Canva. Ten (10) selected participants will undergo a structured tutorial workshop and will subsequently engage in the practical application of their learning by producing design materials for actual SK 177 initiatives as part of their training and learning immersion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10 relative">
          <div className="h-96 w-full rounded-[3rem] bg-gradient-to-br from-red-light to-blue-light overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] mix-blend-overlay opacity-60 bg-cover bg-center" />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-blue-dark dark:text-white flex items-center gap-3">
              <Heart className="text-red-primary h-8 w-8" />
              Program Highlights
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Throughout the duration of the project, participants are expected to apply their acquired skills by completing at least one design output per week from their module, allowing them to gain hands-on experience while reinforcing their learning. By the end of the program, participants will have developed a strong design portfolio consisting of outputs created during their participation in Canva School.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 bg-surface dark:bg-white/5 p-4 rounded-2xl shadow-sm border border-foreground/10">
                <span className="p-2 rounded-xl bg-blue-light dark:bg-blue-primary/20 text-blue-dark dark:text-blue-light"><Award className="w-5 h-5" /></span>
                <span className="font-semibold text-lg text-foreground/90">Earn a stipend of ₱1,000 per month</span>
              </li>
              <li className="flex items-center gap-3 bg-surface dark:bg-white/5 p-4 rounded-2xl shadow-sm border border-foreground/10">
                <span className="p-2 rounded-xl bg-red-light dark:bg-red-primary/20 text-red-dark dark:text-red-light"><CheckCircle2 className="w-5 h-5" /></span>
                <span className="font-semibold text-lg text-foreground/90">Produce actual materials for SK 177 initiatives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Program Modules (Interactive Dropdown from /modules) */}
      <div id="modules">
        <div className="bg-blue-light/30 dark:bg-blue-light/5 py-20 border-y border-foreground/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-red-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-dark dark:text-white mb-6 tracking-tight">
              Program <span className="text-blue-primary">Modules</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Explore our comprehensive 8-week curriculum designed to take you from a design novice to an advanced Canva creator.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-16">
            {curriculum.map((month, monthIndex) => (
              <div key={monthIndex} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="h-px bg-foreground/10 flex-1" />
                  <h2 className="text-2xl font-bold text-foreground/90 shrink-0">
                    {month.title}
                  </h2>
                  <div className="h-px bg-foreground/10 flex-1" />
                </div>

                <div className="space-y-4">
                  {month.modules.map((module) => {
                    const Icon = module.icon;
                    const isExpanded = expandedId === module.id;

                    return (
                      <motion.div
                        key={module.id}
                        initial={false}
                        className={cn(
                          "border border-foreground/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-colors duration-300",
                          isExpanded ? "bg-blue-light/40 dark:bg-blue-light/10" : "bg-surface dark:bg-white/5"
                        )}
                      >
                        <button
                          onClick={() => toggleAccordion(module.id)}
                          className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                        >
                          <div className="flex items-center space-x-5 text-left">
                            <div className={`p-3 rounded-xl transition-colors ${isExpanded ? 'bg-blue-primary text-white' : 'bg-blue-light dark:bg-blue-primary/20 text-blue-primary'
                              }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-blue-primary uppercase tracking-wider block mb-1">
                                {module.week}
                              </span>
                              <h3 className="text-xl font-bold text-foreground/90">
                                {module.title}
                              </h3>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={`p-2 rounded-full ${isExpanded ? 'bg-blue-primary/10 text-blue-primary' : 'text-foreground/40'}`}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.section
                              initial="collapsed"
                              animate="open"
                              exit="collapsed"
                              variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                              }}
                              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="px-6 pb-6 pt-2">
                                <div className="pl-16">
                                  <p className="text-foreground/70 mb-5 leading-relaxed">
                                    {module.description}
                                  </p>

                                  <div>
                                    <h4 className="text-sm font-bold text-foreground/90 uppercase tracking-wider mb-3">
                                      Key Topics
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {module.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start space-x-2 text-foreground/80">
                                          <div className="w-1.5 h-1.5 rounded-full bg-blue-primary mt-2 shrink-0" />
                                          <span className="text-sm">{topic}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </motion.section>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. How to Join Process (from /join page) */}
      <div id="join">
        <div className="bg-red-light/30 dark:bg-red-primary/5 py-20 border-y border-foreground/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-dark dark:text-white mb-6 tracking-tight">
              How to <span className="text-blue-primary">Join</span>
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Ready to kickstart your creative journey? Follow the steps below to apply for the Canva School Internship Program and submit your screening portfolio.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
              1
            </div>
            <div className="bg-surface dark:bg-white/5 border border-foreground/10 p-8 rounded-3xl w-full shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-foreground/90 mb-3">Review the Program Curriculum</h2>
              <p className="text-foreground/70 mb-4">
                Our internship is an intensive 8-week program. Ensure you are familiar with the topics we cover by reviewing our curriculum modules outlined above.
              </p>
              <Link href="#modules" className="inline-flex items-center space-x-2 text-blue-primary font-semibold hover:text-blue-dark transition-colors">
                <span>View Modules Again</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
              2
            </div>
            <div className="bg-surface dark:bg-white/5 border border-foreground/10 p-8 rounded-3xl w-full shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-foreground/90 mb-3">Prepare Your Screening Portfolio</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                To evaluate your baseline design skills, we require all applicants to recreate or build upon our provided portfolio template. <strong className="text-foreground/90">Click the button below to copy the Canva template and add your designs: </strong><br /><br />
              </p>

              <Carousel />

              <div className="bg-blue-light/40 dark:bg-blue-primary/10 border border-blue-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white dark:bg-transparent dark:border dark:border-blue-primary/30 rounded-xl text-blue-primary">
                    <FileDown className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-dark dark:text-blue-light">Screening Template</h3>
                    <p className="text-sm text-foreground/60">Canva Design Template View</p>
                  </div>
                </div>
                <a
                  href="https://canva.link/in5sixduoislcwv"
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-blue-primary hover:bg-blue-dark text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg flex items-center space-x-2"
                >
                  <span>Download portfolio template</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <p className="mt-4 text-xs text-foreground/50">
                * The template linked above provides the exact criteria required. Make sure to set your design sharing permissions to "Anyone with the link can view".
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 rounded-full bg-blue-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
              3
            </div>
            <div className="bg-surface dark:bg-white/5 border border-foreground/10 p-8 rounded-3xl w-full shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-foreground/90 mb-3">Submit Application</h2>
              <p className="text-foreground/70 mb-6">
                Ready to submit? Head over to the Student Portal to upload your resume, fill out your details, and provide the link to your completed screening portfolio for evaluation.
              </p>
              <button
                className="inline-flex items-center space-x-2 bg-blue-dark hover:bg-blue-primary text-white px-8 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl"
              >
                <span> Submit Application </span>
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
