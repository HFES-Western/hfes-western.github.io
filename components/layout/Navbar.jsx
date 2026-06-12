"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/content";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#4F2683] flex items-center justify-center text-white font-bold text-sm rounded-sm select-none">
                            W
                        </div>
                        <div className="leading-tight">
                            <div className="text-[10px] text-[#807F83] uppercase tracking-widest font-medium">Western University</div>
                            <div className="text-sm font-semibold text-[#4F2683]">HFES Student Chapter</div>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                                    pathname === link.href
                                        ? "text-[#4F2683] bg-[#f3effe]"
                                        : "text-neutral-600 hover:text-[#4F2683] hover:bg-neutral-50"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="ml-3 bg-[#4F2683] text-white px-5 py-2 text-sm font-medium hover:bg-[#3a1a66] transition-colors rounded-sm">
                            Join Us
                        </Link>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-neutral-600 hover:text-[#4F2683]"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <nav className="md:hidden border-t border-neutral-100 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`block px-3 py-2.5 text-sm font-medium rounded-sm transition-colors ${
                                    pathname === link.href
                                        ? "text-[#4F2683] bg-[#f3effe]"
                                        : "text-neutral-600 hover:text-[#4F2683]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 px-3">
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="block text-center bg-[#4F2683] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#3a1a66] transition-colors rounded-sm"
                            >
                                Join Us
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}