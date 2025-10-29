import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            From Hyderabad to New York
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-400 mx-auto"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 hover:border-teal-500/30 transition-all duration-300">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            I'm a digital marketing strategist passionate about blending <span className="text-teal-400 font-semibold">data</span>, <span className="text-violet-400 font-semibold">storytelling</span>, and <span className="text-blue-400 font-semibold">technology</span> to shape how brands connect with audiences. Currently pursuing my M.S. in Digital Marketing and Media at Yeshiva University, I bring cross-functional experience in go-to-market strategy, performance marketing, and analytics-driven campaign execution across SaaS, e-commerce, and B2B analytics sectors.
          </p>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-white/5 mb-8">
            <p className="text-slate-300 leading-relaxed italic">
              "My journey reflects an evolution from marketing trainee to data-driven strategist. I specialize in bridging creativity and analytics to deliver scalable growth strategies that connect performance with purpose."
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Strategic Planning', 'Campaign Execution', 'Data Analytics', 'Audience Segmentation', 'Performance Marketing'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-lg text-teal-300 text-sm">
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105"
          >
            View My Journey
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
