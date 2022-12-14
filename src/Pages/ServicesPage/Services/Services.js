import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    //setting title
    useTitle('Services')
    // states 
    const [services, setServices] = useState([])

    //loading data 
    useEffect(() => {
        fetch('https://alif-photography-serverside-aliftareq.vercel.app/services', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('User-Token')}`
            }
        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            {
                services
                    ?
                    <section className="bg-gray-800 text-gray-100 rounded-md mx-10 my-5">
                        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                            <div className="mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-3xl">
                                <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                                    <span className="text-violet-400 underline">MY SERVICES </span>
                                </h1>
                                <p className="px-8 mt-8 mb-6 text-lg">
                                    Explore <span className='text-teal-400'>Premium Quality</span> Photoshoot and videography for All types of events.
                                </p>
                            </div>
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {
                                    services.map(service =>
                                        <SingleService
                                            key={service._id}
                                            service={service}>
                                        </SingleService>)
                                }
                            </div>
                        </div>
                    </section>
                    :
                    <LoadingSpinner></LoadingSpinner>
            }
        </div>
    );
};

export default Services;