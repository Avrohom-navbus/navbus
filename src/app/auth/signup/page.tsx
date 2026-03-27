"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Role = "parent" | "driver" | "company_admin";

const roleLabels: Record<Role, { icon: string; label: string; desc: string }> = {
  parent: { icon: "👨‍👩‍👧", label: "Parent / Family", desc: "Track your child's bus" },
  driver: { icon: "🚌", label: "Bus Driver", desc: "Manage and start your routes" },
  company_admin: { icon: "🏢", label: "Bus Company", desc: "Full fleet management" },
};

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("parent");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [routeCode, setRouteCode] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role, phone, route_code: routeCode },
      },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      // Create profile record
      await supabase.from("profiles").insert({
        id: data.user.id,
        email,
        full_name: fullName,
        role,
        approved: role === "company_admin", // companies auto-approved, others need review
      });
    }

    setSuccess(true);
    setLoading(false);
    if (role === "company_admin") {
      router.push("/dashboard/company");
    }
  }

  if (success && role !== "company_admin") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9B59D6 100%)" }}>
        <div className="bg-white rounded-4xl p-10 w-full max-w-md shadow-2xl text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-black mb-3">Account submitted!</h2>
          <p className="text-gray-500 font-semibold mb-6">
            Your account is under review. Your bus company will approve it within 24 hours.
            You&apos;ll get an email as soon as you&apos;re approved!
          </p>
          <Link href="/"
            className="inline-block px-8 py-3 rounded-full font-extrabold text-white"
            style={{ background: "#F5A623" }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9B59D6 100%)" }}>
      <div className="bg-white rounded-4xl p-10 w-full max-w-md shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl text-white"
            style={{ background: "linear-gradient(135deg, #7B2FBE, #F5A623)" }}>N</div>
          <span className="text-2xl font-black">Nav<span style={{ color: "#F5A623" }}>bus</span></span>
        </div>

        <h1 className="text-2xl font-black mb-1">Join Navbus 🚌</h1>
        <p className="text-gray-500 font-semibold text-sm mb-6">
          Create your account — reviewed and approved within 24 hours.
        </p>

        {/* Role tabs */}
        <div className="flex gap-2 mb-6">
          {(Object.keys(roleLabels) as Role[]).map((r) => (
            <button key={r} onClick={() => setRole(r)}
              className={`flex-1 py-2.5 rounded-2xl text-xs font-extrabold border-2 transition-all ${
                role === r ? "border-purple-600 bg-purple-50 text-purple-700" : "border-gray-100 text-gray-400"
              }`}>
              {roleLabels[r].icon}<br />{roleLabels[r].label.split(" ")[0]}
            </button>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 rounded-2xl p-4 mb-4 text-sm font-bold">{error}</div>
        )}

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-extrabold mb-2">Full Name</label>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} required
              placeholder="Sarah Johnson"
              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 font-semibold text-sm outline-none focus:border-purple-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-extrabold mb-2">Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              placeholder="you@email.com"
              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 font-semibold text-sm outline-none focus:border-purple-500 transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-extrabold mb-2">Phone Number</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 font-semibold text-sm outline-none focus:border-purple-500 transition-colors" />
          </div>
          {role === "parent" && (
            <div>
              <label className="block text-sm font-extrabold mb-2">Bus Route / Company Code</label>
              <input type="text" value={routeCode} onChange={e => setRouteCode(e.target.value)}
                placeholder="e.g. MAPLE-BUS-07"
                className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 font-semibold text-sm outline-none focus:border-purple-500 transition-colors" />
            </div>
          )}
          <div>
            <label className="block text-sm font-extrabold mb-2">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              placeholder="Create a strong password"
              className="w-full px-4 py-3 rounded-2xl border-2 border-gray-100 font-semibold text-sm outline-none focus:border-purple-500 transition-colors" />
          </div>
          <button type="submit" disabled={loading}
            className="w-full py-4 rounded-full font-extrabold text-white mt-2 transition-all hover:-translate-y-0.5 disabled:opacity-50"
            style={{ background: "#F5A623", boxShadow: "0 4px 20px rgba(245,166,35,0.35)" }}>
            {loading ? "Creating account..." : "Request Access →"}
          </button>
        </form>

        <p className="text-center text-sm font-semibold text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-extrabold" style={{ color: "#7B2FBE" }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
