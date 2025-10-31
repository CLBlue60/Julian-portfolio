import './globals.css';

export const metadata = {
  title: "JL Media - Julian's Photography Portfolio",
  description: 'Photography portfolio showcase',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-sand text-black">
        {/* Header with centered links (responsive) */}
        <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-sky">
          <nav className="w-full px-3 md:px-6 max-w-7xl mx-auto">
            <div className="flex items-center py-2 md:py-4 w-full">
              {/* Logo / title */}
              <div className="flex-1 flex items-center gap-3">
                <div>
                  <h1 className="text-lg md:text-2xl font-russo text-black leading-tight">JL Media</h1>
                  <p className="text-xs md:text-sm text-sky font-medium -mt-1 hidden md:block">Photography</p>
                </div>
              </div>

              {/* Desktop links */}
              <div className="hidden md:flex flex-none gap-4 md:gap-10 items-center justify-center">
                <a
                  href="#gallery"
                  className="relative font-urbanist text-sky hover:text-black transition-colors font-medium text-base md:text-xl group px-2 md:px-6 py-1"
                >
                  Gallery
                  <span className="block absolute left-1/2 bottom-0 h-0.5 bg-sky transition-all duration-300 -translate-x-1/2 w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"></span>
                </a>
                <a
                  href="#about"
                  className="relative font-urbanist text-sky hover:text-black transition-colors font-medium text-base md:text-xl group px-2 md:px-6 py-1"
                >
                  About
                  <span className="block absolute left-1/2 bottom-0 h-0.5 bg-sky transition-all duration-300 -translate-x-1/2 w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"></span>
                </a>
                <a
                  href="#contact"
                  className="relative font-urbanist text-sky hover:text-black transition-colors font-medium text-base md:text-xl group px-2 md:px-6 py-1"
                >
                  Contact
                  <span className="block absolute left-1/2 bottom-0 h-0.5 bg-sky transition-all duration-300 -translate-x-1/2 w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"></span>
                </a>
              </div>

              {/* Mobile menu (no JS) */}
              <div className="md:hidden flex items-center">
                <details className="relative">
                  <summary className="list-none p-2 rounded-md hover:bg-sand/30">
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </summary>

                  <div className="absolute right-0 mt-2 w-44 bg-white border border-white/20 rounded-md shadow-lg py-2 z-50">
                    <a href="#gallery" className="block px-4 py-2 text-sm text-sky hover:text-black">Gallery</a>
                    <a href="#about" className="block px-4 py-2 text-sm text-sky hover:text-black">About</a>
                    <a href="#contact" className="block px-4 py-2 text-sm text-sky hover:text-black">Contact</a>
                  </div>
                </details>
              </div>

              {/* Right spacer */}
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