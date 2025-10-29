import { Rocket, Target, BarChart3, Users, TrendingUp, Zap } from 'lucide-react';

const projects = [
  {
    title: 'CRM Funnel Optimization',
    description: '+12% MQL→SQL conversion through data-driven segmentation and nurture workflows',
    metric: '+12%',
    icon: Target,
    color: 'teal',
  },
  {
    title: 'Amazon DSP Optimization Playbook',
    description: '+15% CTR lift via audience refinement and creative testing framework',
    metric: '+15%',
    icon: TrendingUp,
    color: 'violet',
  },
  {
    title: 'Tesla Brand Audit',
    description: 'Gen Z engagement strategy combining social listening and trend analysis',
    metric: 'Gen Z',
    icon: Zap,
    color: 'teal',
  },
  {
    title: 'EY Talent Research Initiative',
    description: 'Employer outreach insights through market analysis and competitive research',
    metric: 'Research',
    icon: Users,
    color: 'violet',
  },
  {
    title: 'Jupiter Money CRM Strategy',
    description: 'Gen Z trust funnel development focusing on digital-first engagement',
    metric: 'Strategy',
    icon: Rocket,
    color: 'blue',
  },
];

const colorClasses = {
  teal: {
    border: 'border-teal-500/30',
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    gradient: 'from-teal-500/20 to-transparent',
  },
  violet: {
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    gradient: 'from-violet-500/20 to-transparent',
  },
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    gradient: 'from-blue-500/20 to-transparent',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Strategic Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-400 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Portfolio of data-driven initiatives demonstrating cross-functional expertise in marketing strategy, analytics, and execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-lg border ${colors.border} rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-[1.05] group cursor-pointer`}
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${colors.gradient} border ${colors.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white flex-1 pr-2">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 ${colors.bg} border ${colors.border} rounded-md ${colors.text} text-xs font-bold whitespace-nowrap`}>
                    {project.metric}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 hover:scale-105">
            View Detailed Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
