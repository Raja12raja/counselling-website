import React from "react";

export default function TabNavItem({ id, title, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={ `rounded shadow-md text-center p-2 my-2 mx-auto`}
        style={{
          color: activeTab===id ? 'white' : 'black',
          background: activeTab===id ? 'rgb(99 102 241)' : 'white',
        }}
      >
        {title}
      </button>
    </div>
  );
}
