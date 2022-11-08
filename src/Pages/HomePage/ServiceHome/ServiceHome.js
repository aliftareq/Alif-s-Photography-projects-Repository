import React from 'react';

const ServiceHome = () => {
    return (
        <section className="bg-gray-800 text-gray-100 rounded-md">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        <span className="text-violet-400 underline">OUR SERVICES </span>
                    </h1>
                    <p className="px-8 mt-8 mb-6 text-lg">
                        Explore <span className='text-teal-400'>Premium Quality</span> Catering services for All types of events.
                    </p>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" alt='img' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs text-gray-400">January 21, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?2" alt='img' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs text-gray-400">January 22, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?3" alt='img' />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                            <span className="text-xs text-gray-400">January 23, 2021</span>
                            <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400">Explore More Services...</button>
                </div>
            </div>
        </section>
    );
};

export default ServiceHome;