import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}