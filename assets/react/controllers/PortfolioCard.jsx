import React from 'react'


function PortfolioCard({image, title, altDescription, description, date, lien}) {
    return (

        <div>
            <img className="relative z-10 object-cover w-full  h-96 rounded-lg shadow-xl"
                 src={image}
                 alt={altDescription}
            />

            <div
                className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-base-100 border border-neutral">
                <a href={lien}
                   target="blank"
                   className="font-semibold text-lg text-neutral-900 font-subtitle hover:underline md:text-2xl">
                    {title}
                </a>

                <p className="mt-3 text-sm font-text text-neutral-200 md:text-lg">
                    {description}
                </p>

                <p className="mt-3 text-sm text-accent">{date}</p>
            </div>
        </div>
    )
}

export default PortfolioCard;