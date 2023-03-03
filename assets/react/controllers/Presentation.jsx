import React from 'react'
import avatar from '../../images/cls_candcom_avatar.png'
import TitleSection from "./TitleSection";


export default function Presentation() {

    return (


        <section className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 container px-5 py-24 mx-auto">
                <TitleSection
                    bigTitle="a propos"
                    smallTitle="mes technos"
                    detail="skills"
                    description="Au fil des années je découvre d'avantage de technologies et c’est ce qui fait que j’aime cet univers en perpétuel mouvement. Il y a toujours de nouvelles choses à apprendre ! Je mets ici une partie des
                    outils à ma disposition, évidemment la liste est non exhaustive et évoluera par la suite."
                />
                <div className="border border-neutral  md:flex md:items-center">

                    <div className=" w-full lg-w-2/3 p-14">
                        <p className="text-justify font-text text-lg mt-3">
                            Récemment reconverti en tant que <strong>développeur backend</strong>,
                            je me sens très excité à
                            l'idée d'affronter de nouveaux challenges.
                        </p>
                        <p className="text-justify font-text  text-lg mt-3">
                            J’ai appris à gérer des environnements complexes et à résoudre des
                            problèmes sous pression. Compétences très utiles pour réussir en tant
                            que développeur
                            backend.
                        </p>
                        <p className="text-justify font-text text-lg my-3">
                            Toujours prêt à apprendre et a développer mes compétences, j’apporterais
                            à vos projets,une vrai valeur ajouté grâce à mon expérience et à ma
                            capacité à
                            travailler de manière
                            efficace.
                        </p>
                        <button
                            className="border border-1 border-accent text-neutral py-2 px-12 font-subtitle font-semibold  hover:text-base-100 hover:font-bold hover:bg-accent hover:border-neutral hover:transition hover:duration-500 hover:ease-in hover:rounded hover:delay-150">
                            <a href={`/cv/Cédric_Le_Sergent_Dev_FullStack_2023_003.pdf`}
                               target={`_blank`}>
                                Afficher mon CV
                            </a>
                        </button>
                    </div>
                    <img src={avatar} className="max-w-sm rounded-lg shadow-2xl mr-14"
                         alt="Cedric Le Sergent - Portrait"/>
                </div>
        </section>
    )

}

