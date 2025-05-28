import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: 'Email',
      info: 'darrencelzo77@gmail.com',
      link: 'mailto:darrencelzo77@gmail.com',
    },
    {
      title: 'Mobile Number',
      info: '+639611917651',
      link: null,
    },
    {
      title: 'Location',
      info: 'Philippines, Bantog, San Miguel, Bulacan.',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section bg-[#fafafa] dark:bg-[#4a4e69] py-20">
      <div className="container-custom max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="mb-4 text-[#4a4e69] dark:text-[#f2e9e4]">Contact</h2>
          <p className="text-lg text-[#4a4e69]/70 dark:text-[#f2e9e4]/70">
            Have a project in mind or just want to connect? Let’s get in touch.
          </p>
        </header>

        {/* Contact Details Grid */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map(({ title, info, link }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#3e3b50] rounded-lg p-6 shadow hover:shadow-md transition-shadow"
            >
              <dt className="text-sm font-semibold text-[#4a4e69] dark:text-[#f2e9e4] mb-2">{title}</dt>
              <dd className="text-base text-[#4a4e69]/90 dark:text-[#f2e9e4]/90">
                {link ? (
                  <a
                    href={link}
                    className="hover:underline hover:text-[#3e3b50] dark:hover:text-[#f2e9e4]/80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info}
                  </a>
                ) : (
                  info
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Contact;
