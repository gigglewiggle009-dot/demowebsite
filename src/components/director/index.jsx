import React from 'react'
import { director } from '@/constant'
import { SharedCard, SharedHeading } from '../SharedComponent'

export default function Director() {
  return (
    <div className='bg-primaryBlack text-white py-10'>
    <div className='w-10/12 mx-auto'>
        <div className='text-center  my-16'>
            <SharedHeading>Our Directors</SharedHeading>
        </div>
        <div className='grid grid-cols-2 gap-10 '>
            {
                director?.map((item, index) => <SharedCard director={true} item={item} index={index} key={index} />)
            }
        </div>
    </div>
</div>
  )
}
