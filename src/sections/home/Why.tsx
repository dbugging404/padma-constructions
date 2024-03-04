import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa6';
import { FaRegHandshake } from 'react-icons/fa6';
import { FaRegBuilding } from 'react-icons/fa6';

const Why = () => {
  return (
    <div className='px-6 md:px-8 lg:px-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='py-6 md:py-8 lg:py-10 text-4xl text-minsk-900 font-bold text-center'>
          Why Choose Us?
        </h2>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pb-10'>
            {data.map((service, index) => (
              <div
                key={index}
                className='flex rounded-md overflow-hidden shadow-xl'
              >
                <div className='bg-minsk-100 shadow-md p-2 lg:p-3 flex flex-col'>
                  <div className='w-16 h-16 mx-auto rounded-full md:rounded-md bg-minsk-900 border flex items-center justify-center'>
                    <service.Icon className='w-8 h-8 mx-auto text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-minsk-900 text-center pt-3'>
                    {service.title}
                  </h3>
                  <p className='mt-2 text-sm text-minsk-950 text-center'>
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

export default Why;

const data = [
  {
    title: 'Quality Work',
    description:
      'We are committed to delivering top-notch construction services, ensuring quality workmanship and exceptional results.',
    Icon: FaCheck,
  },
  {
    title: 'Professional Team',
    description:
      'Our team of professionals is dedicated to providing reliable and efficient services, ensuring a seamless experience.',
    Icon: FaPeopleGroup,
  },
  {
    title: 'Customer Satisfaction',
    description:
      'We prioritize customer satisfaction, offering personalized services and tailored solutions to meet your unique needs.',
    Icon: FaRegHandshake,
  },
  {
    title: 'Competitive Pricing',
    description:
      'We offer competitive pricing for our construction services, ensuring affordability without compromising on quality.',
    Icon: FaMoneyBillAlt,
  },
  {
    title: 'Timely Completion',
    description:
      'We are committed to delivering projects on time, ensuring timely completion and efficient turnaround for your project.',
    Icon: FaRegClock,
  },
  {
    title: 'Licensed & Insured',
    description:
      'We are a licensed and insured construction company, offering peace of mind and protection for your investment.',
    Icon: FaRegBuilding,
  },
];
