import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ChatBox - Real-time Chat Application',
      description:
        'Built real-time messaging platform using MERN stack and Socket.io with advanced features and security.',
      features: [
        'JWT authentication with refresh token rotation for enhanced security',
        'Real-time messaging with Socket.io for instant communication',
        'Real-time presence tracking with Zustand for optimized state management',
        'Responsive UI with Tailwind CSS and DaisyUI, supporting multiple themes',
        'Deployed on Vercel (frontend) and GCE (backend) with MongoDB Atlas and CI/CD pipeline',
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT', 'Zustand', 'Tailwind CSS', 'DaisyUI'],
      link: 'https://realtime-chat-app-eight-psi.vercel.app/',
      github: 'https://github.com/sonumehtaskr/realtime-chat-app',
      featured: true,
    },
    {
      title: 'Sharma Patient Care Website',
      description:
        'Developed healthcare service website with secure contact management system for patient inquiries and automated notifications.',
      features: [
        'Responsive interface using React with Context API for state management',
        'Tailwind CSS for optimal accessibility and modern design',
        'Node.js backend with Express.js for API handling',
        'Nodemailer for automated email notifications',
        'Deployed on Netlify (frontend) and Vercel (backend)',
        'Form validation and spam protection implemented',
      ],
      technologies: ['React', 'Context API', 'Node.js', 'Express.js', 'Nodemailer', 'Tailwind CSS', 'Netlify', 'Vercel'],
      link: 'https://sharmapatientcare.com/',
      github: 'https://github.com/sonumehtaskr/sharmapatientcare',
      featured: true,
    },
    {
      title: 'RFID Based Attendance System',
      description:
        'An automated attendance tracking system utilizing ESP8266, RFID tags, and reader technology to capture student details and timestamps.',
      features: [
        'Real-time data recording with RFID card detection',
        'Automatic Google Sheets integration for organized time slot management',
        'Streamlined attendance tracking process',
        'Enhanced efficiency and accuracy in academic record-keeping',
      ],
      technologies: ['ESP8266', 'RFID', 'Google Sheets API', 'Arduino IDE'],
      github: '#',
    },
    {
      title: 'Woman Safety Device',
      description:
        'An IoT-based personal safety device integrating GPS tracking, GSM alerts, and deterrent mechanisms.',
      features: [
        'GPS module for precise location tracking',
        'GSM module for instant SMS alerts to emergency contacts',
        'Shock generator for self-defense capability',
        'ThingSpeak-integrated webpage for real-time location access',
      ],
      technologies: ['GPS', 'GSM', 'ThingSpeak', 'Arduino', 'IoT'],
      github: '#',
    },
    {
      title: 'Booktown - Bookstore Webpage',
      description:
        'A fully responsive front-end webpage for an online bookstore with modern design and user experience.',
      features: [
        'User-friendly interface with seamless navigation',
        'Multiple pages: homepage, cart, and payment sections',
        'Responsive design for all devices',
        'Intuitive features for browsing and purchasing books',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of full-stack applications, IoT systems, and web development projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-blue-600/50 group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 ml-2">
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1 flex-shrink-0 text-xs">▹</span>
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

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-700 hover:border-blue-600/50 group flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex-1">
                      {project.title}
                    </h4>
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors ml-2"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <ul className="space-y-1.5 mb-4 flex-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1 flex-shrink-0 text-xs">▹</span>
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-blue-400 rounded-full text-xs font-medium"
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
      </div>
    </section>
  );
};

export default Projects;