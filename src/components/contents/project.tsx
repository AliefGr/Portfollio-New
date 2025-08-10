import React from 'react'
import AnimationContainer from '../utils/animation-container'

import { myContent } from '@/constans/projects'
import { AnimatedTestimonials } from '../ui/sticky-scroll-reveal'

const Project = () => {
  return (
    <div className='pt-10 pb-20'>
        <AnimationContainer animation='slide-up' className='flex items-center justify-center overflow-hidden w-full'>
            <div className=''>
                <h2 className='text-2xl lg:text-3xl font-bold text-left w-full'>Featured Projects</h2>
                <div className="my-2 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700" />
            </div>
        </AnimationContainer>
        <AnimationContainer animation='fade' className='min-h-scree text-white pt-10 '>
            <AnimatedTestimonials content={myContent} />
        </AnimationContainer>
    </div>
  )
}

export default Project