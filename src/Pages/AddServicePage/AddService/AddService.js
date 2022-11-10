import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';

const AddService = () => {
    //setting title
    useTitle('Add Service')
    //states
    const [error, setError] = useState('')
    //handlers
    const handleAddService = (e) => {
        e.preventDefault()

        //taking value from >> form
        const form = e.target
        const ServiceOwnerName = form.ownerName.value
        const ServiceOwnerEmail = form.email.value
        const name = form.serviceName.value
        const img = form.serviceImage.value
        const descriptin = form.description.value
        const ratings = parseInt(form.ratings.value)
        const price = parseInt(form.price.value)

        //validation
        if (!(img.includes('https://'))) {
            setError('Your image URl have to be a link.')
            return;
        }
        else if (ratings < 1 || ratings > 5) {
            setError('Ratings range should be 1-5')
            return;
        }
        else if (isNaN(price)) {
            setError('Price Amount Should be a number')
            return
        }
        else {
            setError('')
        }

        const Service = {
            ServiceOwnerName,
            ServiceOwnerEmail,
            name,
            img,
            descriptin,
            ratings,
            price,
        }
        console.log(Service);
        //sending data to database.
        fetch('https://alif-photography-serverside.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Your Service added successfully')
                    form.reset()
                }
                else {
                    toast.error('something went wrong')
                }
            })
    }
    return (
        <section className="p-6 mx-10 my-5 bg-gray-800 text-gray-50 rounded-md">
            <div className="mx-auto flex flex-col items-center px-4 py-8 text-center md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-2xl lg:text-4xl font-bold leading-none sm:text-5xl">
                    <span className="text-violet-400 underline">Add A Convenient Service</span>
                </h1>
            </div>
            <form onSubmit={handleAddService} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Service adding Form</p>
                        <p className="text-xs">Please Fill this Form Carefully , don't rush. Information give by you have to be relevent and truthful for further verification. <br />
                            <span className='text-sky-500 font-semibold'>Thanks For Joining Us.</span>
                        </p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="ServiceOwnerName" className="text-sm">Service Owner Name</label>
                            <input id="ServiceOwnerName" name='ownerName' type="text" placeholder="Example : Masud Alam" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" name='email' placeholder="Example : masud@gmail.com" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="ServiceName" className="text-sm">Service Name</label>
                            <input id="ServiceName" type="text" name='serviceName' placeholder="Example : Wedding photography" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="ServiceImage" className="text-sm">Service Image</label>
                            <input id="ServiceImage" type="text" name='serviceImage' placeholder="Photo URL of the image" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">Description</label>
                            <textarea id="description" name='description' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="Ratings" className="text-sm">Ratings (Ratings Should be a number between 1-5)</label>
                            <input id="Ratings" type="number" name='ratings' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Price (Price Should be a Number greater than 0)</label>
                            <input id="state" type="text" name='price' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" required />
                        </div>
                        <div className="col-span-full">
                            <p className='text-lg text-red-500'>{error}</p>
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center space-x-2">
                                <button type="submit" className="px-4 py-2 border rounded-md border-gray-100">Add To Service</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddService;