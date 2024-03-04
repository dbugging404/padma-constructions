import React from 'react';
import Logo from '@/assets/icons/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-minsk-200'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link href='/' className='flex items-center mb-4 sm:mb-0 space-x-3'>
            <div className='flex items-center justify-start gap-3'>
              <Image src={Logo} className='w-20' alt='Padma Constructions' />
              <div className='flex flex-col items-start justify-start font-extrabold'>
                <div className='text-2xl whitespace-nowrap text-minsk-900'>
                  Padma
                </div>
                <div className='text-2xl text-minsk-900'>Constructions</div>
              </div>
            </div>
          </Link>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-minsk-900 sm:mb-0'>
            <li>
              <Link href='#' className='hover:underline me-4 md:me-6'>
                About
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline me-4 md:me-6'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline me-4 md:me-6'>
                Licensing
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:underline'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className='my-6 border-minsk-900 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-minsk-900 sm:text-center'>
          {new Date().getFullYear()} ©{' '}
          <Link href='/' className='hover:underline'>
            Padma Constuctions™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
