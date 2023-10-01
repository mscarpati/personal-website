import Image from "next/image";
import { isMobile } from 'react-device-detect';

export default function CONTACT() {


    return (
        <div id='contact' className='flex flex-col mb-12 justify-center items-center'>
            <div className = 'w-full h-10 bg-main rounded-[30px] items-center justify-center'>
               
               </div>
               { !isMobile ? (
            <div className='align-left ml-auto mr-auto mt-12'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <h1 className='text-white text-4xl font-libre ml-3'>Check out my resume </h1>
                    <a href='https://drive.google.com/file/d/1-eOHKa2Sq3ifU_3QRK9Ns3lcqSqagB1u/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                        <h1 className='text-white text-4xl font-libre underline hover:text-opacity-50'>here.</h1>
                    </a>
                </div>
            </div>
               ) : (

                <div className='align-left ml-3 mr-auto mt-12'>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-white text-4xl font-libre ml-3'>Check out my resume</h1>
                    <a href='https://drive.google.com/file/d/1-eOHKa2Sq3ifU_3QRK9Ns3lcqSqagB1u/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                        <h1 className='text-white text-4xl font-libre underline hover:text-opacity-50'>here.</h1>
                    </a>
                </div>
            </div>

               )}

            <div className='flex flex-row gap-4 mt-2'>
                <a href='https://www.linkedin.com/in/mia-scarpati-20463b197/' target='_blank' rel='noopener noreferrer'>
                    <Image className='mt-3 w-24 h-24 flex-shrink-0 hover:opacity-50' src='/assets/images/linkedin.png' alt='linkedin logo' width={100} height={100} />
                </a>
                <a href='https://github.com/mscarpati' target='_blank' rel='noopener noreferrer'>
                    <Image className='mt-3 flex-shrink-0 hover:opacity-50' src='/assets/images/github-mark-white.png' alt='github logo' width={100} height={100} />
                </a>
                <a href='mailto:mscarpati26@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="w-24 h-24 mt-3 hover:opacity-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>
            </div>


        </div>
    )
}