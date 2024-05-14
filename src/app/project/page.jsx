import { Project } from '@/components'
import LetsCreate from '@/components/letscreate'
import Management from '@/components/management'
import React from 'react'

function page() {
  return (
    <div>
      <Project />
      <Management />
      <LetsCreate />
    </div>
  )
}

export default page
