import React from 'react'

function TitleSection({bigTitle, detail, smallTitle, description}) {

    return (
        <>

            <div
                className="w-full mx-auto flex flex-col justify-start md:flex-row md:justify-center md:mb-10 md:-mt-10 -ml-3">

                <h2 className="text-5xl md:text-8xl font-title font-black text-primary uppercase mx-5">
                    {bigTitle}
                </h2>
                <div className="flex md:flex-col  md:justify-end mx-5">
                    <span
                        className="text-3xl font-subtitle font-extralight uppercase -mb-3 self-center md:self-start">
                        {detail}
                    </span>
                    <h3 className="text-5xl font-subtitle font-bold uppercase hidden md:flex">
                        {smallTitle}
                    </h3>
                </div>
            </div>
            <div className="flex-column justify-center items-center mt-5">
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-subtitle xl:w-10/12 xl:mx-auto pb-2">
                    {description}
                </p>
            </div>
        </>
    )
}
export default TitleSection;
