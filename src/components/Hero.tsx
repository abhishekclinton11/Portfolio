import { Download, Linkedin, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/20 to-slate-900/20"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px),
                         repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium backdrop-blur-sm">
                  Digital Marketing Strategist
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Abhishek
                <span className="block bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                  Clinton
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-xl">
                Programmatic Advertising | Data Storytelling | Performance Marketing
              </p>

              <p className="text-lg text-slate-400 max-w-xl">
                Bridging creativity and analytics to deliver scalable growth strategies that connect performance with purpose.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-teal-400">3+</div>
                <div className="text-sm text-slate-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-400">25%</div>
                <div className="text-sm text-slate-400 mt-1">Avg Conversion Lift</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">$2M+</div>
                <div className="text-sm text-slate-400 mt-1">Ad Spend Managed</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-violet-500/30 rounded-3xl blur-3xl"></div>

              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-white/10 backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-violet-400 flex items-center justify-center text-6xl font-bold text-white">
                    AC
                  </div>
                  <div className="text-slate-300 text-sm px-6">
                    [Upload professional portrait here]
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full border border-teal-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400">NJ</div>
                  <div className="text-xs text-slate-400">USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
