import { Layers, Megaphone, BarChart3, Palette, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Marketing & Strategy',
    icon: Megaphone,
    skills: ['Go-to-Market Planning', 'Campaign Execution', 'Audience Segmentation', 'Brand Strategy', 'Performance Marketing'],
    color: 'teal',
  },
  {
    title: 'Ad Platforms',
    icon: Layers,
    skills: ['Amazon DSP', 'DV360', 'Meta Ads', 'Google Ads', 'CTV', 'TikTok Ads'],
    color: 'violet',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    skills: ['GA4', 'Looker Studio', 'Tableau', 'Excel', 'A/B Testing', 'Attribution Modeling'],
    color: 'blue',
  },
  {
    title: 'Creative Tools',
    icon: Palette,
    skills: ['Canva', 'CapCut', 'Adobe Suite (basic)', 'Shopify', 'Content Creation'],
    color: 'teal',
  },
  {
    title: 'Collaboration',
    icon: Users,
    skills: ['Cross-functional Leadership', 'Reporting Automation', 'Storytelling', 'Stakeholder Management'],
    color: 'violet',
  },
];

const colorClasses = {
  teal: {
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    bar: 'bg-teal-500',
  },
  violet: {
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    bar: 'bg-violet-500',
  },
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    bar: 'bg-blue-500',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-teal-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg border ${colors.border} rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: 'Ad Platforms', level: 95, color: 'teal' },
            { label: 'Analytics', level: 90, color: 'violet' },
            { label: 'Strategy', level: 92, color: 'blue' },
            { label: 'Creative', level: 85, color: 'teal' },
          ].map((item, index) => {
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            return (
              <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold">{item.label}</span>
                  <span className={`${colors.text} font-bold`}>{item.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
