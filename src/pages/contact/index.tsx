import React from 'react';
import MapSection from '@/sections/contact/map';
import FormSection from '@/sections/contact/form';
import SocialMediaLinks from '@/sections/contact/socialMedia';

const IndexPage = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-center py-4 md:py-6 lg:py-8 text-minsk-900'>
          Contact Us
        </h1>
        <div className='flex flex-col items-center'>
          <div className='grid lg:grid-cols-2'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-2xl py-4 font-semibold text-center text-minsk-900'>
                Follow Us
              </h2>
              <div className='flex items-center justify-center'>
                <SocialMediaLinks />
              </div>
            </div>
            <div>
              <h2 className='text-2xl py-4 font-semibold text-center text-minsk-900'>
                Directions
              </h2>
              <MapSection />
            </div>
          </div>
          <div className='py-6'>
            <h2 className='text-2xl py-4 font-semibold text-center text-minsk-900'>
              Contact Us
            </h2>
            <FormSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
