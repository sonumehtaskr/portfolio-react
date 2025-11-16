import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'MERN Stack Developer',
    company: 'Promatics Technologies Pvt. Ltd.',
    location: 'Ludhiana, Punjab',
    period: 'Dec. 2024 - Present',
    responsibilities: [
      'Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring high performance and scalability',
      'Build and optimize both front-end and back-end, delivering seamless user experiences and efficient server-side performance and integration',
      'Design and develop RESTful APIs, manage data integration, and troubleshoot issues to ensure smooth functionality',
      'Collaborate closely with designers, developers, and QA teams to deliver high-quality, tailored solutions that meet business requirements',
    ],
  };

  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-600">
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
