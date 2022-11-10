import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    //setting title
    useTitle('My Reviews')
    //context data 
    const { user } = useContext(AuthContext)
    console.log(user);
    //states
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    //loaded data
    useEffect(() => {
        fetch(`https://alif-photography-serverside-aliftareq.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('User-Token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, refresh])
    return (
        <div className="bg-gray-800 p-10 mx-10 my-5 sm:p-4 text-gray-100 rounded-md">
            <h2 className="mb-4 text-center text-2xl font-semibold leading-tight">
                <span className='text-teal-400'>{user?.displayName}'s</span> given Reviews
            </h2>
            {
                reviews?.length
                    ?
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col className="w-24" />
                            </colgroup>
                            <thead className="dark:bg-gray-700">
                                <tr className="text-left">
                                    <th className="p-3">#Service Id</th>
                                    <th className="p-3">Service Name</th>
                                    <th className="p-3">Review</th>
                                    <th className="p-3">Action-1</th>
                                    <th className="p-3">Action-2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review =>
                                        <MySingleReview
                                            key={review._id}
                                            review={review}
                                            refresh={refresh}
                                            setRefresh={setRefresh}
                                        ></MySingleReview>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className='p-10'>
                        <h1 className='text-3xl lg:text-5xl text-center text-yellow-400'>No review's were added yet</h1>
                    </div>

            }


        </div>
    );
};

export default MyReviews;