'use client';


import Link from 'next/link';
import React from 'react';
import { RightArrow } from '@/components/RightArrow';

const SpecializedProjects = () => {
  return (
    <div className="p-6 lg:p-16 bg-transparent text-primary space-y-8 mt-8">
      {/* Title */}
      <h2 className="text-3xl font-bold text-primary">
        Specialized Projects
      </h2>

      {/* Main Paragraph */}
      <p className="leading-relaxed text-lg shadow-md p-4 rounded-md text-neutral-600  dark:text-white shadow-neutral-600">
        We provide consultancy and hands-on practical solutions in specialized projects related to the e.g GDPR, DORA, NIS2, ISO27001, AI-Act/ISO 42001. 
        The specialized projects often focus on implementing, improving, or evaluating compliance measures, in response to the evolving data compliance landscape. 
        These projects may range from advanced technical solutions to complex organizational policy adjustments and often include cross-functional collaboration.
      </p>

      {/* Bullet Points */}
      

    

<ul className="pl-6 text-primary space-y-2">
  <li className="flex items-center text-neutral-600 dark:text-white">
    <RightArrow />
    Proactively strengthen the overall approach to data compliance
  </li>
  <li className="flex items-center text-neutral-600 dark:text-white">
  <RightArrow />
    Reduce risks
  </li>
  <li className="flex items-center text-neutral-600 dark:text-white">
  <RightArrow />
    Build trust with users and stakeholders
  </li>
  <li className="flex items-center text-neutral-600 dark:text-white">
  <RightArrow />
    Achieve certification
  </li>
  <li className="flex items-center text-neutral-600 dark:text-white">
  <RightArrow />
    Develop robust and sustainable information security practices
  </li>
  <li className="flex items-center text-neutral-600 dark:text-white">
  <RightArrow />
    Create a culture of continuous improvement and ensure resilience against emerging threats
  </li>
</ul>




      {/* Subtitle */}
      <h3 className="text-2xl font-semibold text-cyan-500">
        AI ACT Projects
      </h3>

      {/* Secondary Paragraph */}
      <p className="leading-relaxed text-lg shadow-md p-4 rounded-md shadow-neutral-600 text-neutral-600  dark:text-white">
        Specialized projects focused on the AI Act often revolve around implementing compliance strategies, creating robust AI governance structures, and enhancing transparency and accountability in AI development. 
        These projects facilitate compliance while fostering innovation and trust in AI systems.
      </p>

      {/* Subtitle */}
      <h3 className="text-2xl font-semibold text-cyan-500">
        How Can We Add Value to Your Company?
      </h3>

      {/* Bullet Points */}
      <ul className="pl-6 text-primary space-y-2">
        <li className="flex items-center text-neutral-600  dark:text-white">
        <RightArrow />
          Navigate and comply with specialized regulatory frameworks</li>
        <li className="flex items-center text-neutral-600  dark:text-white">  <RightArrow />Minimize regulatory risks</li>
        <li className=" flex items-center text-neutral-600  dark:text-white">  <RightArrow />Enhance operational resilience</li>
        <li className=" flex items-center text-neutral-600  dark:text-white">  <RightArrow />Build robust governance structures</li>
      </ul>

      {/* Call to Action */}
      <div className="text-lg mt-4 text-neutral-600  dark:text-white">
        Feel free to{' '}
        <Link
          href="/contact"
          className="text-primary underline"
        >
          contact us
        </Link>{' '}
        to discover how we can be of assistance.
      </div>
    </div>
  );
};

export default SpecializedProjects;
