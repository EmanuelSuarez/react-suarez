import React from 'react';
import CartWidget from './CartWidget';

export default function NavBar({nombre}) {
  

  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="index.html" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Luminosity Market</a>
        </div>
        <div>
          <a href="index.html" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Category 1</a>
          <a href="index.html" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Category 2</a>
          <a href="index.html" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Category 3</a>
        </div>
        <div>
          <a href="index.html"><CartWidget/></a>
        </div>
      </nav>
     

    </>
  );
}
