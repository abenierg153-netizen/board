"use client";

import { Moon, Sun, Bell, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-xl bg-slate-800/60 border-b border-slate-700/50">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 flex-1 max-w-lg">
          <div className="flex items-center gap-3 flex-1 bg-slate-700/30 rounded-xl px-4 py-2 border border-slate-600/30">
            <Search className="w-5 h-5 text-slate-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search projects, tasks..."
              aria-label="Search projects and tasks"
              className="bg-transparent outline-none text-sm flex-1 placeholder:text-slate-400 text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-xl transition-colors flex items-center gap-2"
          >
            <span>+ Add Project</span>
          </button>
          <div className="relative">
            <button 
              aria-label="View notifications"
              className="p-2 rounded-xl hover:bg-slate-700/50 transition-colors relative"
            >
              <Bell className="w-5 h-5 text-slate-300" aria-hidden="true" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="p-2 rounded-xl hover:bg-slate-700/50 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-slate-300" aria-hidden="true" /> : <Moon className="w-5 h-5 text-slate-300" aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}


