import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-800 text-gray-100 mx-10 my-5 rounded-md">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl text-center font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-center  text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;