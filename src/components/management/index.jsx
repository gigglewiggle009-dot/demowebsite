import React from 'react'
import { SharedCard, SharedHeading } from '../SharedComponent'
import { management } from '@/constant'
import VideoBg from "@/assets/svg/videoBackground.svg";



export default function Management() {
  return (
    <div className='bg-primaryBlack text-white py-10'>
    <div className='w-10/12 mx-auto'>
        <div className='text-center  my-16'>
            <SharedHeading>Our Directors</SharedHeading>
        </div>
        <div className='grid grid-cols-3 gap-10 relative '>
        <VideoBg className="absolute top-0 left-0 w-fit h-[120%] " />

            {
                management?.map((item, index) => <SharedCard director={true} item={item} index={index} key={index} />)
            }
        </div>
    </div>
</div>
  )
}
