import SideBar from "@/components/sidebar/app.sidebar";
import "./globals.css";
import { Lato } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({ weight: ["400", '700', '900'], subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <SideBar />
                <main className="ml-[204px]">{children}</main>
            </body>
        </html>
    );
}
