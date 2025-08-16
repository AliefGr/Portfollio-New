import { cn } from '@/lib/utils';
import { FileTextIcon } from "lucide-react";
import Link from 'next/link';
import { buttonVariants } from "./ui/button";
import { Dock, DockIcon } from "./ui/dock";
import Icons from "./ui/icons";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import AnimationContainer from "./utils/animation-container";
import { LINKS } from '@/constans/link';
import React from 'react'



const DATA = {
    navbar: LINKS,
    contact: {
        social: {
            github: {
                name: "GitHub",
                url: "https://github.com/AliefGr",
                icon: Icons.github,
            },
            linkedin: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/alief-gymnastiar-57883a289/",
                icon: Icons.linkedin,
            },
            resume: {
                name: "Resume",
                url: "/cv.pdf",
                icon: FileTextIcon,
            }
        },
    },
};

const Navbar = () => {
  return (
    <header className='z-[999] flex justify-center items-center fixed bottom-6 inset-x-0 cursor-pointer w-full'>
        <AnimationContainer animate="slide-up" delay={0.5}>
             <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                  target='_blank'
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          {/* <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle className="rounded-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon> */}
        </Dock>
      </TooltipProvider>
        </AnimationContainer>
    </header>
  )
}

export default Navbar