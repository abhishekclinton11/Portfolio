import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Digital Marketing & Media',
    school: 'Yeshiva University',
    location: 'New York, USA',
    period: 'Expected May 2025',
    courses: ['Consumer Analytics', 'Brand Strategy', 'Digital Storytelling', 'Martech Systems'],
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Business Administration in Marketing',
    school: 'Avinash Degree College, Osmania University',
    location: 'India',
    period: 'Graduated 2022',
    distinction: 'Graduated with Distinction',
    courses: ['Marketing Analytics', 'Strategy', 'Consumer Behavior', 'Market Research'],
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Academic Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>

                  <div className="text-blue-400 font-semibold mb-1">
                    {edu.school}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-slate-400 text-sm mb-3">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>

                  {edu.distinction && (
                    <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
                      {edu.distinction}
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-slate-400 text-sm font-semibold mb-3">Key Courses</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
