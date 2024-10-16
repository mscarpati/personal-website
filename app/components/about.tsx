// imports?
'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Line from './line'
import { isMobile } from 'react-device-detect';

export default function ABOUT() {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [show, setShow] = useState(false);

  const control = () => {
    if (typeof window !== "undefined") {
      if ((window.scrollY > lastScrollY && !atTop) || (window.scrollY < lastScrollY && !atTop)) {
        setShow(true)
      } else if (atTop) {
        setShow(false)
      }
    }

    setLastScrollY(window.scrollY);

    if (!isMobile) {
      if (window.scrollY < 150 || window.scrollY > 800) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
      console.log("scrolling");
    } else {
      if (window.scrollY < 150 || window.scrollY > 2000) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', control);
      console.log("use effect");
    }


    return () => {
      window.removeEventListener('scroll', control);
    };

  }, [lastScrollY, control]);


  return (
    <div id='me' className={`active ${show ? 'transition-all duration-500' : 'transition-all duration-500 opacity-0'}`}>
      <Line />
      <div>
            <div className = 'w-full h-16 bg-main mt-2 mb-2 rounded-[30px] items-center justify-center'>
                <p></p>
            </div>
        </div>
      <div className='mb-20 mt-20'>
        <div className='w-[20rem] md:w-[55rem] bg-light-grey ml-auto mr-auto mt-20 rounded-[30px] items-center justify-center'>
          <div className='flex flex-row'>
            <Image className='ml-5 mt-5 w-24 h-24 rounded-full overflow-hidden flex-shrink-0' src='/assets/images/headshot-2.png' alt='headshot' width={100} height={100} />
            <div className='ml-5 mt-7'>
              <h1 className='text-5xl font-libre text-main'>About Me</h1>
              <p className={`my-6 mr-10 text-xl font-khula text-main leading-relaxed ${isMobile ? '-ml-20' : ''}`}>I’m a senior at Northwestern pursuing a B.S. in the McCormick School of Engineering in Computer Science with a minor in Statistics. I’ve always been fascinated by the intersection of finance and technology and will be working as a Quant Trader at Virtu Financial in NYC after I graduate. When I have free time, I love to hike, lift weights, cook, and travel. </p>
            </div>
          </div>
        </div>
      </div>
      <div>
            <div className = 'w-full h-10 bg-main rounded-[30px] items-center justify-center'>
               
            </div>
        </div>
        <div className = 'w-full h-10 bg-main rounded-[30px] items-center justify-center'>
               
            </div>
      {/* <Line /> */}
    </div>
  )
}