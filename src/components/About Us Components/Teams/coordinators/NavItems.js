import React from "react";

export default function TabNavItem({ id, title, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={ `rounded shadow-md text-center p-2 my-2 mx-auto
          ${activeTab === id
            ? "active text-white bg-indigo-600 "
            : "text-black bg-white hover:text-indigo-600"}`
        }
      >
        {title}
      </button>
    </div>
  );
}
