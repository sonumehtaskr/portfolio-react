import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'MERN Stack Developer',
    company: 'Promatics Technologies Pvt. Ltd.',
    location: 'Ludhiana, Punjab',
    period: 'Dec. 2024 - Present',
    responsibilities: [
      'Develop full-stack web applications using MERN stack with Redux Toolkit and TanStack Query, deployed on AWS, Vercel, and Netlify',
      'Build responsive React interfaces with advanced state management using Redux Toolkit (RTK Query), Context API, and TanStack Query for improved performance',
      'Design and implement RESTful APIs with JWT authentication and comprehensive error handling',
      'Optimize MongoDB schemas and queries using Mongoose ODM, improving data retrieval efficiency',
      'Collaborate with cross-functional teams in Agile sprints to deliver client-focused solutions on schedule',
      'Conduct code reviews and mentor junior developers, enforcing best practices and coding standards',
    ],
  };

  const keyProjects = [
    {
      title: 'Enterprise Web Application',
      description: 'Built business management platform with Redux Toolkit, deployed on AWS with auto-scaling',
      technologies: ['MERN', 'Redux Toolkit', 'AWS', 'Auto-scaling'],
    },
    {
      title: 'E-Commerce Solution',
      description: 'Developed full-featured e-commerce app with RTK Query for API optimization and Context API for cart management',
      technologies: ['React', 'RTK Query', 'Context API', 'Node.js'],
    },
    {
      title: 'Dashboard Analytics Platform',
      description: 'Created real-time analytics dashboard using TanStack Query and Socket.io with CI/CD pipeline',
      technologies: ['TanStack Query', 'Socket.io', 'CI/CD', 'Real-time'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-600 pb-12">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-900"></div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-blue-600/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                  <p className="text-gray-400">{experience.location}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-4 md:mt-0">
                  <Calendar size={18} />
                  <span>{experience.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 flex-shrink-0">▹</span>
                    <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Projects Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-purple-400" size={32} />
              <h3 className="text-3xl font-bold text-white">Key Projects at Promatics</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {keyProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-600/50 transition-all duration-300 hover:scale-105"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;