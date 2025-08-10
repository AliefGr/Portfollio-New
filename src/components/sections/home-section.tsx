import About from "../contents/about"
import Hero from "../contents/hero"
import Skills from "../contents/my-skills"
import Project from "../contents/project"
import Wrapper from "../utils/wrapper"

const HomeSection = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center relative">
            <Wrapper className="lg:max-w-screen-lg">
                <div className="relative overflow-hidden">
                    <Hero/>
                </div>
            </Wrapper>
            <Wrapper>
                <About/>
            </Wrapper>
            <Wrapper>
                <Skills/>
            </Wrapper>
            <Wrapper>
                <Project/>
            </Wrapper>
    </div>
    )
}

export default HomeSection
