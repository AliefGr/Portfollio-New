import React from 'react'
import { SignupFormDemo } from '../utils/formSignup'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { Skils } from '@/constans/skills'
import AnimationContainer from '../utils/animation-container'
// import Example from '../ui/pill'

const Skills = () => {
  return (
    <div className=' pt-10 pb-20 w-full relative'>
        {/* <Example/> */}
                <AnimationContainer animation='slide-up' className='flex items-center justify-center overflow-hidden w-full'>
                    <div className=''>
                        <h2 className='text-2xl lg:text-3xl font-bold text-left w-full text-foreground'>My Skills</h2>
                        <div className="my-2 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700" />
                    </div>
                </AnimationContainer>
                <AnimationContainer animation='slide-up' className='max-w-2xl pt-10 flex space-x-3 space-y-3 justify-center items-center mx-auto flex-wrap'>
                  <AnimatedTooltip items={Skils} />
                </AnimationContainer>
    </div>
  )
}

export default Skills