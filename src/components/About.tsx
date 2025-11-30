import { Code2, Server, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Front-End Expert',
      description: 'React.js with Redux Toolkit, Context API, TanStack Query, and Tailwind CSS',
    },
    {
      icon: Server,
      title: 'Back-End Development',
      description: 'Node.js, Express.js, RESTful APIs, JWT, Socket.io, OAuth integration',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'MongoDB with Mongoose ODM, schema design, and query optimization',
    },
    {
      icon: Zap,
      title: 'Cloud & DevOps',
      description: 'AWS (EC2, S3), Vercel, Netlify, CI/CD Pipelines',
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
              I'm <span className="text-blue-400 font-semibold">Sonu Kumar</span>, a{' '}
              <span className="text-blue-400 font-semibold">Full-Stack MERN Developer</span> based in{' '}
              <span className="text-purple-400">Ludhiana, Punjab</span>. I specialize in building scalable web 
              applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working at <span className="text-purple-400 font-semibold">Promatics Technologies Pvt. Ltd.</span>,
              I develop full-stack applications with advanced state management using{' '}
              <span className="text-blue-400">Redux Toolkit, Context API, and TanStack Query</span>. I have experience
              deploying applications on <span className="text-blue-400">AWS, Vercel, and Netlify</span> with CI/CD pipelines.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With <span className="text-blue-400 font-semibold">500+ DSA problems solved in C++</span>, I bring strong
              problem-solving and analytical skills to every project. I thrive in{' '}
              <span className="text-purple-400">Agile/Scrum environments</span>, collaborating with cross-functional teams
              to deliver high-performance, user-centric solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm proficient in <span className="text-blue-400">JavaScript (ES6+), HTML5, CSS3, SQL</span>, and have
              expertise in building responsive interfaces, designing RESTful APIs with JWT authentication, and optimizing
              MongoDB schemas for improved data retrieval efficiency.
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