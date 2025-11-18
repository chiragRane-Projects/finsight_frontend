import { Brain, TrendingUp, Shield, Zap, BarChart3, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Spending Analysis",
      description: "Deep dive into your spending patterns with AI-powered categorization and trend analysis across all your accounts.",
      gradient: "from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600",
      iconBg: "bg-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Expense Prediction",
      description: "Predict future expenses using advanced ML models that learn from your historical spending behavior.",
      gradient: "from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600",
      iconBg: "bg-green-600"
    },
    {
      icon: Shield,
      title: "Anomaly Detection",
      description: "Automatically detect unusual spending patterns and potential fraud with real-time monitoring and alerts.",
      gradient: "from-purple-50 to-violet-50 dark:from-slate-700 dark:to-slate-600",
      iconBg: "bg-purple-600"
    },
    {
      icon: Brain,
      title: "Personalized Insights",
      description: "Get tailored financial advice and recommendations based on your unique spending habits and financial goals.",
      gradient: "from-orange-50 to-red-50 dark:from-slate-700 dark:to-slate-600",
      iconBg: "bg-orange-600"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay informed with instant notifications and real-time updates on your financial status and spending alerts.",
      gradient: "from-teal-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600",
      iconBg: "bg-teal-600"
    },
    {
      icon: Eye,
      title: "Smart Budgeting",
      description: "Create intelligent budgets that adapt to your lifestyle with AI-powered recommendations and automatic adjustments.",
      gradient: "from-pink-50 to-rose-50 dark:from-slate-700 dark:to-slate-600",
      iconBg: "bg-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Intelligent Financial Features</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive insights into your financial behavior with cutting-edge machine learning algorithms.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`bg-gradient-to-br ${feature.gradient} border-0 hover:shadow-lg transition-all`}>
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}