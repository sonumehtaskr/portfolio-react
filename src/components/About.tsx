import { Code2, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Front-End Expert',
      description: 'Building responsive and intuitive user interfaces with React and modern CSS',
    },
    {
      icon: Server,
      title: 'Back-End Development',
      description: 'Creating robust server-side applications with Node.js and Express',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient data modeling and management with MongoDB',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed and scalability',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with
              experience in building full-stack web applications. I specialize in creating seamless user
              experiences and efficient server-side solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working at <span className="text-purple-400 font-semibold">Promatics Technologies Pvt. Ltd.</span>,
              I've successfully solved <span className="text-blue-400 font-semibold">500+ DSA problems</span> using C++,
              demonstrating my strong problem-solving skills and collaborative mindset.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm committed to writing clean, maintainable code and continuously learning new technologies to
              deliver high-quality, tailored solutions that meet business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-700"
              >
                <item.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
