import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MySingleReview = ({ review, refresh, setRefresh }) => {
    const { _id, ServiceId, ServiceName, ReviewText } = review
    //handlers
    const handleDeleteReview = () => {
        const Proceed = window.confirm('Are you sure about to delete this Review?')
        if (Proceed) {
            fetch(`http://localhost:5000/review/${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('User-Token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.warn('This Review has been deleted')
                        setRefresh(!refresh)
                    }
                })

        }
    }
    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
            <td className="p-3">
                <p>{ServiceId}</p>
            </td>
            <td className="p-3">
                <p>{ServiceName}</p>
            </td>
            <td className="p-3">
                <p>{ReviewText}</p>
            </td>
            <td className="p-3">
                <Link to={`/updateReview/${_id}`}><button className='btn'>edit review</button></Link>
            </td>
            <td className="p-3">
                <button onClick={handleDeleteReview} className='btn'>Delete</button>
            </td>
        </tr>
    );
};

export default MySingleReview;