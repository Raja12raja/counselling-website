import React from 'react'
import ProfileContent from './profileContent'
const profilePage = () => {
  return (
     <div>
         <h2 className="max-w-lg mb-10 mt-10 text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto text-center">
                Counsellors
         </h2>
         <div className="grid justify-items-center mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-2 text-center">
                    <ProfileContent 
                        img = "https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        name="test1"
                        education="professer"
                        address="iit indore"
                        email="test1@gmail.com"
                        phone="934244244"
                        link="/test1"
                    />
                    <ProfileContent 
                        img = "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        name="test1"
                        education="professer"
                        address="iit indore"
                        email="test1@gmail.com"
                        phone="934244244"
                        link="/test2"
                    />
                    <ProfileContent 
                        img = "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        name="test1"
                        education="professer"
                        address="iit indore"
                        email="test1@gmail.com"
                        phone="934244244"
                        link="/test3"
                    />
                    <ProfileContent 
                        img = "https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        name="test1"
                        education="professer"
                        address="iit indore"
                        email="test1@gmail.com"
                        phone="934244244"
                        link="/test1"
                    />   
                </div>
     </div>
  )
}

export default profilePage

