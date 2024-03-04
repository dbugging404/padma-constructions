import React from 'react';
import { Carousel, IconButton } from '@material-tailwind/react';
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Banner = () => {
  return (
    <Carousel
      transition={{ duration: 2 }}
      autoplay={true}
      loop={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant='text'
          color='white'
          size='lg'
          onClick={handlePrev}
          className='!absolute top-2/4 left-4 -translate-y-2/4'
        >
          <BiChevronLeft className='h-7 w-7' />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant='text'
          color='white'
          size='lg'
          onClick={handleNext}
          className='!absolute top-2/4 !right-4 -translate-y-2/4'
        >
          <BiChevronRight className='h-7 w-7' />
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <Image
        className='w-full h-96 object-cover'
        src='https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
        alt='First slide'
        width={1920}
        height={1080}
      />

      <Image
        className='w-full h-96 object-cover'
        src='https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
        alt='Second slide'
        width={1920}
        height={1080}
      />

      <Image
        className='w-full h-96 object-cover'
        src='https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
        alt='Third slide'
        width={1920}
        height={1080}
      />
    </Carousel>
  );
};

export default Banner;
