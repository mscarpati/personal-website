import Image from "next/image";

export default function VIRTU(){
    return (
        <div id = 'work'>
            <div className = 'flex flex-row justify-left items-left mt-12'>
                <Image className = 'ml-3 mt-3 w-24 h-24 flex-shrink-0' src = '/assets/images/virtu.png' alt = 'virtu logo' width = {100} height = {100} />
                <div className = 'ml-5 mt-7 flex-col'>
                    <h1 className = 'text-4xl font-libre text-white'>2024 Quantitative Trading Intern</h1>
                    <p className = 'mt-1 text-xl font-khula text-white'>Virtu Financial. New York, New York.</p>
                </div>
            </div>
        </div>
    )
}