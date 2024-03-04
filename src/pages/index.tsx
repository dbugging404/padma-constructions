import React from 'react';
import { NextPage } from 'next';
import Banner from '@/sections/home/banner';
import { Button } from '@material-tailwind/react';
import Services from '@/sections/home/services';
import Why from '@/sections/home/Why';
import CTA from '@/components/cta';

const IndexPage: NextPage = () => {
  return (
    <div className=''>
      <Banner />
      <CTA />
      <Services />
      <Why />
    </div>
  );
};

export default IndexPage;
