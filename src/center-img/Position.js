import React from 'react';
import msd from "../assets/msd-img.webp";

export default function Position() {
  return (
    <div className="relative h-screen">
      <h1 className="p-4 text-center text-2xl font-semibold text-gray-300">Set the image in center using Position Property</h1>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src={msd} className="object-contain rounded-xl" alt="Centered Image" />
      </div>
    </div>
  );
}
