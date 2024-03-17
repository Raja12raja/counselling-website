import React from 'react'

const profileContent = (props) => {
  return (
    <div>
    <div class="flex items-center h-max my-10 w-full justify-center">
    <div class="w-120">
        <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
                <img class="w-32 h-32 rounded-full mx-auto" src={props.img} />
            </div>
            <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{props.name}</h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>{props.education}</p>
                </div>
                <table class="text-xs my-3">
                    <tbody><tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td class="px-2 py-2">{props.address}</td>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                        <td class="px-2 py-2">{props.phone}</td>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td class="px-2 py-2">{props.email}</td>
                    </tr>
                </tbody></table>
    
                <div class="text-center my-3">
                    <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={props.link}>View Profile</a>
                </div>
    
            </div>
        </div>
    </div>
    
    </div>
        </div>
  )
}

export default profileContent
