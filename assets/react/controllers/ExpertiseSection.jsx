import React from "react";
import TitleSection from "./TitleSection"
import shield from '../../images/expertise/shield-check.svg'
import database from '../../images/expertise/database.svg'
import website from '../../images/expertise/globe.svg'
import ExpertiseCard from "./ExpertiseCard";

export default function ExpertiseSection() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <TitleSection
                    bigTitle="Expertises"
                    smallTitle="expertises"
                    detail="services"
                    description="En quoi puis-je vous aider?"
                />
                <div className="flex flex-wrap -m-4">

                    <ExpertiseCard
                        image={website}
                        altDescription="logo website"
                        title="Création d'application Web "
                        content="Création ou refonte de site web vitrine, de site web dynamique ou boutique de e-commerce"
                        button="Contact"
                    />
                    <ExpertiseCard
                        image={shield}
                        altDescription="logo shield"
                        title="Maintenance & Deboggage"
                        content="L’entretien et les mises à jour sont indispensables pour la santé de votre site."
                        button="Contact"
                    />
                    <ExpertiseCard
                        image={database}
                        altDescription="logo database"
                        title="Sous-Traitance"
                        content=" "
                        button="Contact"
                    />
                </div>
            </div>
        </section>

    )

}
