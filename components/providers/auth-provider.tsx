"use client";

import { supabase } from "@/lib/supabase";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export type UserSession = {
  user: User | null;
  role: string | null;
  loading: boolean;
};

const AuthContext = createContext<UserSession | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<UserSession>({ user: null, role: null, loading: true });

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session) {
        setSession({
          user: data.session.user,
          role: data.session.user?.app_metadata?.role || null,
          loading: false
        });
      } else {
        setSession({ user: null, role: null, loading: false });
      }
    });

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession({
          user: session.user,
          role: session.user?.app_metadata?.role || null,
          loading: false
        });
      } else {
        setSession({ user: null, role: null, loading: false });
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // Show loading state while checking authentication
  if (session.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0B1220]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return <AuthContext.Provider value={session}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
