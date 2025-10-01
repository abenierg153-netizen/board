"use client";

import { UserPlus, Plus, Search, Award } from "lucide-react";
import { useState } from "react";

export default function AmbassadorsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Ambassadors</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Manage referral partners and ambassador program
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Ambassador</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-surface p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Ambassadors</p>
              <p className="text-2xl font-bold mt-1">0</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
        <div className="card-surface p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Referrals</p>
              <p className="text-2xl font-bold mt-1">0</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
        <div className="card-surface p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Rewards Paid</p>
              <p className="text-2xl font-bold mt-1">$0</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="card-surface p-4">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search ambassadors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
      </div>

      {/* Ambassadors List */}
      <div className="card-surface p-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
            <UserPlus className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No Ambassadors Yet</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-md">
            Start building your referral network by adding your first ambassador.
          </p>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Add Your First Ambassador</span>
          </button>
        </div>
      </div>
    </div>
  );
}



