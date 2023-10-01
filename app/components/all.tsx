'use client';

import React, { useState, useEffect } from 'react';

import About from './about'
import Line from './line'
import Olympuscard from './projects'
import Capstone from './capstone'
import Ms from './ms'
import Virtu from './virtu'
import Contact from './contact'

export default function ALL() {

    //const { }
    const [lastScrollY, setLastScrollY] = useState(0);
    //const scrolling = typeof window !== 'undefined' && window.scrollY !== lastScrollY;
    //const [scrolling, setScrolling] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const [show, setShow] = useState(false);

    const control = () => {
        if (typeof window !== "undefined"){
            if (window.scrollY > lastScrollY && !atTop){
                setShow(true)
            } else if (atTop) {
                setShow(false)
            }  
        }

        setLastScrollY(window.scrollY);

        if (window.scrollY < 20){
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

    return (
        <div>
        <Line />
        <About />
        <Line />
        <div id='projects' className = 'flex flex-row justify-center'>
        <Olympuscard />
        <Capstone />
        </div>
        <Line />
        <div className = 'ml-auto mr-auto'>
          <Virtu />
          <Ms />
        </div>
        <Line />
        <Contact />
        </div>
    )
}

