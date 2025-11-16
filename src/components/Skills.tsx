import { Code, Layers, Database, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Technologies',
      skills: ['C++', 'HTML', 'CSS', 'SQL', 'JavaScript', 'Tailwind CSS', 'React', 'Express', 'Node.js'],
    },
    {
      icon: Layers,
      title: 'Software & Tools',
      skills: ['Visual Studio', 'GitHub', 'Arduino IDE'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'SQL'],
    },
  ];

  const certifications = [
    {
      title: 'Artificial Intelligence Primer',
      description: 'Introduction to Data Science, NLP, AI, Deep Learning, Computer Vision',
    },
    {
      title: 'Cyber Security Fundamentals',
      description: 'Fundamentals of Information Security, Cryptography, Cyber Security, Networks',
    },
    {
      title: 'AWS Academy Cloud Foundations',
      description: 'AWS foundations, architecture, principles, services',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-blue-600/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-blue-400" size={28} />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-purple-400" size={32} />
            <h3 className="text-3xl font-bold text-white">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-600/50 transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-lg font-bold text-white mb-3">{cert.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
