import React from "react";
import '../../App.css'

export default function Content(props){
    return(
        <div className="w-full p-8 bg-indigo-600 rounded-md shadow-lg dark:bg-gray-800">
            <p className="leading-loose text-white dark:text-gray-400">
            “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea
            tempora dolores qui eius pariatur odit ad voluptas iste, cum
            accusantium beatae tempore quasi nesciunt distinctio. ”
            </p>
            <div className="mt-6 -mx-2">
                <div className="mx-2 text-right">
                    <h1 className="font-semibold text-[#79DAE8] dark:text-white">
                    {props.name}
                    </h1>
                </div>
            </div>
        </div>
    )
}