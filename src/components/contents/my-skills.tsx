import React from 'react'
import { SignupFormDemo } from '../utils/formSignup'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { Skils } from '@/constans/skills'
// import Example from '../ui/pill'

const Skills = () => {
  return (
    <div className='flex space-x-3 justify-center items-center'>
        {/* <Example/> */}
        <AnimatedTooltip items={Skils} />
    </div>
  )
}

export default Skills