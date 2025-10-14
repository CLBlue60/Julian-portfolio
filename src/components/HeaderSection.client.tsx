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
      className="relative min-h-[100vh] flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Background with sand color glass effect */}
      <div className="absolute inset-0 bg-sand/20 backdrop-blur-2xl z-0"></div>

      {/* Decorative blurred shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sand/30 rounded-full blur-2xl z-0"></div>

      {/* Hero Section with Enhanced Glass Effect */}
      <div className="glass-card-premium relative z-10 text-center max-w-5xl mx-auto p-12 mb-16">
        <div className="glass-card rounded-3xl p-8 border-2 border-white/40">
          <h1 className="text-4xl font-russo text-gray-900 sm:text-5xl lg:text-6xl mb-8 leading-tight tracking-tight">
            Capture Life&apos;s
            <span className="block bg-gradient-to-r from-sky to-sand bg-clip-text text-transparent mt-4">
              Moments
            </span>
            <span className="block mt-4">That Matter Most</span>
          </h1>
          <p className="text-2xl font-urbanist text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button
              onClick={() => scrollToSection('gallery')}
              className="glass-card glass-card-hover px-16 py-6 border-2 border-white/40 text-3xl font-bold rounded-full text-black min-w-[280px] group"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="text-4xl">📸</span>
                View Portfolio
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="glass-card glass-card-hover px-16 py-6 bg-sky/30 backdrop-blur-md border-2 border-sky/40 text-3xl font-bold rounded-full text-sky min-w-[280px] group"
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                <span className="text-4xl">💬</span>
                Get In Touch
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced About Content with Premium Glass Effect */}
      <div id="about" className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="glass-card-premium p-14 border-2 border-white/40 relative overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-sky/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-sand/20 rounded-tl-full"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <h3 className="text-5xl font-russo text-gray-900 mb-2">My Journey</h3>
                  <div className="h-1.5 bg-gradient-to-r from-sky to-sand rounded-full"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card glass-card-hover rounded-2xl p-8">
                  <p className="text-xl font-urbanist leading-relaxed text-gray-800 font-light">
                    After six years in photography, I&apos;ve learned that the equipment matters less than the eye behind the camera. It&apos;s about seeing what others miss.
                  </p>
                </div>

                <div className="glass-card glass-card-hover rounded-2xl p-8">
                  <p className="text-xl font-urbanist leading-relaxed text-gray-800 font-light">
                    Good photography isn&apos;t just about getting the technical stuff right. It&apos;s about capturing the <strong className="font-semibold text-sky">feeling</strong> in the room, the <strong className="font-semibold text-sky">connection</strong> between people, and the <strong className="font-semibold text-sky">truth</strong> of the moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Specialties & Philosophy */}
            <div className="space-y-10">
              {/* Specialties Card with Enhanced Glass Effect */}
              <div className="group">
                <div className="glass-card glass-card-hover rounded-2xl p-10 bg-sky/30 border-2 border-sky/40">
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="font-russo text-3xl text-gray-900">Specialties</h4>
                  </div>
                  <ul className="space-y-4 text-xl font-urbanist text-gray-800">
                    <li className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                      <span>Portrait Photography</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                      <span>Event Coverage</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                      <span>Landscape & Nature</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                      <span>Automotive/Motorsport</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Philosophy Card with Enhanced Glass Effect */}
              <div className="group">
                <div className="glass-card glass-card-hover rounded-2xl p-10 border-2 border-white/40">
                  <div className="flex items-center gap-4 mb-6">
                    <h4 className="font-russo text-3xl text-gray-900">Philosophy</h4>
                  </div>
                  <div className="glass-card rounded-xl p-6 border-2 border-white/30">
                    <p className="text-gray-800 text-xl font-urbanist italic text-center font-light leading-relaxed">
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