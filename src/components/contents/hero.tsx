"use client"
import AnimationContainer from "../utils/animation-container"
import Image from "next/image"
import Icons from "../ui/icons"
import {motion} from "framer-motion"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="w-full relative pt-20 pb-20 lg:pt-28 z-40">
      {/* Foto Profile */}
      <AnimationContainer animation="scale" className="flex justify-center overflow-hidden w-full mx-auto">
        <div className="rounded-full size-32 bg-[#050505] mx-auto overflow-hidden group border-2 transition-all duration-300 border-transparent hover:border-border">
            <Image className="size-full object-cover object-top rounded-full grayscale hover:grayscale-0 scale-110 transition-all duration-300" src="/foto.jpg" alt="foto" width={80} height={80}/>
        </div>
      </AnimationContainer>
      {/*  */}
      <AnimationContainer delay={0.3} animation="slide-up" className="flex items-center justify-center gap-2 pl-2 pr-5 py-2 rounded-full bg-background border border-zinc-700/80 w-max mx-auto group mt-6">
        <div className="rounded-full bg-[#131316] flex items-center justify-center size-10 overflow-visible">
            <span className="text-xl wave">
              <Icons.wave className="size-6 -rotate-[30deg] group-hover:scale-110 transition-all duration-300" />
            </span>
        </div>
        <div className="flex flex-col gap-2 flex-shrink-0">
                    <p className="text-sm font-medium text-foreground/70">
                        Hi, I'm Alief Gr
                    </p>
                </div>
      </AnimationContainer>

      {/* Teks Hero */}
      <div className="text-balance relative z-20 mx-auto my-4 max-w-5xl text-center text-4xl lg:text-5xl font-bold">
                        <motion.h2 className="text-balance !leading-snug">
                            {"Building Digital Solutions that Make a Difference"
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                        className="inline-block whitespace-nowrap"
                                        key={index}
                                    >
                                        {word === "Digital" ? (
                                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-500">Digital</span>
                                        ) : word}
                                        &nbsp;
                                        {word === "that" && <br />}
                                    </motion.span>
                                ))}
                        </motion.h2>
                    </div>

                    {/* deskripsi text */}
                    <AnimationContainer
                delay={0.6}
                animation="slide-up"
                className="relative mt-6 flex flex-col items-center justify-center gap-y-6 max-w-3xl mx-auto text-center"
            >
                <p className="text-base text-zinc-400/90 !leading-relaxed">
                    Your one-stop solution for professional web development and design. <span className="inline-blocklg:inline-block">Whether you need a stunning website, an e-commerce platform, or a custom web application, I provide end-to-end solutions that help your business stand out in the digital landscape.</span>
                </p>
            </AnimationContainer>
            <AnimationContainer delay={0.8} animation="scale" className="relative  flex items-center justify-center mt-10">
             <Link href="#contact">
                 <button className="relative py-3 text-[15px] tracking-wider font-medium overflow-hidden rounded-lg bg-blue-500 text-white w-52 h-auto">
                  <span>et&apos;s Work Together</span>
                </button>
             </Link>
            </AnimationContainer>

    </div>
  )
}

export default Hero