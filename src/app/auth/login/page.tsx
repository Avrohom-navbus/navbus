"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
              setError(error.message);
              setLoading(false);
              return;
      }

      // Get user role and redirect accordingly
      const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();

      const role = profile?.role || "parent";
        const routes: Record<string, string> = {
                parent: "/dashboard/parent",
                child: "/dashboard/child",
                driver: "/dashboard/driver",
                company_admin: "/dashboard/company",
                super_admin: "/dashboard/admin",
        };

      router.push(routes[role] || "/dashboard/parent");
  }

  return (
        <div className="min-h-screen flex items-center justify-center px-4"
                style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9B59D6 100%)" }}>
                <div className="bg-white rounded-4xl p-10 w-full max-w-md shadow-2xl">
                  {/* Logo */}
                        <div className="flex items-center gap-3 mb-8">
                                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl text-white"
                                                style={{ background: "linear-gradient(135deg, #7B2FBE, #F5A623)" }}>N</div>div>
                                  <span className="text-2xl font-black">Nav<span style={{ color: "#F5A623" }}>bus</span>span></span>span>
                        </div>div>
                
                        <h1 className="text-2xl font-black mb-1">Welcome back 👋</h1>h1>
                        <p className="text-gray-500 font-semibold text-sm mb-8">Sign in to your Navbus account</p>p>
                
                  {error && (
                            <div className="bg-red-50 text-red-600 rounded-2xl p-4 mb-6 text-sm font-bold">{error}</div>div>
                        )}
                
                        <form onSubmit={handleLogin} className="flex flex-col gap-4">
                                  <div>
                                              <label className="block text-sm font-extrabold mb-2">Email Address</label>label>
                                              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                                                              placeholder="you@email.com"
                                                              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 font-semibold text-sm outline-none focus:border-purple-500 transition-colors" />
                                  </div>div>
                                  <div>
                                              <label className="block text-sm font-extrabold mb-2">Password</label>label>
                                              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                                                              placeholder="Your password"
                                                              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 font-semibold text-sm outline-none focus:border-purple-500 transition-colors" />
                                  </div>div>
                                  <button type="submit" disabled={loading}
                                                className="w-full py-4 rounded-full font-extrabold text-white mt-2 transition-all hover:-translate-y-0.5 disabled:opacity-50"
                                                style={{ background: "#F5A623", boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}>
                                    {loading ? "Signing in..." : "Sign In →"}
                                  </button>button>
                        </form>form>
                
                        <p className="text-center text-sm font-semibold text-gray-500 mt-6">
                                  Don&apos;t have an account?{" "}
                                  <Link href="/auth/signup" className="font-extrabold" style={{ color: "#7B2FBE" }}>
                                              Sign Up
                                  </Link>Link>
                        </p>p>
                        <div className="text-center mt-3">
                                  <Link href="/" className="text-xs text-gray-400 font-semibold hover:text-gray-600">
                                              ← Back to home
                                  </Link>Link>
                        </div>div>
                </div>div>
        </div>div>
      );
}</div>
