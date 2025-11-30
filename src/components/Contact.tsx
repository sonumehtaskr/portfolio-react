import { Mail, Linkedin, Github, Send, MapPin, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const recaptchaRef = useRef<HTMLDivElement | null>(null);

  const getRecaptchaToken = () => {
    if (!window.grecaptcha) {
      setErrorMessage('reCAPTCHA not loaded. Please refresh the page.');
      return null;
    }
    const token = window.grecaptcha.enterprise.getResponse();
    if (!token) {
      setErrorMessage('Please complete the reCAPTCHA verification.');
      return null;
    }
    return token;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const token = getRecaptchaToken();
    if (!token) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_FORM_SUBMISSION_URL, {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({
          'g-recaptcha-response': token,
          ...formData,
        }),
      });

      console.log(response)

      const data = await response.json();

      console.log(data);

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.enterprise.reset();
        }
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.onloadCallback = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.enterprise.render(recaptchaRef.current, {
          sitekey: import.meta.env.VITE_RECAPTCHA_SECRET,
          action: 'signup',
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
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
                href="mailto:sonumehtaskr@gmail.com"
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
                href="tel:+917970723092"
                className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-green-600/50 group"
              >
                <div className="p-3 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 79707 23092</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">Ludhiana, Punjab, India</p>
                </div>
              </div>

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
                  <p className="text-white font-semibold">sonumehtaskr</p>
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
                  <p className="text-white font-semibold">sonumehtaskr</p>
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
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={status === 'loading'}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message here..."
                />
              </div>

              <div className="w-full overflow-hidden">
                <div
                  data-theme="dark"
                  ref={recaptchaRef}
                  className="w-full flex justify-start"
                  style={{ transform: 'scale(1)', transformOrigin: '0 0' }}
                ></div>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-600/20 border border-green-600/50 rounded-lg">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                  <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-600/20 border border-red-600/50 rounded-lg">
                  <AlertCircle className="text-red-400 flex-shrink-0" size={24} />
                  <p className="text-red-400 font-medium">{errorMessage || 'Something went wrong. Please try again.'}</p>
                </div>
              )}

              <div className='text-gray-400 text-sm'>
                This site is protected by reCAPTCHA and the Google
                <a className='text-blue-600 hover:text-blue-400' href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a> and
                <a className='text-blue-600 hover:text-blue-400' href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"> Terms of Service</a> apply.
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            © 2024 Sonu Kumar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;