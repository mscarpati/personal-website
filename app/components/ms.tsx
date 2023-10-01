import Image from "next/image";

// need to fix the justification so ms and virtu are left aligned

export default function MS(){
    return (
        <div>
            <div className = 'flex flex-row justify-left items-left mt-6 mb-12'>
                <Image className = 'ml-3 mt-3 w-24 h-24 flex-shrink-0' src = '/assets/images/morgan-stanley.jpeg' alt = 'ms logo' width = {100} height = {100} />
                <div className = 'ml-5 mt-7 flex-col'>
                    <h1 className = 'text-4xl font-libre text-white mr-3'>2023 ISG Risk Summer Analyst</h1>
                    <p className = 'mt-1 text-xl font-khula text-white'>Morgan Stanley. New York, New York.</p>
                </div>
            </div>
        </div>
    )
}