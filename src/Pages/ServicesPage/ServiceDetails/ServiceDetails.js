import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import CustomerReview from '../../Shared/CustomerReview/CustomerReview';
import SingleReview from '../../Shared/SingleReview/SingleReview';
import ReviewForm from '../../Shared/ReviewForm/ReviewForm';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, img, name, descriptin, price, ratings } = service
    return (
        <div className='mx-10 my-5'>
            {/* service description */}
            <div className="mb-5 rounded-md  group hover:no-underline focus:no-underline text-white bg-gray-900">
                <div className="mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        <span className="text-violet-400 underline">Package Details</span>
                    </h1>
                </div>
                <img role="presentation" className="object-cover w-3/4 h-72 lg:w-2/4 mx-auto rounded  bg-gray-500" src={img} alt='img' />
                <div className="p-6 lg:px-40 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {name}
                    </h3>
                    <span className="text-lg text-gray-400">Price : {price} BDT</span> <br />
                    <span className="flex items-center text-xs text-gray-400">
                        Ratings : {[...Array(ratings).keys()].map(num => <AiFillStar key={num} className='text-yellow-400' />)}
                    </span>
                    <p>
                        {descriptin}
                    </p>
                    <div>
                        <p className='text-lg font-bold'>What Includes in this Package:</p>
                        <ul className='list-disc pl-10'>
                            <li>Photographer: Chief Photographer (Camera Type: Canon 5D Mark III with Soft box & Others Instruments)</li>
                            <li>Numbers of Photos: Unlimited Shoot.</li>
                            <li>Time duration: Single event 4.5 hours maximum</li>
                            <li>Number of Print Photos: 100 Copies 4R Size & 01 Copy 12L Size Photos with Special Edit.</li>
                            <li>For outside of Dhaka Travel Cost will be added & Client can bear Accommodation Cost.</li>
                            <li>For Extra Time you will be charged 1500 (Per Hour).</li>
                        </ul>
                    </div>
                    <button className='btn'>Book Now</button>
                </div>
            </div>
            {/* service reviews */}
            <div className='bg-gray-800 py-10'>
                <div>
                    <CustomerReview></CustomerReview>
                </div>
                <div>
                    <SingleReview></SingleReview>
                    <SingleReview></SingleReview>
                    <SingleReview></SingleReview>
                </div>
                <div>
                    <ReviewForm></ReviewForm>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;