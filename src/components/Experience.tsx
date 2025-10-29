import { Briefcase, TrendingUp, Target, BarChart3 } from 'lucide-react';

const experiences = [
  {
    title: 'Digital Marketing Specialist',
    company: 'Last Dress',
    location: 'USA',
    period: '2025 – Present',
    achievements: [
      { text: 'Led campaigns (Amazon DSP, Meta, TikTok), increasing ROAS by 22%', metric: '+22% ROAS' },
      { text: 'Improved conversion rate by 10% via A/B testing and optimized creatives', metric: '+10% CVR' },
      { text: 'Built Looker Studio dashboards for real-time performance', metric: 'Real-time' },
      { text: 'Boosted engagement 40% through influencer collaborations', metric: '+40%' },
    ],
    color: 'teal',
  },
  {
    title: 'Management Trainee – Digital Strategy & Insights',
    company: 'Opiam Analytics',
    location: 'India',
    period: '2022 – 2023',
    achievements: [
      { text: 'Managed Amazon DSP & DV360 campaigns; +25% conversion lift', metric: '+25%' },
      { text: 'Built segmentation frameworks enhancing targeting and sales pipeline velocity', metric: 'Enhanced' },
      { text: 'Developed market analysis decks influencing GTM strategy', metric: 'Strategic' },
    ],
    color: 'violet',
  },
  {
    title: 'Marketing Analyst – Ad Operations',
    company: 'Emend HCM',
    location: 'India',
    period: '2022',
    achievements: [
      { text: 'Oversaw programmatic campaigns via CM360 & Flashtalking', metric: 'Multi-platform' },
      { text: 'Reduced campaign errors by 20% with QA workflows', metric: '-20% Errors' },
    ],
    color: 'blue',
  },
];

const colorClasses = {
  teal: {
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    metric: 'bg-teal-500/20 text-teal-300',
  },
  violet: {
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    metric: 'bg-violet-500/20 text-violet-300',
  },
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    metric: 'bg-blue-500/20 text-blue-300',
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-teal-400 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-violet-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = colorClasses[exp.color as keyof typeof colorClasses];
              return (
                <div key={index} className="relative pl-0 md:pl-24">
                  <div className={`absolute left-4 top-8 w-9 h-9 rounded-full ${colors.bg} border-2 ${colors.border} backdrop-blur-sm hidden md:flex items-center justify-center`}>
                    <Briefcase className={`w-5 h-5 ${colors.text}`} />
                  </div>

                  <div className={`bg-white/5 backdrop-blur-lg border ${colors.border} rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-slate-300">
                          <span className="font-semibold">{exp.company}</span>
                          <span className="text-slate-500">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <span className={`px-4 py-2 ${colors.bg} border ${colors.border} rounded-lg ${colors.text} text-sm font-medium whitespace-nowrap`}>
                        {exp.period}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-4 group">
                          <TrendingUp className={`w-5 h-5 ${colors.text} mt-1 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                          <div className="flex-1">
                            <p className="text-slate-300 leading-relaxed">{achievement.text}</p>
                          </div>
                          <span className={`px-3 py-1 ${colors.metric} rounded-md text-xs font-bold whitespace-nowrap`}>
                            {achievement.metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
