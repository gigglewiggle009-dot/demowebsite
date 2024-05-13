import React from 'react'
import { SharedCard, SharedHeading } from '../SharedComponent'
import { management } from '@/constant'

export default function Management() {
  return (
    <div className='bg-primaryBlack text-white py-10'>
    <div className='w-10/12 mx-auto'>
        <div className='text-center  my-16'>
            <SharedHeading>Our Directors</SharedHeading>
        </div>
        <div className='grid grid-cols-3 gap-10 '>
            {
                management?.map((item, index) => <SharedCard director={true} item={item} index={index} key={index} />)
            }
        </div>
    </div>
</div>
  )
}
