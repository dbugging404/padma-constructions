import React from 'react';

const About = () => {
  return (
    <div className='px-4 md:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-lg uppercase text-minsk-900 pt-10 pb-2 font-semibold'>
            About Us
          </p>
          <h2 className='text-4xl font-bold text-minsk-900 pt-4 pb-6 text-center'>
            Welcome to Padma Constructions
          </h2>
          <p className='max-w-prose text-center pb-4 text-minsk-900'>
            Padma Construction Company was founded in 2019 by Vinay H N. We hold
            true to the values established by Vinay and remain committed to
            workmanship and customer service. We know that our success in
            providing quality general contracting services has always been
            dependent on the talent and commitment of our employees. Padma
            Construction has been fortunate to acquire and retain many talented
            people who are committed to our company and our clients.
          </p>
          <p className='max-w-prose text-center pb-4 text-minsk-900'>
            Padma Constructions began as a general work contractor in 2019. over
            the years, the company has undertaken many challenging projects
            accumulated skills, know-how and experiences in design and build
            solutions, and related engineering works today Padma construction
            takes on the role of main contractor for small to medium size
            projects. we also provide design inputs and engineering solutions as
            value-add service to our clients.
          </p>
          <ul className='max-w-prose text-left pb-4 text-minsk-900 space-y-3 py-6 list-outside list-disc ml-3'>
            <li>
              <strong>Our Vision :</strong> To be a respectable building
              contractor delivering beyond expectations, Always.
            </li>
            <li>
              <strong>Our Mission :</strong> We design your dreams and deliver
              quality work within reasonable time frame.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
