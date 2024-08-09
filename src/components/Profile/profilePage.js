import React, { useState, useEffect } from 'react';
import ProfileContent from './profileContent';

export const Profilepage = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6005/api/counselors')
      .then(response => response.json())
      .then(data => {
        setCounselors(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching counselors:', error);
      });
  }, []);

    return (
    <div className="flex flex-col items-center">
      <h2 className="max-w-lg mb-10 mt-10 text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-4xl md:mx-auto text-center">
        Counsellors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg">
        {counselors.map(counselor => (
          <div key={counselor._id}>
            <ProfileContent
              img={counselor.img}
              name={counselor.name}
              education={counselor.education}
              address={counselor.address}
              link={counselor.link}
              email={counselor.email}
              phone={counselor.phone}
              id = {counselor._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
