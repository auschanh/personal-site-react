import React from "react";
import { useParams } from "react-router-dom";

const CallSignsDetails = () => {
    return (
        <div className="w-screen h-screen bg-slate-200 pb-40 pt-32 dark:bg-dark-navy">
            <div className="sm:px-auto row-span-1 mt-10 px-10 sm:container">
                <h1 className="text-3xl font-bold font-mono underline decoration-rose-600 decoration-4 underline-offset-8 dark:text-white">
                / CallSigns Online Game
                </h1>
                <div className="text-xl mt-10 font-bold dark:text-teal-600 text-teal-300">
                    About
                </div>
            </div>
        </div>
    )
}

export default CallSignsDetails;