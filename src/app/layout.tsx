import SideBar from "@/components/sidebar/app.sidebar";
import "./globals.css";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SideBar />
                <main className="ml-[204px]">{children}</main>
            </body>
        </html>
    );
}
