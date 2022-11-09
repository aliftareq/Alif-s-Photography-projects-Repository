import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";

const SingleService = ({ service }) => {
    const { _id, img, name, descriptin, price, ratings } = service
    //console.log(service);
    return (
        <div rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={img} alt='img' />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {name}
                </h3>
                <span className="text-lg text-gray-400">Price : {price} BDT</span> <br />
                <span className="flex items-center text-xs text-gray-400">
                    Ratings : {[...Array(ratings).keys()].map(num => <AiFillStar key={num} className='text-yellow-400' />)}
                </span>
                <p>
                    {descriptin.slice(0, 100)}.....
                    <Link to={`/services/${_id}`}>
                        <button className='btn'>
                            view details <AiOutlineArrowRight />
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SingleService;