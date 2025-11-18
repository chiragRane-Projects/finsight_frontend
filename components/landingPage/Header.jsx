import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">FinSight AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}