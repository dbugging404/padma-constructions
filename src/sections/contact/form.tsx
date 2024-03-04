import React from 'react';

const FormSection = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSfMLQwN8Byz_P6fxI6rOaZ1SyyUwS1vkBJ-RwuhTuDqQ2Z4qA/viewform?embedded=true'
        frameBorder='0'
        className='w-screen max-w-3xl mx-auto border-0 rounded-md h-[850px] lg:h-[800px]'
      >
        Loading…
      </iframe>
    </div>
  );
};

export default FormSection;
