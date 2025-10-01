import { BarChart3, CheckCircle, Clock, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-8 animate-fadeInUp">
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
          Dashboard Overview
        </h1>
        <p className="text-lg text-slate-300">
          Welcome back! Here is what is happening with your projects today.
        </p>
      </header>

      {/* KPI Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Total Projects */}
        <div className="kpi-card bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-3">
                  Total Projects
                </p>
                <h2 className="text-5xl font-display font-bold text-white">24</h2>
                <div className="flex items-center gap-2 mt-3">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">12% from last month</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/30 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-blue-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Ended Projects */}
        <div className="kpi-card bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-3">
                  Ended Projects
                </p>
                <h2 className="text-5xl font-display font-bold text-white">18</h2>
                <div className="flex items-center gap-2 mt-3">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">8% from last month</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-purple-500/30 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-purple-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Running Projects */}
        <div className="kpi-card bg-gradient-to-br from-green-500/20 to-green-600/10 p-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-3">
                  Running Projects
                </p>
                <h2 className="text-5xl font-display font-bold text-white">6</h2>
                <div className="flex items-center gap-2 mt-3">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Active</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-green-500/30 flex items-center justify-center">
                <Clock className="w-8 h-8 text-green-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Pending Projects */}
        <div className="kpi-card bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 p-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-3">
                  Pending Projects
                </p>
                <h2 className="text-5xl font-display font-bold text-white">3</h2>
                <div className="flex items-center gap-2 mt-3">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-yellow-400 font-medium">Awaiting approval</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/30 flex items-center justify-center">
                <Clock className="w-8 h-8 text-yellow-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="card-surface p-8 min-h-[300px]">
          <h3 className="text-xl font-display font-semibold text-white mb-4">Recent Activity</h3>
          <p className="text-slate-400">Activity timeline coming soon...</p>
        </div>
        <div className="card-surface p-8 min-h-[300px]">
          <h3 className="text-xl font-display font-semibold text-white mb-4">Project Analytics</h3>
          <p className="text-slate-400">Analytics charts coming soon...</p>
        </div>
      </section>
    </div>
  );
}


