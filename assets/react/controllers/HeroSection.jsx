import React, {useEffect, useRef} from "react";
import "../../styles/HeroSection.css";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function HeroSection() {
    let ref = useRef();

    const onLoad = () => {
        gsap
            .timeline({
                onComplete: function () {
                    console.log("animation terminée");
                },
            })
            .fromTo(
                "#cedric",
                {
                    y: -100,
                    scale: 0.2,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                    rotate: 360,
                    scale: 1
                }
            )
            .fromTo(
                "#subtitle",
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                }
            )
            //Anime le h1
            .to("#letter", {
                margin: "0 2vw",
                delay: 0.4,
                duration: 0.2,
                rotate: 360,
            })
            .to("#letter", {
                margin: "0",
                delay: 0.4,
                duration: 0.2,
            })
            // supprime le 1er sous titre
            .to("#h2-1", {
                x: -ref.current.clientWidth,
            })

            //developpeur PHP
            .fromTo(
                "#h2-2",
                {
                    y: -100,
                    opacity: 0,
                    ease: "back",
                    delay: 0.1,
                    display: "inline-block",
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                }
            )
            //Anime le h1
            .to("#letter", {
                margin: "0 2vw",
                delay: 0.7,
                duration: 0.2,
                rotate: 0,
            })
            .to("#letter", {
                margin: "0",
                delay: 0.4,
                duration: 0.2,
            })
            // supprime le 2em sous titre
            .to("#h2-2", {
                x: ref.current.clientWidth,
                delay: 1,
                display: "none"
            })
            //Anime le h1
            .to("#letter", {
                margin: "0 2vw",
                delay: 0.4,
                duration: 0.2,
                rotate: 360,
            })
            .to("#letter", {
                margin: "0",
                delay: 0.4,
                duration: 0.2,
            })
            // fait apparatitre le dernier titre
            .fromTo(
                "#h2-3",
                {
                    y: -100,
                    opacity: 0,
                    delay: 0.3,
                    display: "inline-block",
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                }
            )


    };

    useEffect(() => {
        onLoad();
    }, []);

    return (

        <div className="h-screen w-full heroBackground bg-cover" ref={ref}>
            <div
                id="titles"
                className="flex flex-col justify-center items-center h-screen w-full"
            >
                <h1 className="uppercase flex flex-col font-semibold font-title  text-[#e7e7e7] text-[6vmax] md:text-[6.05vmax] leading-none">
                    <div className="flex justify-center" id="cedric">
            <span id="letter" className="flex justify-center">
              C
            </span>
                        <span id="letter" className="flex justify-center">
              E
            </span>
                        <span id="letter" className="flex justify-center">
              D
            </span>
                        <span id="letter" className="flex justify-center">
              R
            </span>
                        <span id="letter" className="flex justify-center">
              I
            </span>
                        <span id="letter" className="flex justify-center">
              C
            </span>
                    </div>

                    <div className="flex" id="cedric">
            <span id="letter" className="flex justify-center">
              L
            </span>
                        <span id="letter" className="flex justify-center mr-4">
              E
            </span>
                        <span id="letter" className="flex justify-center">
              S
            </span>
                        <span id="letter" className="flex justify-center">
              E
            </span>
                        <span id="letter" className="flex justify-center">
              R
            </span>
                        <span id="letter" className="flex justify-center">
              G
            </span>
                        <span id="letter" className="flex justify-center">
              E
            </span>
                        <span id="letter" className="flex justify-center">
              N
            </span>
                        <span id="letter" className="flex justify-center">
              T
            </span>
                    </div>
                </h1>
                <h2
                    id="subtitle"
                    className="flex flex-col items-center justify-center capitalize font-semibold font-title  text-[#e7e7e7] text-[4vmax] md:text-[5.05vmax] leading-none mt-5"
                >
          <span id="h2-1" className="relative text-[3vmax] md:text-[4vmax] ml-5">
            Développeur Fullstack
          </span>
                    <span id="h2-2" className="absolute text-[3vmax] md:text-[4vmax] ml-5 hidden">
            Développeur PHP
          </span>
                    <span id="h2-3" className="absolute text-[3vmax] md:text-[4vmax] ml-5 hidden">
            Développeur Symfony
          </span>
                </h2>
            </div>
        </div>


    );
}
