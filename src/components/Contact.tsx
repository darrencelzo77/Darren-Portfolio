import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: 'Email',
      info: 'darrencelzo77@gmail.com',
      link: 'mailto:darrencelzo77@gmail.com',
      icon: <Mail size={18} className="text-brand" />,
    },
    {
      title: 'Phone',
      info: '+639 61 191 7651',
      link: 'tel:+639611917651',
      icon: <Phone size={18} className="text-brand" />,
    },
    {
      title: 'Location',
      info: 'Philippines, San Miguel, Bulacan.',
      link: null,
      icon: <MapPin size={18} className="text-brand" />,
    },
    {
      title: 'LinkedIn',
      info: 'Darren Acuña',
      link: 'https://www.linkedin.com/in/darren-celzo-acuña-a39082296/',
      icon: <Send size={18} className="text-brand" />,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-custom max-w-5xl mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="section-title mb-4">Let's Build Something Reliable</h2>
          <p className="section-subtitle">
            If you need backend development, infrastructure support, or fullstack execution with production discipline,
            I'm available for collaboration.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map(({ title, info, link, icon }, index) => (
              <div
                key={index}
                className="card rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  {icon}
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{title}</p>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-200">
                  {link ? (
                    <a
                      href={link}
                      className="hover:underline hover:text-brand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info}
                    </a>
                  ) : (
                    info
                  )}
                </p>
              </div>
            ))}
          </div>

          <aside className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">Current Availability</h3>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Open to backend-heavy fullstack roles, contract work, and technical collaborations.
            </p>
            <ul className="space-y-3 mb-5">
              <li className="chip">Backend API Development</li>
              <li className="chip">Infrastructure and Deployment</li>
              <li className="chip">Database and System Design</li>
            </ul>
            <a href="mailto:darrencelzo77@gmail.com" className="btn btn-primary w-full">
              Start a Conversation
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
