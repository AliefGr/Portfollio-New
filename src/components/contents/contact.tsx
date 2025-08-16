import React from 'react'
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Send } from 'lucide-react';
import AnimationContainer from '../utils/animation-container'
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='relative z-40 pt-10 pb-20 w-full '>
        <AnimationContainer className='' animation='slide-up' delay={0.1}>
          <div className=''>
            <h1 className='font-medium text-2xl lg:text-3xl text-left'>Conact Me</h1>
          </div>
        </AnimationContainer>
         {/*  */}
           <div className='pt-10'>
             {/* <div className="pointer-events-none absolute top-0 right-0 left-0 z-0 h-full w-full overflow-hidden">
                <div className="bg-blue-500 absolute top-1/3 left-1/12 h-64 w-64 rounded-full opacity-10 blur-3xl" />
                <div className="bg-blue-500 absolute right-1/4 bottom-1/12 h-70 w-70 rounded-full opacity-10 blur-3xl" />
             </div> */}
              <div className="mb-4 flex gap-8">
                <Link prefetch={false} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
                  href="#"
                >
                  <Mail className="h-5 w-5 text-white" />
                </Link>
                <div className="text-md text-foreground/70">
                  <p>Email to us at </p>
                  <p>aliefgym999@gmail.com</p>
                </div>
              </div>
              <div className="mb-4 flex gap-8">
                <Link prefetch={false}              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
                  href="#"
                >
                  <Phone className="h-5 w-5 text-white" />
                </Link>
                <div className="text-md text-foreground/70">
                  <p>Call us at </p>
                  <p>+62 83174895525</p>
                </div>
              </div>
              <div className="mb-4 flex gap-8">
                <Link prefetch={false} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 px-2 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
                  href="#"
                >
                  <MapPin className="h-5 w-5 text-white" />
                </Link>
                <div className="text-md text-foreground/70">
                  <p>Location at </p>
                  <p>Indonesia</p>
                </div>
              </div>
        </div>

    </div>
  )
}

export default Contact 