import React from 'react'
import TitleSection from "./TitleSection";
import recycats from '../../images/portfolio_images/desktop-view.png'
import dicegame from '../../images/portfolio_images/dice-game.png'
import fitnessClub from "../../images/portfolio_images/lions_fitness.png"
import trtConsulting from "../../images/portfolio_images/trt_consulting.png"
import PortfolioCard from "./PortfolioCard";

export default function PortfolioSection() {


    const catsImage = recycats
    const diceGame = dicegame
    const fitnessImage = fitnessClub
    const trtImage = trtConsulting
    return (
        <div className="container mx-auto px-5 md:px-16 py-16">

            <TitleSection
                bigTitle="Projets"
                smallTitle="Mes Projets"
                detail="Portfolio"
                description="projets réaliser lors de ma formation"
            />
            <div className="grid grid-cols-1 gap-12 mt-8 lg:grid-cols-2">
                <PortfolioCard
                    image={fitnessImage}
                    title="Lions Fitness Club"
                    lien="https://dev-lions-club.candcom.com/"
                    description="Interface d'administration des droits des franchisés d'une enseigne de salles de sport "
                    date="septembre 2022"
                />
                <PortfolioCard
                    image={trtImage}
                    title="Trt Consulting"
                    description=""
                    date="aout 2022"
                />
                <PortfolioCard
                    lien="https://studi-gdw-full-stack-eval-1-html-tailwind.vercel.app/"
                    altDescription="Page d'accueil du site sterilyzed"
                    image={catsImage}
                    title="Sterilyzed"
                    description="Site pour une association de chat libre, réalisé en HTML avec le framework TailwindCss"
                    date="janvier 2022"
                />
                <PortfolioCard
                    image={diceGame}
                    lien="https://studi-gdw-eval-2-boost-a-web-site-with-javascript.vercel.app/"
                    title="Studi Dice Game"
                    description="Développement d'un jeu de dés à 2 joueur en Javascript avec la librairie d'animation GreenSock et le framework TailwindCss"
                    date="juillet 2022"
                />

            </div>

        </div>
    )

}
