import React from "react";
import TitleSection from "./TitleSection"
import code from '../../images/expertise/dev-code.svg'
import ranking from '../../images/expertise/ranking.svg'
import website from '../../images/expertise/globe.svg'
import ExpertiseCard from "./ExpertiseCard";

export default function ExpertiseSection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 md:py-24 py-12 mx-auto">
                <TitleSection
                    bigTitle="Expertises"
                    smallTitle="expertises"
                    detail="services"
                    description="Besoin d'un Développeur Web pour votre projet ?"
                />
                <div className="flex flex-wrap -m-4 mt-3">

                    <ExpertiseCard
                        image={website}
                        altDescription="logo website"
                        title="Création de site Web"
                        subtitle="Vitrine & Commerce électronique"
                        content="Je crée pour vous un site entièrement personnalisé, à votre image et répondant à vos besoins. Que vous souhaitiez refaire votre site ou créer un site de A à Z, je suis là pour vous accompagner et vous aider à atteindre vos objectifs."
                        button="Expliquez-moi votre projet"
                        path="#contact"
                    />
                    <ExpertiseCard
                        image={code}
                        altDescription="logo shield"
                        title="Développement"
                        subtitle="Web & Application"
                        content="Toutes les applications que je crée sont développées avec Symfony, ce qui offre une personnalisation totale de vos pages et une grande liberté d'action. Je conçois, pour vous,  des sites qui s'adaptent à votre utilisation."
                        button="C'est parti !"
                        path="#contact"
                    />
                    <ExpertiseCard
                        image={ranking}
                        altDescription="logo database"
                        title="Stratégie numérique"
                        subtitle="Commercialisation & Communication"
                        content="Je vous accompagne dans l'élaboration de votre stratégie digitale. Optimisation SEO, campagne SEA, display, réseaux sociaux, Newsletter, je vous conseille et mets en place les outils adaptés propices à la génération de trafic."
                        button="Détaillez vos besoins"
                        path="#contact"
                    />
                </div>
            </div>
        </section>

    )

}
