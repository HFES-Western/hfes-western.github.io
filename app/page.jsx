import Link from "next/link";
import { news, labs } from "@/data/content";

function Hero() {
    return (
        <section className="bg-gradient-to-br from-[#4F2683] to-[#1e0b3d] text-white">
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xs uppercase tracking-widest text-purple-300 mb-4 font-medium">
                            Western University Student Chapter
                        </p>
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                            Human Factors &amp;<br />
                            <span className="text-purple-300">Ergonomics Society</span>
                        </h1>
                        <p className="text-purple-100 text-lg leading-relaxed max-w-lg mb-8">
                            Promoting and advancing the understanding of human factors where we design systems, environments, and devices that work for people.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <Link href="/events" className="bg-white text-[#4F2683] px-6 py-3 text-sm font-semibold hover:bg-purple-100 transition-colors rounded-sm">
                                Upcoming Events
                            </Link>
                            <Link href="/contact" className="border border-purple-300 text-purple-100 px-6 py-3 text-sm font-semibold hover:border-white hover:text-white transition-colors rounded-sm">
                                Join the Chapter
                            </Link>
                        </div>
                    </div>

                    {/* HFES badge */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-3">
                        {/*<div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/10 border-2 border-purple-400 flex items-center justify-center">*/}
                        {/*    <div className="text-center px-4">*/}
                                <div className="text-5xl md:text-6xl font-bold tracking-tight text-white">HFES</div>
                                <div className="text-xs text-purple-300 tracking-widest uppercase mt-1">Western</div>
                        {/*    </div>*/}
                        {/*</div>*/}
                        <p className="text-xs text-purple-300 tracking-wide">
                            Systems That Work for <strong className="text-xs text-purple-300 tracking-wide">Humans</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stats() {
    const stats = [
        { value: "50+", label: "Active Members" },
        { value: "10+", label: "Events per Year" },
        { value: "6", label: "Research Labs" },
        { value: "2024", label: "ASPIRE Silver Award" },
    ];
    return (
        <section className="bg-[#f3effe] border-y border-purple-100">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <div className="text-3xl font-bold text-[#4F2683]">{s.value}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-2">About Us</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
                        Welcome to the HFES Western University Student Chapter
                    </h2>
                    <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
                        <p>
                            The Western University HFES Student Chapter is organized to serve the needs of the human factors profession at the University of Western Ontario. Our purpose is to promote and advance the understanding of human factors involved in the design, manufacture, and use of machines, systems, environments, and devices of all kinds.
                        </p>
                        <p>
                            This is accomplished through the interchange of knowledge and methodology in the behavioural, biological, and physical sciences and in industrial, computer science, and other relevant engineering disciplines. The Western University HFES Student Chapter is established as an affiliate of the Human Factors and Ergonomics Society.
                        </p>
                    </div>
                    <div className="mt-6">
                        <Link href="/team" className="bg-[#4F2683] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#3a1a66] transition-colors rounded-sm inline-block">
                            Meet the Team
                        </Link>
                    </div>
                </div>

                <aside>
                    <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-4">Related Links</p>
                    <ul className="space-y-2">
                        {[
                            { label: "Human Factors and Ergonomics Society", url: "https://www.hfes.org" },
                            { label: "Western Engineering", url: "https://www.eng.uwo.ca" },
                            { label: "Western Computer Science", url: "https://www.csd.uwo.ca" },
                        ].map((l) => (
                            <li key={l.label}>
                                <a href={l.url} target="_blank" rel="noopener noreferrer"
                                   className="text-sm text-[#4F2683] hover:underline underline-offset-2 flex items-start gap-1.5">
                                    <span className="mt-0.5 text-purple-400">›</span>
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    );
}

function Labs() {
    return (
        <section className="bg-neutral-50 border-t border-neutral-200">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-2">Research</p>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">Related Labs</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                        <tr className="bg-[#f3effe] text-left">
                            <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#4F2683] font-semibold border-b border-purple-200">Principal Investigator</th>
                            <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#4F2683] font-semibold border-b border-purple-200">Department</th>
                            <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#4F2683] font-semibold border-b border-purple-200">Research Lab</th>
                        </tr>
                        </thead>
                        <tbody>
                        {labs.map((lab, i) => (
                            <tr key={i} className="border-b border-neutral-200 hover:bg-purple-50 transition-colors">
                                <td className="px-4 py-3 text-neutral-700 font-medium">{lab.pi}</td>
                                <td className="px-4 py-3 text-neutral-500">{lab.department}</td>
                                <td className="px-4 py-3">
                                    <a href={lab.url} className="text-[#4F2683] hover:underline underline-offset-2">{lab.lab}</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function News() {
    const fmt = (d) =>
        new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" }).toUpperCase();

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <p className="text-xs uppercase tracking-widest text-[#4F2683] font-semibold mb-2">Latest</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">News &amp; Updates</h2>
                </div>
                <Link href="/events" className="hidden sm:inline-block border border-[#4F2683] text-[#4F2683] px-5 py-2 text-xs font-medium hover:bg-[#4F2683] hover:text-white transition-colors rounded-sm">
                    All News
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {news.map((item) => (
                    <article key={item.id} className="border border-neutral-200 hover:border-[#4F2683] hover:shadow-md transition-all duration-200 p-5 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <span className="text-xs bg-[#f3effe] text-[#4F2683] px-2 py-0.5 font-medium">{item.category}</span>
                            <time className="text-xs text-neutral-400">{fmt(item.date)}</time>
                        </div>
                        <div className="w-full h-36 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                            <span className="text-[#4F2683] text-xs font-medium opacity-50">Photo coming soon</span>
                        </div>
                        <h3 className="font-bold text-base text-neutral-800 leading-snug">{item.title}</h3>
                        <p className="text-sm text-neutral-500 leading-relaxed flex-1">{item.excerpt}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <About />
            <Labs />
            <News />
        </>
    );
}