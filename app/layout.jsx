import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: {
        default: "HFES Western | Human Factors & Ergonomics Society",
        template: "%s | HFES Western",
    },
    description:
        "Western University's Human Factors and Ergonomics Society Student Chapter — promoting the science of human factors through research, events, and community.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen">
        <Topbar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
        </html>
    );
}