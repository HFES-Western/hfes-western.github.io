import Link from "next/link";

export default function Topbar() {
    return (
        <div className="bg-[#4F2683] text-white text-xs">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-9">
                <Link
                    href="https://www.uwo.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold tracking-widest uppercase hover:text-purple-200 transition-colors"
                >
                    Western University (logo here instead)
                </Link>
                <div className="hidden sm:flex items-center gap-6 text-purple-200">
                    <Link href="https://www.uwo.ca/research" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Research</Link>
                    <Link href="https://student.uwo.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Students</Link>
                    <Link href="https://www.eng.uwo.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Engineering</Link>
                    <Link href="https://www.hfes.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">HFES National</Link>
                </div>
            </div>
        </div>
    );
}