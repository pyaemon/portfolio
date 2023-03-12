import React from 'react'
const Contact=()=>{
   
        return(
            <div className='max-w-[1240px] m-auto p-4 mb-3' id='Contact'>
                <h4 className='text-2xl font-bold text-center p-4'>Let&apos;s work together</h4>
                <form className='max-w-[600px] m-auto'>
                    <div className='grid grid-cols-2 gap-2'>
                        <input className='border shadow-lg p-3' type='text' placeholder='Name'/>
                        <input className='border shadow-lg p-3' type='email' placeholder='Email'/>
                    </div>
                    <input className='w-full h-full my-2 border shadow-lg p-3' type='text' placeholder='Subject'/>
                    <textarea className='w-full border shadow-lg p-3' cols='30' rows='7' placeholder='Message'></textarea>
                    <button className='border shadow-lg w-full mt-2 p-2 bg-blue-200'>Submit</button>
                </form>
                
            </div>
        )
   
}
export default Contact