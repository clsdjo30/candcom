import React, {useEffect} from "react";
import htmlCss from '../../images/skill_logos/html_css.png'
import mysql from '../../images/skill_logos/MySQL_textlogo.svg.png'
import bootstrap from '../../images/skill_logos/Bootstrap_logo.svg.png'
import php from '../../images/skill_logos/PHP-logo.svg.png'
import symfony from '../../images/skill_logos/Symfony_logo.svg.png'
import javascript from '../../images/skill_logos/JavaScript_logo.png'
import tailwind from '../../images/skill_logos/Tailwind_CSS_Logo.svg.png'
import sylius from '../../images/skill_logos/Sylius.png'
import docker from '../../images/skill_logos/docker.png'
import git from '../../images/skill_logos/768px-Git-logo.svg.png'
import react from '../../images/skill_logos/react.png'
import apiPlatform from '../../images/skill_logos/api-platform.png'
import TitleSection from "./TitleSection";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function () {

    const onLoad = () => {
        const tl = gsap.timeline();
            tl.fromTo(
                "#logo_1",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_2",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_3",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_4",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_5",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_6",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_7",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_8",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_9",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_10",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_10",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_11",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                })
            .fromTo(
                "#logo_12",
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.33,
                    delay: 0.7,
                }
            )

        ScrollTrigger.create({
            animation: tl,
            trigger: '#logoContainer',
            start: "top+=300px 45%",
            end: "+=700",
            scrub: true,
            pin: true,
            anticipatePin: 1,
        })

    }


    useEffect(() => {
        onLoad();
    }, []);

    return (
        <>
            <div className="container mx-auto px-5 md:px-16 pt-16" id="logoContainer">
                <TitleSection
                    bigTitle="technos"
                    smallTitle="mes technos"
                    detail="skills"
                    description="Au fil des années je découvre d'avantage de technologies et c’est ce qui fait que j’aime cet univers en perpétuel mouvement. Il y a toujours de nouvelles choses à apprendre ! Je mets ici une partie des
                    outils à ma disposition, évidemment la liste est non exhaustive et évoluera par la suite."
                />
                <div className="xl:pt-8 lg:pt-8 md:pt-16 sm:pt-16 pt-8 px-15 flex flex-wrap"
                >

                    <div id="logo_1"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center"
                    >
                        <img src={php} alt="Logo de Php" width={50} height={50}/>
                        <span className="text-normal text-accent font-title font-semibold pt-2">PHP 7 & 8</span>
                    </div>
                    <div id="logo_2"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center"
                    >
                        <img src={symfony} alt="Logo de Symfony" width={50} height={50}/>
                        <span
                            className="text-normal text-accent font-title font-extrabold pt-2">Symfony 5 & 6 </span>
                    </div>
                    <div id="logo_3"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center"
                    >
                        <img src={mysql} alt="Logo de Mysql" width={50} height={50}/>
                        <span
                            className="text-normal text-accent font-title font-extrabold pt-2">ORM Doctrine</span>
                    </div>
                    <div id="logo_4"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center"
                    >
                        <img src={sylius} alt="Logo de Sylius" width={100} height={100}/>
                    </div>

                    <div id="logo_5"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pt-10 xl:pb-10 pb-16 items-center"
                    >
                        <img src={htmlCss} alt="Logo de Html et Css" width={100} height={100}/>
                        <span className="text-lg text-accent font-title font-extrabold pt-2">Html5 & Css3</span>

                    </div>
                    <div id="logo_6"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pt-10 xl:pb-10 pb-16 items-center"
                    >
                        <img src={javascript} alt="Logo de javascript" width={100}
                             height={100}/>
                        <span
                            className="text-normal text-accent font-title font-extrabold pt-2">EcmaScript 6</span>

                    </div>
                    <div id="logo_7"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16 xl:pb-10 pb-16 items-center"
                    >
                        <img src={tailwind} alt="Logo de tailwindcss" width={50} height={50}/>
                        <span
                            className="text-normal text-accent font-title font-extrabold pt-2">Tailwind Css 3</span>

                    </div>
                    <div id="logo_8"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-b lg:border-b  border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16 xl:pb-10 pb-16 items-center"
                    >
                        <img src={bootstrap} alt="Logo de Bootstrap" width={(50)} height={50}/>
                        <span
                            className="text-lg text-accent font-title font-extrabold pt-2">Bootstrap 5</span>

                    </div>


                    <div id="logo_9"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16 items-center"
                    >
                        <img src={docker} alt="Logo de Docker" width={(50)} height={50}/>
                        <span
                            className="text-lg text-accent font-title font-extrabold pt-2">Docker</span>

                    </div>
                    <div id="logo_10"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16 items-center"
                    >
                        <img src={apiPlatform} alt="Logo de Bootstrap" width={(50)}
                             height={50}/>
                        <span
                            className="text-lg text-accent font-title font-extrabold pt-2">Api Platform</span>

                    </div>
                    <div id="logo_11"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16 items-center"
                    >
                        <img src={git} alt="Logo de Bootstrap" width={(50)} height={50}/>
                        <span
                            className="text-lg text-accent font-title font-extrabold pt-2">Git</span>

                    </div>
                    <div id="logo_12"
                         className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-4/12 flex flex-col justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16 items-center"
                    >
                        <img src={react} alt="Logo de Bootstrap" width={(50)} height={50}/>
                        <span
                            className="text-lg text-accent font-title font-extrabold pt-2">React</span>

                    </div>

                </div>
            </div>
        </>
    )
}
