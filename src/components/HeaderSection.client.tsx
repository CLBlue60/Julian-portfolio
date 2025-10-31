'use client';

export default function HeaderSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-0 md:min-h-[70vh] flex flex-col items-center justify-start md:justify-center p-4 sm:p-6 md:p-8 overflow-hidden"
    >
      {/* Background with sand color glass effect */}
      <div className="absolute inset-0 bg-sand/20 backdrop-blur-2xl z-0 pointer-events-none" />

      {/* Decorative blurred shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-sky/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-80 sm:h-80 bg-sand/30 rounded-full blur-2xl z-0" />

      {/* Hero Section with Enhanced Glass Effect */}
      <div className="glass-card-premium relative z-10 text-center w-full max-w-3xl mx-auto py-8 sm:py-10 px-4">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-white/40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-russo text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
            Capture Life&apos;s
            <span className="block bg-gradient-to-r from-sky to-sand bg-clip-text text-transparent mt-4">
              Moments
            </span>
            <span className="block mt-4">That Matter Most</span>
          </h1>

          <p className="text-base sm:text-lg font-urbanist text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            <button
              onClick={() => scrollToSection('gallery')}
              className="glass-card glass-card-hover px-8 sm:px-12 py-3 sm:py-4 border-2 border-white/40 text-lg sm:text-xl font-bold rounded-full text-black w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl sm:text-3xl">📸</span>
                View Portfolio
              </span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="glass-card glass-card-hover px-8 sm:px-12 py-3 sm:py-4 bg-sky/30 backdrop-blur-md border-2 border-sky/40 text-lg sm:text-xl font-bold rounded-full text-sky w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl sm:text-3xl">💬</span>
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced About Content with Premium Glass Effect */}
      <div id="about" className="relative z-10 container mx-auto px-4 sm:px-6 max-w-3xl w-full scroll-mt-20 md:scroll-mt-24 lg:scroll-mt-32">
        <div className="glass-card-premium p-6 sm:p-10 border-2 border-white/40 relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-28 h-28 bg-sky/10 rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-sand/20 rounded-tl-full" />

          {/* Responsive grid: single column on small screens, two on large */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="text-center w-full">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-russo text-gray-900 mb-2">My Journey</h3>
                  <div className="h-1.5 mx-auto w-24 bg-gradient-to-r from-sky to-sand rounded-full" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-6">
                  <p className="text-base sm:text-lg font-urbanist leading-relaxed text-gray-800 font-light">
                    After six years in photography, I&apos;ve learned that the equipment matters less than the eye behind the camera. It&apos;s about seeing what others miss.
                  </p>
                </div>

                <div className="glass-card glass-card-hover rounded-2xl p-4 sm:p-6">
                  <p className="text-base sm:text-lg font-urbanist leading-relaxed text-gray-800 font-light">
                    Good photography isn&apos;t just about getting the technical stuff right. It&apos;s about capturing the <strong className="font-semibold text-sky">feeling</strong> in the room, the <strong className="font-semibold text-sky">connection</strong> between people, and the <strong className="font-semibold text-sky">truth</strong> of the moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Specialties & Philosophy */}
            <div className="space-y-6">
              <div className="group">
                <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 bg-sky/30 border-2 border-sky/40">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="font-russo text-xl sm:text-2xl text-gray-900">Specialties</h4>
                  </div>
                  <ul className="space-y-3 text-base sm:text-lg font-urbanist text-gray-800">
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0" />
                      <span>Portrait Photography</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0" />
                      <span>Event Coverage</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0" />
                      <span>Landscape & Nature</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0" />
                      <span>Automotive/Motorsport</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border-2 border-white/40 mt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="font-russo text-xl sm:text-2xl text-gray-900">Philosophy</h4>
                  </div>
                  <div className="glass-card rounded-xl p-4 sm:p-6 border-2 border-white/30">
                    <p className="text-gray-800 text-base sm:text-lg font-urbanist italic text-center font-light leading-relaxed">
                      &quot;If a photo doesn&apos;t make you feel something, I haven&apos;t done my job. That&apos;s what keeps me picking up the camera.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}