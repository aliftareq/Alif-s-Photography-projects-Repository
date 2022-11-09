import React from 'react';
import img1 from '../../../Assests/Features/camera-lens.jpg'
import img2 from '../../../Assests/Features/light-setup.jpg'
import img3 from '../../../Assests/Features/photediting.jpg'

const Feature = () => {
    return (
        <section className='bg-gray-800 mt-5 rounded-md text-gray-100'>
            <div className="mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                    <span className="text-violet-400 underline">FEATURES </span>
                </h1>
                <p className="px-8 mt-8 mb-6 text-lg">
                    I <span className='text-teal-400'> really care about</span> your Interest and Passion and know what are you looking for.
                </p>
            </div>
            <div className="p-4 lg:p-8">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={img1} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <span className="text-xs uppercase text-gray-400">Premium</span>
                            <h3 className="text-3xl font-bold">Professional camera and lens kits</h3>
                            <p className="my-6 text-gray-400">Good gadjets add a new levels of charisma in your photo thats why I belive to service you with Best gadjets</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={img2} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <span className="text-xs uppercase text-gray-400">Premium</span>
                            <h3 className="text-3xl font-bold">Professional lighting setup</h3>
                            <p className="my-6 text-gray-400">For a Clear and Smooth Photography Lighting set Up is very Important, to keep your albulm shiny we definitiley ensure lightening.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={img3} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <span className="text-xs uppercase text-gray-400">Premium</span>
                            <h3 className="text-3xl font-bold">Photo editing, color correction and retouching</h3>
                            <p className="my-6 text-gray-400">Editing takes your Photo on Extra level , I want my client looks beyond the beutiful, thats why we ensure editing & retouch in your pic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;