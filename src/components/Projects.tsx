import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ChatBox - Realtime Chat Application',
      description:
        'Developed a real-time chat application leveraging the MERN stack, Socket.io, TailwindCSS, and DaisyUI to deliver an intuitive, seamless messaging experience.',
      features: [
        'Implemented JWT-based authentication and authorization to ensure secure user access',
        'Real-time messaging with Socket.io for instant communication',
        'Online user status tracking and global state management with Zustand',
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'TailwindCSS', 'DaisyUI', 'JWT', 'Zustand'],
      link: '#',
      github: '#',
    },
    {
      title: 'Sharma Patient Care Website',
      description:
        'Developed a professional website for Sharma Patient Care, a healthcare service provider, to help patients easily get in touch and inquire about services online.',
      features: [
        'Responsive website features forms for submitting queries and receiving feedback',
        'Front-end built with React and styled using Tailwind CSS',
        'Back-end powered by Node.js to handle form submissions and email notifications',
      ],
      technologies: ['React', 'Node.js', 'Tailwind CSS', 'Express.js'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-slate-700 hover:border-blue-600/50 group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.link}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
