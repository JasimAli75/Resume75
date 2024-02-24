import React from 'react';
import Image from 'next/image';

export default function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='mac-w-[1240px] mx-auto flex flex-col justify-center h-full '>
        <p className='text-xl tracking-tighter uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4 font-bold  text-gray-800 text-3xl'>
          What I Can DO
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/NT.png'
                  width={100}
                  height={100}
                  alt='Nextjs logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>NEXT.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/html.png'
                  width={100}
                  height={100}
                  alt='html logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/tail.png'
                  width={100}
                  height={100}
                  alt='Tailwind logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>Tailwind-CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/CK.png'
                  width={90}
                  height={90}
                  alt='Chakra logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>Chakra-UI</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/TS.png'
                  width={90}
                  height={90}
                  alt='TypeScript logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/JS.png'
                  width={70}
                  height={70}
                  alt='JavaScript logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/ND.png'
                  width={130}
                  height={130}
                  alt=' Nodejs logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>Node-js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 eas-In duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/Images/PS.png'
                  width={100}
                  height={100}
                  alt='Postman logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='font-semibold'>PostMan(API)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
