import React from 'react';
// Icons removed for simplicity

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: 'Email',
      info: 'darrencelzo77@gmail.com',
      link: 'mailto:darrencelzo77@gmail.com'
    },
    {
      title: 'Mobile Number',
      info: '+639611917651',
      link: null
    },
    {
      title: 'Location',
      info: 'Philippines, Bantog, San Miguel, Bulacan.',
      link: null
    }
  ];

  return (
    <section id="contact" className="section bg-[#fafafa] dark:bg-[#4a4e69] py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-[#4a4e69] dark:text-[#f2e9e4]">Contact</h2>
          {/* <h2 className="mb-4 text-3xl font-bold text-[#4a4e69] dark:text-[#f2e9e4]">Contact</h2> */}
          <p className="text-xl text-[#4a4e69]/70 dark:text-[#f2e9e4]/70">
            Have a project in mind or just want to connect? Let’s get in touch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-start bg-[#ffffff] dark:bg-[#3e3b50] text-[#4a4e69] dark:text-[#f2e9e4] shadow-sm hover:shadow-md transition-shadow rounded-lg p-5"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="hover:underline hover:text-[#3e3b50] dark:hover:text-[#f2e9e4]/80 transition-colors"
                  >
                    {item.info}
                  </a>
                ) : (
                  <p>{item.info}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="h-32" />
      </div>
    </section>
  );
};

export default Contact;
