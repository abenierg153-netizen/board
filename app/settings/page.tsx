"use client";

import { Settings as SettingsIcon, User, Bell, Lock, Globe, CreditCard } from "lucide-react";

export default function SettingsPage() {
  const settingsSections = [
    {
      title: "Profile Settings",
      description: "Manage your account information and preferences",
      icon: User,
    },
    {
      title: "Notifications",
      description: "Configure notification preferences and alerts",
      icon: Bell,
    },
    {
      title: "Security",
      description: "Password, authentication, and security settings",
      icon: Lock,
    },
    {
      title: "Clinic Settings",
      description: "Business hours, location, and clinic information",
      icon: Globe,
    },
    {
      title: "Billing & Payments",
      description: "Payment methods and subscription management",
      icon: CreditCard,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Manage your account and application settings
          </p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {settingsSections.map((section) => (
          <div 
            key={section.title} 
            className="card-surface p-6 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <section.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{section.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{section.description}</p>
              </div>
              <div className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card-surface p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Export Data
          </button>
          <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Clear Cache
          </button>
          <button className="px-4 py-2 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}



