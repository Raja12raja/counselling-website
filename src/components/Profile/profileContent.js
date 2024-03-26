import React from 'react';
import { Link } from 'react-router-dom';

const ProfileContent = (props) => {
  return (
    <div>
      <div className="flex items-center h-max my-10 w-full justify-center">
        <div className="w-120">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img className="w-32 h-32 rounded-full mx-auto" src={props.img} alt={props.name} />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{props.name}</h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{props.education}</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2">{props.address}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2">{props.phone}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{props.email}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <Link className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" to={`/counselor/${props.id}`}>View Profile</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
