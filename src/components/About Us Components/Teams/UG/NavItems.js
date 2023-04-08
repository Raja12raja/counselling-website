import React from "react";

export default function TabNavItem({ id, title, activeTab, setActiveTab }){
 
 const handleClick = () => {
   setActiveTab(id);
 };

 
return (
   <div >
    <button onClick={handleClick} className={activeTab === id ? "active text-white bg-indigo-600 rounded shadow-md text-center p-2 m-2" : "text-black bg-white rounded shadow-md text-center p-2 m-2 hover:text-indigo-600"}>
        { title }
    </button>
   </div>
 );
};