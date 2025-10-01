"use client";

import { Calendar, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function AppointmentsPage() {
  const [currentDate] = useState(new Date());
  
  const monthYear = currentDate.toLocaleDateString("en-US", { 
    month: "long", 
    year: "numeric" 
  });

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Appointments</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Schedule and manage patient appointments
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Appointment</span>
        </button>
      </div>

      {/* Calendar Navigation */}
      <div className="card-surface p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{monthYear}</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Today
            </button>
            <button className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Appointments View */}
      <div className="card-surface p-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No Appointments Scheduled</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-md">
            Schedule your first appointment to start managing your clinic calendar.
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Schedule Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
}



