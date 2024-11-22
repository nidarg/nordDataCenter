'use client';

import ServicesByType from '@/components/services/ServicesByType';
import TailoredServicesHeader from '@/components/services/TailoredServicesHeader';

import React,{useState,useEffect} from 'react';

function TailormadeSolutions() {
  const [type, setType] = useState('')

  useEffect(() => {
    // Perform any action or side effect when `type` changes.
    console.log(`Selected service type changed to: ${type}`);
    // Add more logic here, e.g., fetch data or reset states.
  }, [type]);

  return (
    <div className='py-10'>
    <TailoredServicesHeader setType={setType}/>
   {type && <ServicesByType type={type} />}
    </div>
  );
}

export default TailormadeSolutions;
