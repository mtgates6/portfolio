import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Gates - Portfolio",
  description: "Personal portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} m-0 p-0 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <nav className="fixed top-0 left-0 right-0 w-full h-[64px] bg-white/10 backdrop-blur-[8px] z-50 shadow-md border-b border-gray-200/20 dark:bg-gray-900/10">
          <div className="grid grid-rows-1 h-full items-center px-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Matthew Gates</div>
              <div className="flex items-center space-x-4">
                <DarkModeToggle />
                <div className="hidden md:flex space-x-8">
                  <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-300">Home</a>
                  <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">About</a>
                  <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">Projects</a>
                  <a href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">Skills</a>
                  <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16 min-h-screen bg-white dark:bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
}
