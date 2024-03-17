import React from 'react'

const test1 = () => {
  return (
    <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
        <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div class="p-4 md:p-12 text-center lg:text-left">
              <div
                class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              ></div>

              <h1 class="text-3xl font-bold pt-8 lg:pt-0">Dr.monika</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                {" "}
                Community Counseling
              </p>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Credentials: Ph.D. in Community Counseling
              </p>

              <p class="pt-8 pb-8 text-sm">
                Dr. monika is a compassionate Community Counselor with
                extensive experience in supporting individuals and communities.
                They provide a safe and non-judgmental space for clients to
                address mental health concerns and work towards positive change.
                With expertise in various counseling approaches, Dr. monika
                empowers clients to gain insights, develop coping skills, and
                achieve emotional well-being.
              </p>
             <a  class=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-10" href='/booking'>Book Now</a>
            </div>
          </div>
          <div class="w-full lg:w-2/5">
            <img
              src="https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="bgd"
            />
          </div>
        </div>
      
    </div>
  )
}

export default test1
