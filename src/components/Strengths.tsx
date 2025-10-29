import { Brain, BookOpen, Users, Lightbulb } from 'lucide-react';

const strengths = [
  {
    title: 'Strategic Thinker',
    description: 'Connects insights, behavior, and execution to drive measurable results.',
    icon: Brain,
    color: 'from-teal-500 to-blue-500',
  },
  {
    title: 'Data Storyteller',
    description: 'Turns complex analytics into compelling narratives that inspire action.',
    icon: Lightbulb,
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Collaborative Leader',
    description: 'Aligns marketing with product vision through cross-functional partnership.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Lifelong Learner',
    description: 'Constantly exploring new ad-tech innovations and industry best practices.',
    icon: BookOpen,
    color: 'from-teal-500 to-emerald-500',
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Strengths</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            What Sets Me Apart
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.05] group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${strength.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {strength.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500/10 via-violet-500/10 to-blue-500/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed max-w-4xl mx-auto">
            "I believe the future of marketing lies at the intersection of{' '}
            <span className="font-bold text-teal-400">creativity</span>,{' '}
            <span className="font-bold text-violet-400">data</span>, and{' '}
            <span className="font-bold text-blue-400">technology</span>.{' '}
            My mission is to help brands navigate this landscape with confidence and purpose."
          </p>
        </div>
      </div>
    </section>
  );
}
