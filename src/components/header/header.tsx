import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/assets/icons/logo.png';
import Link from 'next/link';
import { CgMenuMotion, CgMenu } from 'react-icons/cg';
import { Transition } from '@headlessui/react';
import { Button } from '@material-tailwind/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='sticky top-0 bg-minsk-200 z-50'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-0.5'>
          <div>
            <Link href={'/'}>
              <Image
                src={Logo}
                alt='Padma Constructions'
                className='w-20 lg:w-24 transition duration-300 ease-in-out transform hover:scale-110'
              />
            </Link>
          </div>
          <div className='hidden lg:block'>
            <ul className='flex space-x-8'>
              {MenuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className='text-minsk-900 hover:text-minsk-100 hover:bg-minsk-800 px-3 py-2 rounded-md transition duration-300 ease-in-out'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center justify-center space-x-2'>
            <Link href={'callto:+917899259117'}>
              <Button
                className='bg-minsk-900 px-3 py-2 text-sm text-minsk-100 rounded-md font-semibold uppercase hover:bg-minsk-800 transition duration-300
              ease-in-out'
                ripple
              >
                Get a Quote
              </Button>
            </Link>
            <Button
              ripple
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex mr-1 lg:hidden bg-minsk-900 hover:bg-minsk-800 text-minsk-100 items-center justify-center p-2 rounded-lg focus:outline-none transition duration-300 ease-in-out'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <div className='sr-only'>Open main menu</div>
              {!isOpen ? (
                <CgMenu className='block w-6 h-6' />
              ) : (
                <CgMenuMotion className='block w-6 h-6' />
              )}
            </Button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='lg:hidden' id='mobile-menu'>
            <ul className='flex flex-col space-y-1'>
              {MenuItems.map((item, index) => (
                <li
                  key={index}
                  className='text-minsk-900 hover:text-minsk-100 hover:bg-minsk-800 py-4 rounded-md px-3 transition duration-300 ease-in-out'
                >
                  <Link
                    href={item.href}
                    className=''
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Header;

const MenuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];
