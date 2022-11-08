import React from 'react';

const MyReviews = () => {
    return (
        <div className="bg-gray-800 p-10 mx-10 my-5 sm:p-4 text-gray-100 rounded-md">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Reviews</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Invoice #</th>
                            <th className="p-3">Client</th>
                            <th className="p-3">Issued</th>
                            <th className="p-3">Due</th>
                            <th className="p-3 text-right">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Microsoft Corporation</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$15,792</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Tesla Inc.</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$275</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Coca Cola co.</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$8,950,500</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Nvidia Corporation</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$98,218</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;