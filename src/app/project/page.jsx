import { Project } from '@/components'
import { aboutbanner } from '@/assets'
import LetsCreate from '@/components/letscreate'
import Management from '@/components/management'
import { SmallBanner } from '@/components/SharedComponent'
import React from 'react'

function page() {
  return (
    <>
      <SmallBanner
        sectionsName="Project"
        discriptions="All Project Details"
        bannerImage={aboutbanner.src}
      />
      <Project />
      <Management />
      <LetsCreate />
    </>
  )
}

export default page
