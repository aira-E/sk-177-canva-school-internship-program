"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';


export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All-About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 canva-glass border-b border-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-blue-dark hover:text-blue-primary transition-colors">
            <div className="bg-blue-primary p-2 rounded-xl text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm sm:text-lg tracking-tight max-w-[150px] sm:max-w-none truncate">SK 177 Canva School Internship Program</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-primary relative py-2",
                  pathname === link.href ? "text-blue-dark" : "text-foreground/70"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-primary rounded-t-full" />
                )}
              </Link>
            ))}
            <Link href="/student" className="text-sm font-medium bg-blue-primary text-white px-4 py-2 rounded-full hover:bg-blue-dark transition-colors shadow-lg shadow-blue-primary/20">
              Join Program
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground/70 hover:text-blue-primary p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-surface/20 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-base font-medium px-4 py-2 rounded-xl transition-colors",
                pathname === link.href ? "bg-blue-light text-blue-dark" : "text-foreground/70 hover:bg-surface"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

