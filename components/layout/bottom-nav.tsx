"use client";

import { Home, Calendar, Users, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const routes = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Calendar, label: "Calendar", href: "/appointments" },
  { icon: Users, label: "Patients", href: "/patients" },
  { icon: Settings, label: "Settings", href: "/settings" }
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around">
      {routes.map(({ icon: Icon, label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors",
              isActive ? "text-primary" : "text-slate-500 dark:text-slate-400"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}


