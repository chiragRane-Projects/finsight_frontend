import { Zap, Shield, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Financial Intelligence
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Smart Money
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Insights</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Harness the power of AI to analyze your spending patterns, predict future expenses, and get personalized financial insights that help you make smarter money decisions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Bank-level Security
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Privacy First
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Financial Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}