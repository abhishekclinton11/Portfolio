import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-400 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you're looking to collaborate on a project, discuss marketing strategies, or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm currently based in New Jersey and open to opportunities in digital marketing, programmatic advertising, and analytics consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:chabhishekclinton@gmail.com"
              className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-teal-400" />
              </div>
              <div>
                <div className="text-slate-400 text-sm">Email</div>
                <div className="text-white font-semibold">chabhishekclinton@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:5513448382"
              className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-violet-400" />
              </div>
              <div>
                <div className="text-slate-400 text-sm">Phone</div>
                <div className="text-white font-semibold">551-344-8382</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <div className="text-slate-400 text-sm">Location</div>
                <div className="text-white font-semibold">New Jersey, USA</div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <div className="text-slate-400 text-sm">LinkedIn</div>
                <div className="text-white font-semibold">Connect with me</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
