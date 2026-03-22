"use client";
import Link from "next/link";

export default function Home() {
      return (
              <main className="min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>
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
              
                    <section className="py-24 px-8 text-center relative overflow-hidden"
                                style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9B59D6 100%)" }}>
                            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
                                          style={{ background: "#F5A623", transform: "translate(30%, -30%)" }} />
                            <div className="relative max-w-3xl mx-auto">
                                      <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white mb-6"
                                                      style={{ background: "rgba(255,255,255,0.15)" }}>
                                                  Available on iOS and Android
                                      </div>div>
                                      <h1 className="text-5xl font-black text-white leading-tight mb-4">
                                                  Know exactly where<br />
                                                  <span style={{ color: "#FFC85A" }}>your bus is</span>span>, always.
                                      </h1>h1>
                                      <p className="text-lg text-white/80 font-semibold mb-10 max-w-xl mx-auto">
                                                  Real-time school bus tracking built for families, drivers, and bus companies.
                                      </p>p>
                                      <div className="flex gap-4 justify-center flex-wrap">
                                                  <Link href="/auth/signup"
                                                                    className="px-8 py-4 rounded-full font-extrabold text-white transition-all hover:-translate-y-1"
                                                                    style={{ background: "#F5A623", boxShadow: "0 8px 28px rgba(245,166,35,0.4)" }}>
                                                                Sign Up Free
                                                  </Link>Link>
                                                  <Link href="/auth/login"
                                                                    className="px-8 py-4 rounded-full font-extrabold text-white border-2 transition-all hover:bg-white/20"
                                                                    style={{ borderColor: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.1)" }}>
                                                                Sign In
                                                  </Link>Link>
                                      </div>div>
                            </div>div>
                    </section>section>
              
                    <div className="bg-white py-8 px-8 flex justify-center gap-16 flex-wrap shadow-sm">
                            <div className="text-center">
                                      <div className="text-3xl font-black" style={{ color: "#7B2FBE" }}>12K+</div>div>
                                      <div className="text-sm font-semibold text-gray-500 mt-1">Families tracking daily</div>div>
                            </div>div>
                            <div className="text-center">
                                      <div className="text-3xl font-black" style={{ color: "#7B2FBE" }}>340+</div>div>
                                      <div className="text-sm font-semibold text-gray-500 mt-1">Bus companies</div>div>
                            </div>div>
                            <div className="text-center">
                                      <div className="text-3xl font-black" style={{ color: "#7B2FBE" }}>98%</div>div>
                                      <div className="text-sm font-semibold text-gray-500 mt-1">Driver compliance</div>div>
                            </div>div>
                    </div>div>
              
                    <section className="py-20 px-8 max-w-5xl mx-auto">
                            <h2 className="text-3xl font-black text-center mb-2">
                                      Built for <span style={{ color: "#7B2FBE" }}>everyone</span>span> on the route
                            </h2>h2>
                            <p className="text-center text-gray-500 font-semibold mb-12">
                                      Parents, drivers, and bus companies — all connected, all protected.
                            </p>p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                      <div className="rounded-3xl p-8 text-white"
                                                      style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59D6)" }}>
                                                  <div className="text-4xl mb-4">👨‍👩‍👧</div>div>
                                                  <h3 className="text-xl font-black mb-2">Parents and Families</h3>h3>
                                                  <p className="text-sm opacity-90 font-semibold leading-relaxed">Real-time bus location, arrival alerts, and up to 6 family members per plan.</p>p>
                                      </div>div>
                                      <div className="rounded-3xl p-8 text-white"
                                                      style={{ background: "linear-gradient(135deg, #F5A623, #FFC85A)" }}>
                                                  <div className="text-4xl mb-4">🚌</div>div>
                                                  <h3 className="text-xl font-black mb-2">Bus Drivers</h3>h3>
                                                  <p className="text-sm opacity-90 font-semibold leading-relaxed">One tap to start your route. Earn bonuses for performance.</p>p>
                                      </div>div>
                                      <div className="rounded-3xl p-8 text-white"
                                                      style={{ background: "linear-gradient(135deg, #2D2D2D, #555)" }}>
                                                  <div className="text-4xl mb-4">🏢</div>div>
                                                  <h3 className="text-xl font-black mb-2">Bus Companies</h3>h3>
                                                  <p className="text-sm opacity-90 font-semibold leading-relaxed">Full fleet visibility, driver accountability, and a new revenue stream.</p>p>
                                      </div>div>
                            </div>div>
                    </section>section>
              
                    <section className="py-20 px-8 text-center"
                                style={{ background: "linear-gradient(135deg, #F5A623 0%, #FFC85A 100%)" }}>
                            <h2 className="text-4xl font-black text-white mb-4">
                                      Your child s bus. In your pocket.
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
              
                    <footer className="bg-gray-900 text-white/60 py-10 px-8 text-center">
                            <div className="font-black text-white text-xl mb-2">Navbus</div>div>
                            <div className="text-sm font-semibold">Nav-ur-bus and they are safe with us</div>div>
                            <div className="mt-6 text-xs">2024 Navbus. All rights reserved.</div>div>
                    </footer>footer>
              </main>main>
            );
}</nav>
