import React from "react";
import Content from "../Forms/Content.js";

export default function Testimonial(){
    return(
        <section className="relative flex">
        <div className="flex flex-col justify-center w-full px-4 py-8 md:mx-24">
            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            Testimonial
            </h2>
            <div className="grid w-full grid-cols-1 gap-8 2xl:grid-cols-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <Content name="Ishaan Mittal"></Content>
                <Content name="Anonymous"></Content>
                <Content name="Shagun Ghatak"></Content>
            </div>
                {/* <div className="items-center hidden mt-12 md:flex">
                <button
                    title="left arrow"
                    className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                    </svg>
                </button>
                <button
                    title="right arrow"
                    className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </div> */}
        </div>
        </section>
    )
}