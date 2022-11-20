import Image from 'next/image'
import React from 'react'
import Edu from '../images/edu.gif'
import {FaGraduationCap,FaUniversity,FaClock} from 'react-icons/fa'

const Education=({eduData})=>{
    return(

      <div className='w-full' id='Education'>
        <h1 className='text-2xl text-center font-bold pb-8'>Education</h1>
        <div className='max-w-[1240px] mx-auto px-2 flex justify-center items-center my-4' >  
            <div className='grid md:grid-cols-2 gap-8'>
            <div className='sm:flex hidden'><Image src={Edu} alt='/' width='320' height='220'/></div> 
                   <div className=' mt-6'>
                    {
                        eduData?.map((v,k)=>
                        <div className='my-3' key={k}>
                          <div className='flex'>
                            {/* <FaGraduationCap size={25} className='mt-5'/> */}
                            <h4 className='text-xl font-bold pb-4'>{v.degree}</h4>
                          </div>
                          <div className='flex'>
                            <FaUniversity  size={20} className=' mb-2'/>
                            <p className='text-gray ml-5'>{v.university}</p>
                          </div>
                          <div className='flex'>
                            <FaClock size={20} className=''/>
                            <p className='text-gray ml-5'>{v.duration}</p>
                          </div>
                        </div>
                        )
                    }
                   </div>
            </div>
        </div>
    </div>
    )
}
export default Education
