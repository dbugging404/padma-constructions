import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <div className='py-4 md:py-6 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-center flex-col'>
          <p className='text-lg uppercase text-minsk-900 py-2 font-semibold'>
            Meet Us
          </p>
          <h2 className='text-4xl font-bold text-minsk-900 pt-4 pb-6'>
            Our Awesome Team
          </h2>
          <p className='max-w-3xl text-center pb-10 text-minsk-900'>
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment.
          </p>
        </div>
        <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-center justify-center'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center space-y-2 text-center w-72 md:w-80 lg:w-96 p-1.5 md:p-4 rounded-xl bg-minsk-200'
            >
              <Image
                src={member.picture}
                alt={member.name}
                height={500}
                width={500}
                className='rounded-xl'
              />
              <h3 className='text-xl font-bold'>{member.name}</h3>
              <p className='text-sm font-semibold'>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

const teamMembers = [
  {
    name: 'Ryan Samuels',
    role: 'Finance Analyst',
    picture: 'https://www.material-tailwind.com/img/avatar1.jpg',
  },
  {
    name: 'Jordan Michael',
    role: 'Web Developer',
    picture: 'https://www.material-tailwind.com/img/avatar3.jpg',
  },
  {
    name: 'Nora Hazel',
    role: 'UI/UX Designer',
    picture: 'https://www.material-tailwind.com/img/avatar5.jpg',
  },
];
