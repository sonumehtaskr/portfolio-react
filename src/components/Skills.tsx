import { Code, Layers, Database, Award, Cloud, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['JavaScript (ES6+)', 'C++', 'HTML5', 'CSS3', 'SQL'],
    },
    {
      icon: Layers,
      title: 'Frontend',
      skills: ['React.js', 'Redux Toolkit', 'Context API', 'TanStack Query', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Socket.io', 'MongoDB', 'Mongoose ODM'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Deployment',
      skills: ['AWS (EC2, S3)', 'Vercel', 'Netlify', 'CI/CD Pipelines'],
    },
    {
      icon: Code,
      title: 'Tools & Methodologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Agile/Scrum', 'API Design', 'Code Review'],
    },
  ];

  const certifications = [
    {
      title: 'Artificial Intelligence Primer',
      description: 'Data Science, NLP, AI, Deep Learning, Computer Vision',
    },
    {
      title: 'Cyber Security Fundamentals',
      description: 'Information Security, Cryptography, Network Security',
    },
    {
      title: 'AWS Academy Cloud Foundations',
      description: 'AWS architecture, cloud services, deployment best practices',
    },
  ];

  const additionalInfo = [
    {
      icon: Award,
      title: 'Problem Solving',
      description: '500+ DSA problems solved in C++ demonstrating strong analytical and optimization skills',
    },
    {
      icon: BookOpen,
      title: 'Relevant Coursework',
      description: 'Computer Networks, DBMS, Operating Systems, Microprocessor Systems',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Certifications */}
        <div className="mb-16">
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

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {additionalInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-600/30 hover:border-blue-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <info.icon className="text-blue-400" size={28} />
                <h4 className="text-2xl font-bold text-white">{info.title}</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Practices */}
        <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <h4 className="text-xl font-bold text-white mb-4">Development Practices</h4>
          <div className="flex flex-wrap gap-3">
            {['Agile/Scrum', 'Git Version Control', 'Code Review', 'CI/CD Workflows', 'Performance Optimization', 'API Design'].map((practice, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm"
              >
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;