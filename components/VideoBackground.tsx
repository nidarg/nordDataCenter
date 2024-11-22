'use client';

import React from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl }) => {
  return (
    <div
      className='absolute inset-0 -z-10 w-full'
      style={{ height: 'calc(100vh)', top: '128px' }}
    >
      {/* Video Background */}
      <div className='absolute inset-0 w-full h-full'>
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          className='absolute top-0 left-0 w-full h-full object-cover'
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-slate-800 bg-opacity-40'></div>
      </div>

      {/* Fade Effect */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent'></div>
        <div className='absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent'></div>
      </div>

      {/* Text Overlay */}
      <div className='absolute inset-0 flex flex-col items-start justify-end pb-60 pl-48 gap-y-3'>
        <div className='text-center max-w-2xl'>
          <h1 className='text-lg lg:text-4xl md:text-2xl text-white font-bold'>
            BE AHEAD.
          </h1>
        </div>
        <div className='text-center max-w-2xl'>
          <h1 className='text-lg lg:text-4xl md:text-2xl text-white font-bold'>
            BE SECURE.
          </h1>
        </div>
        <div className='text-center max-w-2xl'>
          <h1 className='text-lg lg:text-4xl md:text-2xl text-white font-bold'>
            BE COMPLIANT.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
