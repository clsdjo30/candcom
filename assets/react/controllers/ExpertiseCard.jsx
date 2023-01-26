
import React from  'react'

function ExpertiseCard({image, altDescription, title, content, button}) {

    return (
        <div className="p-4 md:w-1/3">
            <div className="flex h-full p-8 flex-col bg-base-100 border border-neutral">
                <div className="flex flex-col items-center mb-3">
                    <div
                        className="w-16 h-16 mb-5 inline-flex items-center justify-center  flex-shrink-0">
                        <img className=""
                             src={image}
                             alt={altDescription}
                        />
                    </div>
                    <h2 className="font-semibold text-lg text-neutral-900 font-title md:text-2xl">
                        {title}
                    </h2>
                </div>
                <div className="flex-grow">
                    <p className="text-sm font-text text-neutral-200 md:text-lg">
                        {content}
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center font-subtitle">
                        {button}
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ExpertiseCard