import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Join 10,000+ Smart Investors
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Transform Your Financial Future Today
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stop guessing about your finances. Get AI-powered insights that help you save more, spend smarter, and achieve your financial goals faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">10,000+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">$2.5M+</div>
              <div className="text-blue-100">Money Saved</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 font-semibold">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-blue-100">
            ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
          </p>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}