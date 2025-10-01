"use client";

import { Sparkles, MessageSquare, Image, FileText, Zap } from "lucide-react";

export default function AIPage() {
  const aiFeatures = [
    {
      title: "AI Assistant",
      description: "Get intelligent recommendations for treatment plans",
      icon: MessageSquare,
      status: "Coming Soon",
    },
    {
      title: "Image Analysis",
      description: "AI-powered dental X-ray and image analysis",
      icon: Image,
      status: "Coming Soon",
    },
    {
      title: "Smart Documentation",
      description: "Automatically generate patient notes and reports",
      icon: FileText,
      status: "Coming Soon",
    },
    {
      title: "Predictive Insights",
      description: "Forecast appointment trends and patient needs",
      icon: Zap,
      status: "Coming Soon",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AI Features</h1>
            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Beta
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Enhance your practice with AI-powered tools and insights
          </p>
        </div>
      </div>

      {/* AI Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {aiFeatures.map((feature) => (
          <div key={feature.title} className="card-surface p-6 relative overflow-hidden group">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                {feature.status}
              </span>
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Main AI Interface */}
      <div className="card-surface p-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold mb-2">AI Features Coming Soon</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-4">
            We're working on powerful AI features to help you provide better patient care and streamline your practice management.
          </p>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="card-surface p-6 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Early Access Program</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Sign up for early access to test our AI features and help shape the future of dental practice management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



