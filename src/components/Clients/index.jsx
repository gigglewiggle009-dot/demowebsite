'use client'

import React from 'react'
import { SharedCard, SharedHeading } from '../SharedComponent'
import { ourClient } from '@/constant'

export const Clients = () => {
    return (
        <div className='bg-primaryBlack text-white py-10'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center my-16'>
                    <SharedHeading>What We Can Do for Our Clients</SharedHeading>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    {
                        ourClient?.map((item, index) => <SharedCard item={item} index={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

