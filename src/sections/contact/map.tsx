import React from 'react';

const MapSection = () => {
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.553573527511!2d77.44662420000002!3d12.742520500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae459335865ac1%3A0x5ae797e496125852!2sPadma%20Constructions!5e0!3m2!1sen!2sin!4v1709360720975!5m2!1sen!2sin'
        allowFullScreen={true}
        loading='lazy'
        className='rounded-md border-minsk-900 border-2 w-96 h-96 max-w-md md:max-w-none'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default MapSection;
