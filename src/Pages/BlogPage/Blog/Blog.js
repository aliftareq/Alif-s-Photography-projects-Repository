import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
    //setting title
    useTitle('Blog')
    return (
        <section className="bg-gray-800 text-gray-100 mx-10 my-5 rounded-md">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl mb-5 text-center font-semibold sm:text-4xl">Some Important Question about Database.</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Difference between SQL and NoSQL</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            There are a lot of databases used today in the industry. Some are SQL databases, some are NoSQL databases. The conventional database is SQL database system that uses tabular relational model to represent data and their relationship. The NoSQL database is the newer one database that provides a mechanism for storage and retrieval of data other than tabular relations model used in relational databases.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                            What is JWT, and how does it work?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                            What is the difference between javascript and NodeJS?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                            How does NodeJS handle multiple requests at the same time?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;