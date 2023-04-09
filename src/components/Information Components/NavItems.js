import React from "react";

export default function NavItems({ id, title, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
      <button
        onClick={handleClick}
        className={ `rounded shadow-md text-center sm:p-4 py-4
          ${activeTab === id
            ? "active text-white bg-indigo-600 "
            : "text-black bg-white hover:text-indigo-600"}`
        }
      >
        {title}
      </button>
  );
}
