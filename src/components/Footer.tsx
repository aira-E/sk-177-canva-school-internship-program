import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-surface/50 bg-background/80 backdrop-blur-md sticky bottom-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-foreground/60 text-center md:text-left flex-1 max-w-2xl">
            <p className="font-bold text-foreground/80 mb-1">A project of Katipunan ng Kabataan led by Sangguniang Kabataan</p>
            <p className="text-xs mb-2 text-foreground/50">Disclaimer: Sangguniang Kabataan 177 implements the program for free and is not directly connected to Canva.</p>
            <p className="text-xs">© {new Date().getFullYear()} SK 177 Canva School Internship Program. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/student" className="text-sm font-medium text-blue-primary hover:text-blue-dark hover:underline transition-all">
              Student Login
            </Link>
            <span className="text-surface/30">|</span>
            <Link href="/admin" className="text-sm font-medium text-red-dark hover:text-red-primary hover:underline transition-all">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

