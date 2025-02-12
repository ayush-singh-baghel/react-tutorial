import React from 'react'
import msd from "../assets/msd-img.webp"

export default function Grid() {
    return (
        <div className="h-screen grid grid-rows-[auto_1fr]">
            <h1 className="p-4 text-center text-2xl font-semibold text-gray-300">Set the image in center using Grid</h1>
            <div className="grid place-items-center">
                <img src={msd} className="object-contain rounded-xl" alt="Centered Image" />
            </div>
        </div>
    )
}
