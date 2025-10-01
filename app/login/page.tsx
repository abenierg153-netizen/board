"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setLoading(false);
    if (error) setMessage(error.message);
    else setMessage("Check your email for the magic link.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md space-y-4">
        <h1 className="text-xl font-display">Login to Yanet Dental</h1>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-xl dark:bg-slate-800 dark:border-slate-700"
        />
        <Button onClick={handleLogin} disabled={loading} className="w-full">
          {loading ? "Sending..." : "Send Magic Link"}
        </Button>
        {message && <p className="text-sm text-slate-500">{message}</p>}
      </Card>
    </div>
  );
}
