import React from "react";
 
export default function TabContent({id, activeTab, children}){
 return (
   activeTab === id ? <div className="TabContent">
     { children }
   </div>
   : null
 );
};
