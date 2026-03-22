"use client";
import Link from "next/link";

export default function Home() {
    return (
          <main className="min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>

            {/* NAV */}
                  <nav className="bg-white sticky top-0 z-50 shadow-sm px-8 py-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg"
                                                  style={{ background: "linear-gradient(135deg, #7B2FBE, #F5A623)", color: "white" }}>
                                                N
                                    </div>div>
                                    <span className="text-xl font-black text-gray-800">
                                                Nav<span style={{ color: "#F5A623" }}>bus</span>span>
                                    </span>span>
                          </div>div>
                          <div className="flex items-center gap-3">
                                    <Link href="/auth/login"
                                                  className="px-5 py-2 rounded-full font-bold text-sm transition-all hover:bg-purple-50"
                                                  style={{ color: "#7B2FBE" }}>
                                                Sign In
                                    </Link>Link>
                                    <Link href="/auth/signup"
                                                  className="px-5 py-2 rounded-full font-bold text-sm text-white transition-all hover:-translate-y-0.5"
                                                  style={{ background: "#F5A623", boxShadow: "0 4px 14px rgba(245,166,35,0.3)" }}>
                                                Get Started
                                    </Link>Link>
                          </div>div>
                  </nav>nav>
          
            {/* HERO */}
                <section className="py-24 px-8 text-center relative overflow-hidden"
                          style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9B59D6 100%)" }}>
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
                                    style={{ background: "#F5A623", transform: "translate(30%, -30%)" }} />
                        <div className="relative max-w-3xl mx-auto">
                                  <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white mb-6"
                                                style={{ background: "rgba(255,255,255,0.15)" }}>
                                              🚌 Available on iOS & Android
                                  </div>div>
                                  <h1 className="text-5xl font-black text-white leading-tight mb-4">
                                              Know exactly where<br />
                                              <span style={{ color: "#FFC85A" }}>your bus is</span>span>, always.
                                  </h1>h1>
                                  <p className="text-lg text-white/80 font-semibold mb-10 max-w-xl mx-auto">
                                              Real-time school bus tracking built for families, drivers, and bus companies.
                                              Nav-ur-bus and they&apos;re safe with us.
                                  </p>p>
                                  <div className="flex gap-4 justify-center flex-wrap">
                                              <Link href="/auth/signup"
                                                              className="px-8 py-4 rounded-full font-extrabold text-white transition-all hover:-translate-y-1"
                                                              style={{ background: "#F5A623", boxShadow: "0 8px 28px rgba(245,166,35,0.4)" }}>
                                                            Sign Up Free →
                                              </Link>Link>
                                              <Link href="/auth/login"
                                                              className="px-8 py-4 rounded-full font-extrabold text-white border-2 transition-all hover:bg-white/20"
                                                              style={{ borderColor: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.1)" }}>
                                                            Sign In
                                              </Link>Link>
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* STATS */}
                <div className="bg-white py-8 px-8 flex justify-center gap-16 flex-wrap shadow-sm">
                  {[
            { num: "12K+", label: "Families tracking daily" },
            { num: "340+", label: "Bus companies" },
            { num: "98%", label: "Driver compliance" },
            { num: "4.8★", label: "App Store rating" },
                    ].map((s) => (
                                <div key={s.label} className="text-center">
                                            <div className="text-3xl font-black" style={{ color: "#7B2FBE" }}>{s.num}</div>div>
                                            <div className="text-sm font-semibold text-gray-500 mt-1">{s.label}</div>div>
                                </div>div>
                              ))}
                </div>div>
          
            {/* WHO IS IT FOR */}
                <section className="py-20 px-8 max-w-5xl mx-auto">
                        <h2 className="text-3xl font-black text-center mb-2">
                                  Built for <span style={{ color: "#7B2FBE" }}>everyone</span>span> on the route
                        </h2>h2>
                        <p className="text-center text-gray-500 font-semibold mb-12">
                                  Parents, drivers, and bus companies — all connected, all protected.
                        </p>p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {[
            {
                            icon: "👨‍👩‍👧", title: "Parents & Families",
                            desc: "Real-time bus location, arrival alerts, and up to 6 family members per plan.",
                            bg: "linear-gradient(135deg, #7B2FBE, #9B59D6)"
            },
            {
                            icon: "🚌", title: "Bus Drivers",
                            desc: "One tap to start your route. Earn bonuses for performance. Zero off-duty tracking.",
                            bg: "linear-gradient(135deg, #F5A623, #FFC85A)"
            },
            {
                            icon: "🏢", title: "Bus Companies",
                            desc: "Full fleet visibility, driver accountability, approvals, and a new revenue stream.",
                            bg: "linear-gradient(135deg, #2D2D2D, #555)"
            },
                      ].map((card) => (
                                    <div key={card.title} className="rounded-3xl p-8 text-white relative overflow-hidden"
                                                    style={{ background: card.bg }}>
                                                  <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full opacity-10 bg-white"
                                                                    style={{ transform: "translate(30%, 30%)" }} />
                                                  <div className="text-4xl mb-4">{card.icon}</div>div>
                                                  <h3 className="text-xl font-black mb-2">{card.title}</h3>h3>
                                                  <p className="text-sm opacity-90 font-semibold leading-relaxed">{card.desc}</p>p>
                                    </div>div>
                                  ))}
                        </div>div>
                </section>section>
          
            {/* HOW IT WORKS */}
                <section className="py-20 px-8" style={{ background: "#F3EAFD" }}>
                        <div className="max-w-5xl mx-auto">
                                  <h2 className="text-3xl font-black text-center mb-2">
                                              How <span style={{ color: "#7B2FBE" }}>Navbus</span>span> works
                                  </h2>h2>
                                  <p className="text-center text-gray-500 font-semibold mb-12">
                                              Simple for everyone. Powerful behind the scenes.
                                  </p>p>
                                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                    {[
            { n: 1, title: "Family signs up", desc: "Parents create an account for their child's route." },
            { n: 2, title: "Company approves", desc: "Bus company verifies and approves within 24h." },
            { n: 3, title: "Driver starts route", desc: "One tap — live tracking begins." },
            { n: 4, title: "Parents track live", desc: "See the bus on the map with ETA to your stop." },
            { n: 5, title: "Route ends", desc: "Driver taps Stop. All tracking ceases." },
                        ].map((step) => (
                                        <div key={step.n} className="bg-white rounded-2xl p-6 text-center shadow-md">
                                                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-lg text-white mx-auto mb-4"
                                                                            style={{ background: "#F5A623" }}>
                                                          {step.n}
                                                        </div>div>
                                                        <h4 className="font-extrabold mb-2 text-sm">{step.title}</h4>h4>
                                                        <p className="text-xs text-gray-500 font-semibold leading-relaxed">{step.desc}</p>p>
                                        </div>div>
                                      ))}
                                  </div>div>
                        </div>div>
                </section>section>
          
            {/* CTA */}
                <section className="py-20 px-8 text-center"
                          style={{ background: "linear-gradient(135deg, #F5A623 0%, #FFC85A 100%)" }}>
                        <h2 className="text-4xl font-black text-white mb-4">
                                  Your child&apos;s bus. In your pocket. 🚌
                        </h2>h2>
                        <p className="text-white/90 font-semibold text-lg mb-8">
                                  Join thousands of families who never worry about the school bus again.
                        </p>p>
                        <Link href="/auth/signup"
                                    className="inline-block px-10 py-4 rounded-full font-black text-lg transition-all hover:-translate-y-1"
                                    style={{ background: "white", color: "#F5A623", boxShadow: "0 8px 28px rgba(0,0,0,0.12)" }}>
                                  Sign Up Free Today
                        </Link>Link>
                </section>section>
          
            {/* FOOTER */}
                <footer className="bg-gray-900 text-white/60 py-10 px-8 text-center">
                        <div className="font-black text-white text-xl mb-2">Navbus©</div>div>
                        <div className="text-sm font-semibold">Nav-ur-bus and they&apos;re safe with us</div>div>
                        <div className="mt-6 text-xs">© 2024 Navbus. All rights reserved.</div>div>
                </footer>footer>
          </main>main>
        );
}</nav>
