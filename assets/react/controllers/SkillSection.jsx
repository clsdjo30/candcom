import React, {useRef} from "react";
import htmlCss from '../../images/skill_logos/html_css.jpg'
import mysql from '../../images/skill_logos/MySQL_textlogo.svg.png'
import bootstrap from '../../images/skill_logos/Bootstrap_logo.svg.png'
import php from '../../images/skill_logos/PHP-logo.svg.png'
import symfony from '../../images/skill_logos/Symfony_logo.svg.png'
import javascript from '../../images/skill_logos/JavaScript_logo.png'
import tailwind from '../../images/skill_logos/Tailwind_CSS_Logo.svg.png'
import sylius from '../../images/skill_logos/Sylius.png'
import TitleSection from "./TitleSection";
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export default function () {


    let skill_1 = useRef(null)
    let skill_2 = useRef(null)
    let skill_3 = useRef(null)
    let skill_4 = useRef(null)
    let skill_5 = useRef(null)
    let skill_6 = useRef(null)
    let skill_7 = useRef(null)
    let skill_8 = useRef(null)



    return (
        <div className="container mx-auto px-5 md:px-16 py-16">
            <TitleSection
                bigTitle="technos"
                smallTitle="mes technos"
                detail="skills"
                description="Au fil des années je découvre d'avantage de technologies et c’est ce qui fait que j’aime cet univers en perpétuel mouvement. Il y a toujours de nouvelles choses à apprendre ! Je mets ici une partie des
                    outils à ma disposition, évidemment la liste est non exhaustive et évoluera par la suite."
            />
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center"
                    ref={(el) => (skill_1 = el)}
                >
                    <img src={php} alt="Logo de Php" width={50} height={50}/>
                    <span className="text-normal text-accent font-title font-semibold pt-2">PHP 7 & 8</span>
                </div>
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center"
                    ref={(el) => (skill_2 = el)}
                >
                    <img src={symfony} alt="Logo de Symfony" width={50} height={50}/>
                    <span className="text-normal text-accent font-title font-extrabold pt-2">Symfony 5 & 6 </span>
                </div>
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center"
                    ref={(el) => (skill_3 = el)}
                >
                    <img src={mysql} alt="Logo de Mysql" width={50} height={50}/>
                    <span className="text-normal text-accent font-title font-extrabold pt-2">ORM Doctrine</span>
                </div>
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center"
                    ref={(el) => (skill_4 = el)}
                >
                    <img src={sylius} alt="Logo de Sylius" width={100} height={100}/>
                </div>
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center"
                    ref={(el) => (skill_5 = el)}
                >
                    <img src={htmlCss} alt="Logo de Html et Css" width={100} height={100}/>
                    <span className="text-lg text-accent font-title font-extrabold pt-2">Html5 & Css3</span>

                </div>
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center"
                    ref={(el) => (skill_6 = el)}
                >
                    <img src={javascript} alt="Logo de javascript" width={100} height={100}/>
                    <span className="text-normal text-accent font-title font-extrabold pt-2">EcmaScript 6</span>

                </div>
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16 items-center"
                    ref={(el) => (skill_7 = el)}
                >
                    <img src={tailwind} alt="Logo de tailwindcss" width={50} height={50}/>
                    <span className="text-normal text-accent font-title font-extrabold pt-2">Tailwind Css 3</span>

                </div>
                <div
                    className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex flex-col justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16 items-center"
                    ref={(el) => (skill_8 = el)}
                >
                    <img src={bootstrap} alt="Logo de Bootstrap" width={(50)} height={50}/>
                    <span className="text-lg text-accent font-title font-extrabold pt-2">Bootstrap 5</span>

                </div>
            </div>
        </div>

    )
}