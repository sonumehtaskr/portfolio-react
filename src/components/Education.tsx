import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech (ECE)',
      institution: 'Guru Nanak Dev Engineering College, Ludhiana',
      year: '2024',
      details: 'CGPA: 7.95',
    },
    {
      degree: 'Intermediate',
      institution: 'B M Inter College Bhaptiyahi',
      year: '2019',
      details: 'Percentage: 80.4',
    },
    {
      degree: 'Matriculation',
      institution: 'B G High School Bhaptiyahi',
      year: '2017',
      details: 'Percentage: 78.8',
    },
  ];

  const achievements = [
    'Solved 500+ DSA problems using C++',
    'Strong problem-solving and analytical skills',
    'Collaborative team player with excellent communication',
    'Focus on delivering quality solutions',
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-blue-600 last:pb-0"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900"></div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className="text-blue-400 font-semibold text-sm">{edu.year}</span>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-purple-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-xl p-6 hover:from-slate-700/50 hover:to-slate-600/30 transition-all duration-300 border border-slate-700 hover:border-purple-600/50 flex items-start gap-4"
                >
                  <span className="text-purple-400 text-2xl font-bold">{index + 1}</span>
                  <p className="text-gray-300 flex-1">{achievement}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-600/30">
              <h4 className="text-xl font-bold text-white mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Computer Networks',
                  'Database Management System',
                  'Operating Systems',
                  'Microprocessor Systems',
                  'Analog & Digital Communication',
                ].map((course, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-800/50 text-gray-300 rounded-lg text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
