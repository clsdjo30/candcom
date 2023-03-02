import React from 'react'
import avatar from '../../images/avatar_002.png'



export default function Presentation() {

    return (

        <div className="container mx-auto pt-16" id='next'>
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-8">
                <div className="border-2 border-accent-neutral bg-base-100 md:flex md:items-center">
                    <figure><img src={avatar} alt="Album"/></figure>
                    <div className=" w-full lg-w-2/3 px-8">
                        <h2 className="font-title  text-center text-xl mt-3 md:mt-8">A propos de moi</h2>
                        <p className="text-justify font-text text-lg mt-3">
                            Au cours des 25 dernières années, j'ai accumulé une solide expérience dans le management
                            en tant que chef de cuisine et directeur de restaurant. Récemment reconverti en tant
                            que <strong>développeur backend</strong> et je me sens très excité à l'idée d'affronter
                            de nouveaux challenges.
                        </p>
                        <p className="text-justify font-text  text-lg mt-3">
                            J’ai appris à gérer des environnements complexes et à résoudre des problèmes sous
                            pression. Compétences très utiles pour réussir en tant que développeur backend.
                        </p>
                        <p className="text-justify font-text  text-lg mt-3">
                            Je me suis formé à l'utilisation de nombreux langages de programmation, tels que PHP,
                            JavaScript, HTML/CSS et je suis maintenant capable de créer des applications web et des
                            sites web à partir de zéro.
                        </p>
                        <p className="text-justify font-text text-lg mt-3">
                            Toujours prêt à apprendre et a developper mes compétences, j’apporterais à vos projets,
                            une vrai valeur ajouté grâce à mon expérience et à ma capacité à travailler de manière
                            efficace.
                        </p>

                        <div className="flex justify-end my-10">
                            <button
                                className="border border-1 border-accent text-neutral py-2 px-12 font-subtitle font-semibold  hover:text-base-100 hover:font-bold hover:bg-accent hover:border-neutral hover:transition hover:duration-500 hover:ease-in hover:rounded hover:delay-150">
                                <a href={`/cv/Cédric_Le_Sergent_Dev_FullStack_2023_003.pdf`} target={`_blank`}>
                                    Afficher mon CV
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
