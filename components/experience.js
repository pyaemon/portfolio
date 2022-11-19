import React from 'react'

const Experience=({experienceData})=>{
    return(
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative" id='Experience'>
              <h4 className='text-2xl font-bold text-center p-4'>Experience</h4>
              <div className="border-l-2 mt-10">
                {
                  experienceData?.map((v,i)=>
                    <div key={i} className={ ` transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white rounded-xl mb-10 flex-col md:flex-row ${i === 0 ? 'bg-blue-500' : i===1 ? 'bg-green-500': i===2 ? 'bg-purple-500': 'bg-yellow-500'}`}>
                    {/* Dot Follwing the Left Vertical Line */}
                    <div className={`${i === 0 ? 'bg-blue-500' : i===1 ? 'bg-green-500': i===2 ? 'bg-purple-500': 'bg-yellow-500'} w-5 h-5 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0`}></div>
          
                    {/* Line that connecting the box with the vertical line */}
                    <div className={`w-10 h-1 ${i === 0 ? 'bg-blue-300' : i===1 ? 'bg-green-300': i===2 ? 'bg-purple-300': 'bg-yellow-300'} absolute -left-10 z-0`}></div>
          
                    {/* Content that showing in the box */}
                    <div className="flex-auto">
                    <div className='flex justify-between'>
                        <h1 className="text-xl font-bold">{v.position}</h1>
                        <p className=' hover:text-gray-300'>{v.duration}</p>
                    </div>
                      <h1 className="text-lg">{v.company}</h1>
                      <h3>{v.work}</h3>
                    </div>
                  </div> 
                )
                }
          
              </div>
         
            </div>
    )
}
export default Experience
