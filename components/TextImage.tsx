// 'use client';
import React from 'react';
import Image from 'next/image';

interface ResponsiveTextImageProps {
  title: string;
  subtitle?: string;
  text: string;
  imageUrl: string;
  reverse?: boolean; // if true, text will appear on the left, image on the right
}

export const TextImage: React.FC<ResponsiveTextImageProps> = ({
  title,
  text,
  subtitle,
  imageUrl,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center w-full lg:mx-auto p-6 lg:flex-row mt-20 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image container */}
      <div className='flex-shrink-0 w-full lg:w-1/2 h-96 relative'>
        <Image
          src={imageUrl}
          alt={text}
          fill
          className={`${
            reverse
              ? 'rounded-r-lg rounded-l-none'
              : 'rounded-l-lg rounded-r-none'
          } `}
        />
      </div>

      {/* Text container */}
      <div
        className={`flex flex-col justify-center w-full lg:w-1/2 text-center md:text-left bg-primary text-white p-4 h-fit sm:h-96  shadow-md shadow-slate-900   ${
          reverse
            ? 'rounded-l-lg rounded-r-none'
            : 'rounded-r-lg rounded-l-none'
        }`}
      >
        <h1 className='text-xl md:text-2xl '>{title}</h1>
        <h2 className='text-lg md:text-xl '>{subtitle}</h2>
        <p className='text-md '>{text}</p>
      </div>
    </div>
  );
};

export default TextImage;
