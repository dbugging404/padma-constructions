import React from 'react';

const Services = () => {
  return (
    <div className='px-6 md:px-8 lg:px-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='py-6 md:py-8 lg:py-10 text-4xl font-bold text-minsk-900 text-center'>
          All Your Construction Needs in One Place
        </h2>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            {data.map((service, index) => (
              <div
                key={index}
                className='flex rounded-md overflow-hidden shadow-xl'
              >
                <div className='w-6 bg-minsk-900 border'></div>
                <div className='bg-minsk-100 p-2 lg:p-3 flex flex-col'>
                  <h3 className='text-xl font-semibold text-minsk-900'>
                    {service.title}
                  </h3>
                  <p className='mt-2 text-sm text-minsk-950'>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

const data = [
  {
    title: 'Design & Build',
    description:
      'Tailored design and build services for your construction project, bringing creativity and precision from concept to completion.',
  },
  {
    title: 'Renovations',
    description:
      'Revitalize your space with our top-notch renovation services, seamlessly blending functionality with aesthetic appeal.',
  },
  {
    title: 'Roofing',
    description:
      'Protect your investment with our full range of roofing services, ensuring durability and reliability for your shelter.',
  },
  {
    title: 'Flooring',
    description:
      'Elevate your space with our quality flooring solutions, offering a diverse range from classic hardwood to modern tiles.',
  },
  {
    title: 'Painting',
    description:
      'Add vibrancy to your project with our expert painting services, delivering flawless finishes for an enhanced ambiance.',
  },
  {
    title: 'Interiors',
    description:
      'Transform your space into an inviting environment with our comprehensive interior services, blending style with purpose.',
  },
];
