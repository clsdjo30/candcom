import React, {useEffect, useRef} from 'react';
import '../../styles/HeroSection.css'
import gsap, {Power1} from 'gsap'

export default function HeroSection() {
    let logo_1 = useRef(null)
    let subTitle = useRef(null)

    useEffect(() => {
        gsap.fromTo(logo_1, {
                opacity: 0,
                duration: 3,
                y: -200,
                ease: Power1.easeInOut
            },
            {
                y: 0,
                opacity: 1
            });
        gsap.fromTo(
            subTitle,
            {
                duration: 3,
                opacity: 0,
                ease: Power1.easeInOut,
                x: -300,
            },
            {
                x: 0,
                opacity: 1
            }
        );


    })
    return (

        <div className="text-[#e7e7e7] uppercase">
            <div className="relative h-screen w-full heroBackground bg-cover">

                <div>
                    <div ref={(el) => (logo_1 = el)}
                         className="absolute flex justify-center items-center h-screen w-full">
                        <h1 className="flex flex-col md:flex-row font-semibold font-title  text-[#e7e7e7] text-[6vmax] md:text-[6.05vmax] mix-blend-difference leading-none">
                            <span>cédric</span>
                            <span className="md:ml-10">le sergent</span>

                        </h1>
                    </div>
                </div>
                <div ref={(el) => (subTitle = el)}
                     className=" capitalize absolute flex justify-center items-center h-screen w-full top-20">
                    <h2 className="font-title  text-[#e7e7e7] text-[4vmax] md:text-[3.05vmax] mix-blend-difference leading-none">
                        développeur Fullstack
                    </h2>
                </div>

            </div>
        </div>

    )

}

