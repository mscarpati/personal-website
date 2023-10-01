'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';


export default function MENU(){

    //const { }
    const [lastScrollY, setLastScrollY] = useState(0);
    //const scrolling = typeof window !== 'undefined' && window.scrollY !== lastScrollY;
    //const [scrolling, setScrolling] = useState(false);
    const [atTop, setAtTop] = useState(true);
    const [show, setShow] = useState(false);

    const control = () => {
        if (typeof window !== "undefined"){
            if (window.scrollY !== lastScrollY && !atTop){
                setShow(true)
            } else if (atTop) {
                setShow(false)
            }  
        }

        setLastScrollY(window.scrollY);

        if (window.scrollY < 150){
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
        <div className = {`fixed top-0 z-10 w-full active ${show ? 'transition-all duration-100' : 'transition-all duration-100 opacity-0'}`}>
            <div className = 'h-20 bg-dark'>
                <div className = 'flex flex-row justify-left items-end h-full'>
                    <p className = 'ml-20 mb-2 text-white text-4xl font-libre'>Mia Scarpati</p>
                    <Link to='me' smooth = {true} className = 'ml-12 mb-2 text-xl text-white font-khula hover:text-opacity-50'>About me.</Link>
                    <Link to='projects' smooth = {true} className = 'ml-12 mb-2 text-xl text-white font-khula hover:text-opacity-50'>Projects.</Link>
                    <Link to='work' smooth = {true} className = 'ml-12 mb-2 text-xl text-white font-khula hover:text-opacity-50'>Work experience.</Link>
                    <Link to='contact' smooth = {true} className = 'ml-12 mb-2 text-xl text-white font-khula hover:text-opacity-50'>Contact.</Link>
                </div>
            </div>
        </div>

    )
}