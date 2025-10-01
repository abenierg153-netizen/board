"use client";

import { DollarSign, Plus, Download, TrendingUp } from "lucide-react";

export default function BillingPage() {
  const stats = [
    { label: "Total Revenue", value: "$0", change: "+0%", trend: "up" },
    { label: "Pending Invoices", value: "0", change: "0 unpaid", trend: "neutral" },
    { label: "This Month", value: "$0", change: "+0%", trend: "up" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Billing & Invoices</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Manage payments, invoices, and financial records
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create Invoice</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card-surface p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{stat.change}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Invoices List */}
      <div className="card-surface p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Recent Invoices</h2>
          <button className="flex items-center gap-2 px-3 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
            <DollarSign className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No Invoices Yet</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-md">
            Create your first invoice to start tracking payments and revenue.
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Create First Invoice</span>
          </button>
        </div>
      </div>
    </div>
  );
}



