import SideBar from "@/components/sidebar/app.sidebar";
import "./globals.css";
import { Lato } from "next/font/google";
import AppHeader from "@/components/header/app.header";

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({ weight: ["400", "700", "900"], subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <SideBar />
                <main className="sm:ml-[204px] bg-[#f5f5f5] sm:bg-[#f5f5f5] h-screen">
                    <AppHeader />
                    {children}
                </main>
            </body>
        </html>
    );
}
