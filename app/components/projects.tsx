'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image"

import { isMobile } from 'react-device-detect';

export default function OLYMPUSCARD() {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [atTop, setAtTop] = useState(true);
    const [out, setOut] = useState(false);
    const [show, setShow] = useState(false);
    const [fade, setFade] = useState(false);

    const control = () => {
        if (typeof window !== "undefined"){
            if (window.scrollY > lastScrollY && !atTop){
                setShow(true)
            } else {
                setShow(false)
            }

            if (window.scrollY > lastScrollY && out){
                setFade(true)
            } else {
                setFade(false)
            }
        }

        setLastScrollY(window.scrollY);

        if (! isMobile){
            if (window.scrollY > 1600){
                setOut(true);
            } else {
                setOut(false);
            }
        } else {
            if (window.scrollY > 3200){
                setOut(true);
            } else {
                setOut(false);
            }
        }

        if (window.scrollY < 500){
            setAtTop(true);
        } else {
            setAtTop(false);
        }
        console.log("scrolling");
    };

    useEffect(() => {
        if (typeof window !== 'undefined'){
            window.addEventListener('scroll', control);
            console.log("use effect");
        } 
        

        return () => {
            window.removeEventListener('scroll', control);
        };
        
    }, [lastScrollY, control]);
    // wrap with isMobile check
    return (
        <div>
            { !isMobile ? (
        
        <div className = {`flex flex-row active ${fade ? 'opacity-0 transition-all duration-500' : 'transition-all duration-500'}`}>
            <div className={`w-[24rem] md:w-[24rem] h-[39rem] ml-auto mr-4 -mt-5 rounded-[30px] active ${show ? 'bg-light-grey transform translate-y-[-5%] transition-transform duration-1000' : 'sticky top-[20px] z-1 transform translate-y-[20%] transition-transform duration-1000 bg-beige'}`}>
                { show ? (
                    <>
                <div className='flex flex-col'>
                    <a href='https://www.projectolympus.app' target='_blank' rel='noopener noreferrer'>
                        <Image className='ml-8 mt-6 w-9 h-9 flex-shrink-0 hover:animate-[spin_1s]' src='/assets/images/olympus.png' alt='olympus' width={100} height={100} />
                    </a>
                    <h1 className='ml-7 mt-6 text-5xl font-libre text-main'>Olympus</h1>
                </div>
                <p className='ml-8 my-5 mr-10 text-xl font-khula text-main leading-relaxed'>Olympus is a mobile fitness app designed for weightlifters, by weightlifters. As a founding member of the team and gym rat myself, I originally joined Olympus to help with the brand vision and product roadmap. Early in 2023, I transitioned to a software engineering role and have been a full-stack developer for the mobile and web apps since. Check out where we’re at now at our website, linked in our logo at the top of this card.</p>
                </>
                ) : null}

                </div>

            <div className={`w-[24rem] md:w-[24rem] h-[39rem] mr-auto mt-20 rounded-[30px] active ${!show ? 'bg-light-grey transform translate-y-[-20%] transition-transform duration-1000' : 'sticky top-[20px] z-1 transition-transform duration-1000 bg-beige'}`}>
                { !show ? (
                    <>
                <div className='flex flex-col items-end mr-8'>
                    <a href='https://github.com/mscarpati/quant-finance' target='_blank' rel='noopener noreferrer'>
                        <Image className='items-right mt-6 w-10 h-10 flex-shrink-0 overflow-hidden hover:animate-[spin_1s]' src='/assets/images/github.png' alt='github logo' width={100} height={100} />
                    </a>
                    <h1 className='mt-6 text-5xl font-libre text-main text-right'>Stock Price Predictor</h1>

                </div>
                <p className='ml-7 my-5 mr-10 text-xl font-khula text-main text-right leading-relaxed'>
                    My first experience using any machine learning tools, I built a stock price predictor using an LSTM model. 
                    I gained familiarity with data analysis tools I would later go on to use during my internship at a leading trading firm.
                    Check out the Jupyter notebook on my GitHub (linked above).
                </p>
                </>
                ) : null}
            </div>
        </div>
 
            ) : (
                <div className = {`flex flex-col items-center active ${fade ? 'opacity-0 transition-all duration-500' : 'transition-all duration-500'}`}>
                    <div className='w-[95%] h-[41rem] rounded-[30px] bg-light-grey'>
               
                <div className='flex flex-col'>
                    <a href='https://www.projectolympus.app' target='_blank' rel='noopener noreferrer'>
                        <Image className='ml-8 mt-6 w-9 h-9 flex-shrink-0 hover:animate-[spin_1s]' src='/assets/images/olympus.png' alt='olympus' width={100} height={100} />
                    </a>
                    <h1 className='ml-7 mt-6 text-5xl font-libre text-main'>Olympus</h1>
                </div>
                <p className='ml-8 my-5 mr-10 text-xl font-khula text-main leading-relaxed'>Olympus is a mobile fitness app designed for weightlifters, by weightlifters. As a founding member of the team and gym rat myself, I originally joined Olympus to help with the brand vision and product roadmap. In January, I transitioned to a software engineering role and was responsible for building out a key arm of the workout tracking functionality. Check out where we’re at now at our website, linked in our logo at the top of this card.</p>

                </div>

            <div className='w-[95%] h-[41rem] rounded-[30px] bg-light-grey mt-2'>
                
                <div className='flex flex-col items-end mr-8'>
                    <a href='https://github.com/mscarpati/quant-finance' target='_blank' rel='noopener noreferrer'>
                        <Image className='items-right mt-6 w-10 h-10 flex-shrink-0 overflow-hidden hover:animate-[spin_1s]' src='/assets/images/github.png' alt='github logo' width={100} height={100} />
                    </a>
                    <h1 className='mt-6 text-5xl font-libre text-main text-right'>Stock Price Predictor</h1>

                </div>
                <p className='ml-7 my-5 mr-10 text-xl font-khula text-main text-right leading-relaxed'>My first experience using any machine learning tools, I built a stock price predictor using an LSTM model. Check out the Jupyter Notebook, linked above.</p>
              
            </div>
                </div>
            )}
        </div>
        
        
    )
}