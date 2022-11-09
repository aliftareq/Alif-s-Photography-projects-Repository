import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
    const navigate = useNavigate()
    //data loading
    const review = useLoaderData()
    const { _id, ServiceId, ServiceName, ReviewText } = review

    //handlers
    const handleReviewUpdate = (e) => {
        e.preventDefault()
        const newReviewText = e.target.review.value
        console.log(ReviewText);
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newReviewText: newReviewText })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Your Review has been Updated')
                    navigate('/my-reviews')
                }
            })
    }
    return (
        <section className="p-6 mx-10 my-5 bg-gray-800 text-gray-50 rounded-md">
            <form onSubmit={handleReviewUpdate} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Update Review</p>
                        <p className="text-xs">Edit the comment Box</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="serviceId" className="text-sm">Service Id</label>
                            <input id="serviceId" type="text" defaultValue={ServiceId} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" readOnly />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="serviceName" className="text-sm">Service Name</label>
                            <input id="serviceName" type="text" defaultValue={ServiceName} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" readOnly />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="Review" className="text-sm">Review</label>
                            <textarea id="Review" name='review' defaultValue={ReviewText} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"></textarea>
                        </div>
                        <div className="col-span-full">
                            <div className="flex items-center space-x-2">
                                <button type="submit" className="px-4 py-2 border rounded-md border-gray-100">Update</button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateReview;