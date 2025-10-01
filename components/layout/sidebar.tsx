"use client";

import { LayoutDashboard, Settings, Users, UserPlus, FileText, BarChart3, DollarSign, TrendingUp, HelpCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useAuth } from "@/components/providers/auth-provider";

const routes = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Settings, label: "Services", href: "/appointments" },
  { icon: Users, label: "Leads", href: "/patients" },
  { icon: UserPlus, label: "Ambassadors", href: "/ambassadors" },
  { icon: FileText, label: "Content", href: "/billing" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: DollarSign, label: "Finance", href: "/settings" },
  { icon: TrendingUp, label: "Predictions", href: "/ai" },
  { icon: HelpCircle, label: "Help", href: "/settings" }
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  // Get user initials for avatar
  const getInitials = (email: string | undefined) => {
    if (!email) return "YD";
    const parts = email.split("@")[0].split(".");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return email.substring(0, 2).toUpperCase();
  };

  // Get display name from email
  const getDisplayName = (email: string | undefined) => {
    if (!email) return "Guest";
    const username = email.split("@")[0];
    return username
      .split(".")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  };

  return (
    <div className="card-surface w-full p-6 flex flex-col h-full">
      {/* Logo & Branding */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-white">Premium</h2>
          </div>
        </div>
        <p className="text-xs text-slate-400 ml-1">Dashboard</p>
      </div>

      {/* Main Menu Label */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4">Main Menu</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 flex-1">
        {routes.map(({ icon: Icon, label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                isActive
                  ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20"
                  : "hover:bg-slate-700/30 text-slate-300 hover:text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="mt-6 pt-6 border-t border-slate-700/50">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold text-sm">
            {getInitials(user?.email)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{getDisplayName(user?.email)}</p>
            <p className="text-xs text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}


