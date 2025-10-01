"use client";

import { FileText, Download, Calendar, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  const reportTypes = [
    { 
      title: "Patient Analytics", 
      description: "Demographics, trends, and patient insights",
      icon: TrendingUp 
    },
    { 
      title: "Financial Reports", 
      description: "Revenue, expenses, and financial performance",
      icon: FileText 
    },
    { 
      title: "Appointment Stats", 
      description: "Scheduling patterns and attendance rates",
      icon: Calendar 
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Reports & Analytics</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            View insights and generate detailed reports
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reportTypes.map((report) => (
          <div key={report.title} className="card-surface p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <report.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{report.description}</p>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="card-surface p-6">
        <h2 className="text-lg font-semibold mb-6">Performance Overview</h2>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No Data Available</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Start using the system to generate analytics and insights about your clinic performance.
          </p>
        </div>
      </div>
    </div>
  );
}



