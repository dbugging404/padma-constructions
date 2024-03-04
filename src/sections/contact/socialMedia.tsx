import Link from 'next/link';
import { title } from 'process';
import React from 'react';
import {
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsFillEnvelopeAtFill,
  BsPhoneFill,
} from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';

const SocialMediaLinks = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center space-y-3'>
        {Links.map((link, index) => {
          const Icon = link.icon;
          return (
            <Link
              key={index}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`${link.style} bg-minsk-100 hover:bg-minsk-200 px-3 py-2 w-72 rounded-md `}
            >
              <div className='flex items-center justify-start space-x-4'>
                <Icon /> <div className='text-lg'>{link.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaLinks;

const Links = [
  {
    icon: BsYoutube,
    link: 'https://www.youtube.com/',
    title: 'Youtube',
    style:
      'text-2xl text-minsk-900 mx-2 hover:text-red-600 transition duration-300 ease-in-out',
  },
  {
    icon: BsInstagram,
    link: 'https://www.instagram.com/',
    title: 'Instagram',
    style:
      'text-2xl text-minsk-900 mx-2 hover:text-pink-600 transition duration-300 ease-in-out',
  },
  {
    icon: BsLinkedin,
    link: 'https://www.linkedin.com/',
    title: 'Linkedin',
    style:
      'text-2xl text-minsk-900 mx-2 hover:text-blue-600 transition duration-300 ease-in-out',
  },
  {
    icon: BsWhatsapp,
    link: 'https://www.whatsapp.com/',
    title: 'Whatsapp',
    style:
      'text-2xl text-minsk-900 mx-2 hover:text-green-600 transition duration-300 ease-in-out',
  },
  {
    icon: BsFacebook,
    link: 'https://www.facebook.com/',
    title: 'Facebook',
    style:
      'text-2xl text-minsk-900 mx-2 hover:text-blue-600 transition duration-300 ease-in-out',
  },
  {
    icon: BsFillEnvelopeAtFill,
    link: 'mailto:',
    title: 'Email',
    style:
      'text-2xl text-minsk-900 mx-2 hover:text-gray-600 transition duration-300 ease-in-out',
  },
  {
    icon: BsPhoneFill,
    link: 'callto:',
    title: 'Call',
    style:
      'text-2xl text-minsk-900 mx-2 hover:text-blue-600 transition duration-300 ease-in-out',
  },
];
