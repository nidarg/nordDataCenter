'use client';

import HeaderCard from "../card/HeaderCard";
import Link from "next/link";

const TailoredServices = ({setType}:{ setType: (type: string) => void }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr] gap-4 lg:gap-y-4 p-1 text-center">
      {/* Empty Column for LG */}
      <div className="hidden lg:block"></div>

      {/* LIGHT, PRO, PREMIUM and MIX AND MATCH for SMALL screens */}
      <div className="lg:hidden flex flex-col space-y-4">
        <div className="bg-primary text-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row items-center justify-between min-h-[250px]">
          <h2 className="font-bold text-lg">LIGHT</h2>
          <p className="text-sm bg-ring text-white rounded-md px-2 py-1">MIX AND MATCH UP TO 5 MODULES</p>
        </div>
        <div className="bg-primary text-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row  items-center justify-between min-h-[250px]">
          <h2 className="font-bold text-lg">PRO</h2>
          <p className="text-sm bg-ring text-white rounded-md px-2 py-1">MIX AND MATCH UP TO 10 MODULES</p>
        </div>
        <div className="bg-primary text-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row  items-center justify-between min-h-[250px]">
          <h2 className="font-bold text-lg">PREMIUM</h2>
          <p className="text-sm bg-ring text-white rounded-md px-2 py-1">ALL MODULES</p>
        </div>
      </div>

      {/* LIGHT, PRO, PREMIUM on LG Screens */}
      <div className="hidden lg:block bg-primary text-white rounded-lg shadow-md p-4  flex items-center justify-center lg:w-[18rem]">
        <h2 className="font-bold text-lg">LIGHT</h2>
      </div>
      <div className="hidden lg:block bg-primary text-white rounded-lg shadow-md p-4  flex items-center justify-center lg:w-[18rem]">
        <h2 className="font-bold text-lg">PRO</h2>
      </div>
      <div className="hidden lg:block bg-primary text-white rounded-lg shadow-md p-4  flex items-center justify-center lg:w-[18rem]">
        <h2 className="font-bold text-lg">PREMIUM</h2>
      </div>

      {/* Header Card Column for START-UP, MICRO, SME */}
      <div className="lg:row-span-1 lg:col-span-1 flex flex-col justify-between bg-background rounded-lg shadow-md lg:mt-2 gap-2 lg:h-full">
        <div className="flex-1" onClick={()=>setType('startup')}>
          <Link href="#">
            <HeaderCard type="startup" />
          </Link>
        </div>
        <div className="flex-1" onClick={()=>setType('micro')}>
          <Link href="#">
            <HeaderCard type="micro" />
          </Link>
        </div>
        <div className="flex-1" onClick={()=>setType('sme')}>
          <Link href="#">
            <HeaderCard type="sme" />
          </Link>
        </div>
      </div>

      {/* MIX AND MATCH Columns for LG */}
      <div className="hidden  bg-cyan text-white rounded-lg shadow-md p-4  lg:h-full lg:mt-2 lg:flex lg:flex-col lg:justify-center">
        <h2 className="font-bold text-lg">MIX AND MATCH UP TO 5 MODULES</h2>
      </div>
      <div className="hidden  bg-cyan text-white rounded-lg shadow-md p-4  lg:h-full lg:mt-2 lg:flex lg:flex-col lg:justify-center">
        <h2 className="font-bold text-lg">MIX AND MATCH UP TO 10 MODULES</h2>
      </div>
      <div className="hidden  bg-cyan text-white rounded-lg shadow-md p-4  lg:h-full lg:mt-2 lg:flex lg:flex-col lg:justify-center">
        <h2 className="font-bold text-lg">ALL MODULES</h2>
      </div>
    </div>
  );
};

export default TailoredServices;
