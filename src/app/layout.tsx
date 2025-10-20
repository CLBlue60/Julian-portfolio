import './globals.css';

export const metadata = {
  title: "JL Media - Julian's Photography Portfolio",
  description: 'Photography portfolio showcase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sand text-black">
        {/* Header with centered links */}
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-sky">
          <nav className="w-full px-4 max-w-7xl mx-auto">
            <div className="flex items-center py-4 w-full">
              {/* Left: Logo */}
              <div className="flex-1 flex flex-col items-start">
                <h1 className="text-2xl font-russo text-black">JL Media</h1>
              </div>

              <div className="flex flex-none gap-8 md:gap-14 items-center justify-center">
                <a
                  href="#gallery"
                  className="relative font-urbanist text-sky hover:text-black transition-colors font-medium text-xl group px-6 py-2"
                >
                  Gallery
                  <span className="block absolute left-1/2 bottom-0 h-0.5 bg-sky transition-all duration-300 -translate-x-1/2 w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"></span>
                </a>
                <a
                  href="#about"
                  className="relative font-urbanist text-sky hover:text-black transition-colors font-medium text-xl group px-6 py-2"
                >
                  About
                  <span className="block absolute left-1/2 bottom-0 h-0.5 bg-sky transition-all duration-300 -translate-x-1/2 w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"></span>
                </a>
                <a
                  href="#contact"
                  className="relative font-urbanist text-sky hover:text-black transition-colors font-medium text-xl group px-6 py-2"
                >
                  Contact
                  <span className="block absolute left-1/2 bottom-0 h-0.5 bg-sky transition-all duration-300 -translate-x-1/2 w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"></span>
                </a>
              </div>

              {/* Right: Empty for balance */}
              <div className="flex-1" />
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <p className="text-lg mb-4 text-sky">Let&apos;s create something beautiful</p>
            <p className="text-gray-400">&copy; 2024 Julian&apos;s Portfolio</p>
          </div>
        </footer>
      </body>
    </html>
  );
}