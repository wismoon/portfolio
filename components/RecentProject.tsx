import { projects } from '@/data'
import { title } from 'process'
import React from 'react'

const RecentProject = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A Small Section of {' '}
            <span className='text-purple'>
                recent project
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-14 mt-10'>
              {projects.map(({ id, title, des, img, iconLists, link }) =>  
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    {title}
                </div>
            )}
        </div>
    </div>
  )
}

export default RecentProject