import { mainServices } from '@/utils/mainServices';
import Link from 'next/link';
import React from 'react';
import { ServiceCard } from './ServiceCard';

function ServiceCardMain() {
  return (
    <>
      <h1 className='text-4xl font-bold dark:text-white text-center'>
        {' '}
        Our Services
      </h1>
      <div className='flex flex-col flex-wrap lg:flex-row 2xl:flex-nowrap w-full justify-center gap-6 lg:gap-8 mb-6'>
        {mainServices.map((service, index) => (
          <div key={index}>
            <Link href={service.href}>
              <ServiceCard
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceCardMain;
