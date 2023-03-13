import Image from 'next/image'
import React from 'react'
import skill from '../images/s3.gif'

const Skills=({mySkill})=>{
    return(
        <div className='w-full h-screen' id='Skills'>
            <h4 className='text-2xl font-bold text-center p-4'>Skills</h4>
            <div className='max-w-[840px] mx-auto px-2 flex justify-center items-center my-4' >  
                <div className='grid md:grid-cols-2 gap-8'>
               
                       <div className='relative pt-1 w-64'>
                        {
                            mySkill?.map(v=>
                            <>
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                        {v.name}
                                    </span>
                                    </div>
                                    <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-blue-600">
                                    {v.percent}
                                    </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                    <div style={{ width: v.percent }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                </div>  
                            </>
                                )
                        }
                       </div>
                       <div className=' '>
                         <Image src={skill} alt='/' width='300' height='230' layout='responsive'/>
                     </div>
                </div>
            </div>
        </div>
   
    )
}
export default Skills
