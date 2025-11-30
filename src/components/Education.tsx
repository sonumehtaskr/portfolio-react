import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      institution: 'Guru Nanak Dev Engineering College, Ludhiana',
      year: 'Graduated: 2024',
      details: 'CGPA: 7.95/10.0',
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'B N Inter College Bhaptiyahi',
      year: 'Completed: 2019',
      details: 'Percentage: 80.4%',
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-400" size={32} />
            <h3 className="text-2xl font-bold text-white">Academic Background</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-blue-600 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900"></div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <span className="text-blue-400 font-semibold text-sm">{edu.year}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm font-semibold">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;