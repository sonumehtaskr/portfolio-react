import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const recaptchaRef = useRef<HTMLDivElement | null>(null);

  const executeRecaptcha = async () => {
    if (window.grecaptcha) {
      const token = await window.grecaptcha.enterprise.execute(import.meta.env.VITE_RECAPTCHA_SECRET, { action: "signup" });
      return token;
    } else {
      console.error("reCAPTCHA not loaded");
    }
  };

  const getRecaptchaToken = () => {
    const token = window.grecaptcha.enterprise.getResponse(); // Get response from the visible widget
    if (!token) {
      console.error('reCAPTCHA verification failed.');
      return null;
    }
    return token;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get the reCAPTCHA token from the visible widget
    const token = getRecaptchaToken();
    if (!token) {
      console.log('reCAPTCHA verification failed.');
      return;
    }

    // Submit form data and reCAPTCHA token to your backend
    try {
      const response = await fetch(import.meta.env.VITE_FORM_SUBMISSION_URL, {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({
          'g-recaptcha-response': token,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Form submitted successfully!');
        // Reset form or show success message here if necessary
      } else {
        console.log('Captcha verification failed.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  useEffect(() => {
    // Load the reCAPTCHA script on mount
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Callback function when the script is loaded
    window.onloadCallback = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        // Render the visible reCAPTCHA widget
        window.grecaptcha.enterprise.render(recaptchaRef.current, {
          sitekey: import.meta.env.VITE_RECAPTCHA_SECRET,
          action: 'signup', // Optional action name to categorize the request
        });
      }
    };

    return () => {
      // Clean up the script on unmount
      document.body.removeChild(script);
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-blue-600/50 group"
              >
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">sonumehtaskr@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/sonumehtaskr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-blue-600/50 group"
              >
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white font-semibold">Connect with me</p>
                </div>
              </a>

              <a
                href="https://github.com/sonumehtaskr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-purple-600/50 group"
              >
                <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                  <Github className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white font-semibold">View my repositories</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <div data-theme="dark" ref={recaptchaRef} className='w-full'></div>

              <div className='text-white'>
                This site is protected by reCAPTCHA and the Google
                <a className='text-blue-600' href="https://policies.google.com/privacy"> Privacy Policy</a> and
                <a className='text-blue-600' href="https://policies.google.com/terms"> Terms of Service</a> apply.
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            © 2024 Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
