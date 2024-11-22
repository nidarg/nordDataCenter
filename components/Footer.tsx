// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-transparent text-neutral-900 dark:text-white border-t border-gray-500 mt-20 py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center ">
        
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Nordic Data Compliance Centre ApS</h2>
          <p>Maglebjergvej 6, 2800 Kongens Lyngby</p>
          <p>Denmark</p>
          <p>VAT DK 44251434</p>
        </div>
        
        {/* Column 2: Insurance */}
        <div>
          <h2 className="text-lg font-semibold">Insurance</h2>
          <p className="leading-relaxed">
            All our Consultants are covered by professional indemnity insurance that protects the consultancy services.
          </p>
        </div>
        
        {/* Column 3: Links */}
        <div>
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Statement
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
              Terms of use and terms and conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
