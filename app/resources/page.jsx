"use client";

import { useState } from "react";

export default function ContactPage() {
    const [state, setState] = useState("idle");
    const [form, setForm] = useState({
        name: "", email: "", program: "", year: "", reason: "join", message: ""
    });

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit() {
        setState("submitting");
        await new Promise((r) => setTimeout(r, 1000));
        setState("success");
    }

    const inputClass = "w-full border border-neutral-300 px-3 py-2.5 text-sm focus:outline-none focus:border-[#4F2683] focus:ring-1 focus:ring-[#4F2683] transition-colors rounded-sm";

    return (
        <div className="max-w-6xl mx-auto px-6 py-14">
            <div className="mb-12">
                <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-2">Connect With Us</p>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">Contact &amp; Join</h1>
                <p className="text-neutral-500 max-w-xl text-sm leading-relaxed">
                    Interested in joining the chapter or want to learn more? Reach out.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    {state === "success" ? (
                        <div className="bg-green-50 border border-green-200 p-8 text-center rounded-sm">
                            <h2 className="font-bold text-xl text-neutral-800 mb-2">Message Sent!</h2>
                            <p className="text-sm text-neutral-500">Thanks! We will get back to you at <strong>{form.email}</strong> shortly.</p>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="name">Full Name</label>
                                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} placeholder="Jane Smith" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="email">Email Address</label>
                                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="jane@uwo.ca" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="program">Program</label>
                                    <input id="program" name="program" type="text" value={form.program} onChange={handleChange} className={inputClass} placeholder="e.g. Kinesiology" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="year">Year</label>
                                    <select id="year" name="year" value={form.year} onChange={handleChange} className={inputClass + " bg-white"}>
                                        <option value="">Select year</option>
                                        <option value="1">1st Year</option>
                                        <option value="2">2nd Year</option>
                                        <option value="3">3rd Year</option>
                                        <option value="4">4th Year</option>
                                        <option value="grad">Graduate Student</option>
                                        <option value="faculty">Faculty / Staff</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="reason">Reason</label>
                                <select id="reason" name="reason" value={form.reason} onChange={handleChange} className={inputClass + " bg-white"}>
                                    <option value="join">I want to join the chapter</option>
                                    <option value="events">Question about events</option>
                                    <option value="research">Research opportunities</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-neutral-600 mb-1.5" htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={inputClass + " resize-none"} placeholder="Tell us about yourself..." />
                            </div>
                            <button onClick={handleSubmit} disabled={state === "submitting"}
                                    className="bg-[#4F2683] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#3a1a66] transition-colors rounded-sm disabled:opacity-60">
                                {state === "submitting" ? "Sending…" : "Send Message"}
                            </button>
                        </div>
                    )}
                </div>

                <aside className="space-y-8">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-2">Direct Contact</p>
                        <a href="mailto:hfes@uwo.ca" className="text-sm font-medium text-[#4F2683] hover:underline underline-offset-2">hfes@uwo.ca</a>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-2">Location</p>
                        <address className="not-italic text-sm text-neutral-600 leading-relaxed">
                            Western University<br />London, Ontario<br />Canada
                        </address>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-2">When We Meet</p>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                            Monthly during the academic year. Check the <a href="/events" className="text-[#4F2683] hover:underline underline-offset-2">Events page</a> for the schedule.
                        </p>
                    </div>
                    <div className="bg-[#f3effe] border border-purple-200 p-5">
                        <p className="text-xs font-semibold text-[#4F2683] uppercase tracking-wider mb-2">Membership</p>
                        <p className="text-sm text-neutral-600 leading-relaxed">Open to all Western students. No fees.</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}