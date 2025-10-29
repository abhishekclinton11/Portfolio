import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-400 mx-auto mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Whether you're looking to collaborate on a project, discuss marketing strategies, or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 mb-8">
                I'm currently based in New Jersey and open to opportunities in digital marketing, programmatic advertising, and analytics consulting.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:chabhishekclinton@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Email</div>
                  <div className="text-white font-semibold">chabhishekclinton@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:5513448382"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Phone</div>
                  <div className="text-white font-semibold">551-344-8382</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Location</div>
                  <div className="text-white font-semibold">New Jersey, USA</div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm">LinkedIn</div>
                  <div className="text-white font-semibold">Connect with me</div>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-violet-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : submitStatus === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
