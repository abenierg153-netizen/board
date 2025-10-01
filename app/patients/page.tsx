"use client";

import { Users, Plus, Search, Filter } from "lucide-react";
import { useState } from "react";

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Patients</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Manage patient records and information
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Patient</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="card-surface p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search patients by name, ID, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Patients List */}
      <div className="card-surface p-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No Patients Yet</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-md">
            Start by adding your first patient to begin managing their records and appointments.
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Your First Patient</span>
          </button>
        </div>
      </div>
    </div>
  );
}



