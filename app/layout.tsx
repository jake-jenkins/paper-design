import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Paper'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-dvh flex-col">
          <header className="theme-bg bg-linear-to-b px-8 pt-4 pb-12 sticky z-50 top-0">
            <div className="flex items-center">
              <div className="text-4xl font-extralight select-none">Paper</div>
              <div className="flex-1 text-end">
                <a href="" className="px-4 py-2.5 border border-blue-300 rounded-xl hover:bg-red-700 hover:border-red-600 text-base">Sign out</a>
              </div>
            </div>
          </header>

          <main className="flex-1 px-8 py-4">
            <div className="w-full max-w-5xl">{children}</div>
          </main>

          <footer className="theme-bg bg-linear-to-t px-4 pt-16 pb-6 text-center">
            Getting better all the time, at the IPO.
          </footer>
        </div>
      </body>
    </html>
  );
}
