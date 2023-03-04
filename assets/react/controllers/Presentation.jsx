import React from 'react'
import avatar from '../../images/cls_candcom_avatar.png'
import TitleSection from "./TitleSection";


export default function Presentation() {

    return (

        <>
            <section className="w-full xl:w-10/12 container px-5 md:py-24 mx-auto">
            <TitleSection
                bigTitle="a propos"
                smallTitle="about me"
                detail="all"
                description='Le plus grand défi de la programmation est de trouver un équilibre entre la complexité et la simplicité.'
                citation="Rasmus Lerdorf"
            />
                <div className="w-full flex flex-col lg:flex-row justify-center align-center content-center border border-neutral mt-5">

                    <div className="w-full flex flex-col md:self-center lg:w-2/3 md:w-10/12 p-8 order-last">
                        <p className="text-justify font-text text-lg">
                            Récemment reconverti en tant que <strong>développeur backend</strong>,
                            je me sens très excité à l'idée d'affronter de nouveaux challenges.
                        </p>
                        <p className="text-justify font-text  text-lg mt-3">
                            J’ai appris à gérer des environnements complexes et à résoudre des
                            problèmes sous pression. Compétences très utiles pour réussir en tant
                            que développeur backend.
                        </p>
                        <p className="text-justify font-text text-lg my-3">
                            Toujours prêt à apprendre et a développer mes compétences, j’apporterais
                            à vos projet une vrai valeur ajouté grâce à mon expérience et à ma
                            capacité à travailler de manière efficace.
                        </p>
                        <button
                            className="w-full lg:w-1/2 lg:justify-self-end border border-1 border-accent text-neutral py-2 px-12 font-subtitle font-semibold  hover:text-base-100 hover:font-bold hover:bg-accent hover:border-neutral hover:transition hover:duration-500 hover:ease-in hover:rounded hover:delay-150 mt-2">
                            <a href={`/cv/Cédric_Le_Sergent_Dev_FullStack_2023_003.pdf`}
                               target={`_blank`}>
                                Afficher mon CV
                            </a>
                        </button>
                    </div>
                    <img src={avatar} className="self-center mx-5 mt-5 max-w-sm lg:max-w-lg xl:max-w-md md:max-w-md lg:order-last lg:mb-5 rounded-lg shadow-2xl"
                         alt="Cedric Le Sergent - Portrait"/>
                </div>
            </section>
        </>
    )

}

