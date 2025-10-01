import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import { TopNav } from "@/components/layout/top-nav";
import { Sidebar } from "@/components/layout/sidebar";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Yanet Dental Clinic",
  description: "Modern dental clinic dashboard with ambassador management"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const MobileBottomNav = dynamic(() => import("@/components/layout/bottom-nav"), { ssr: false });

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AuthProvider>
            <div className="min-h-screen flex">
              <aside className="hidden lg:flex w-72 p-4 min-h-screen">
                <Sidebar />
              </aside>
              <main className="flex-1 flex flex-col min-h-screen">
                <TopNav />
                <div className="p-4 sm:p-6 lg:p-8 flex-1">{children}</div>
              </main>
            </div>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
              <div className="card-surface mx-3 mb-3 p-2">
                <MobileBottomNav />
              </div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

