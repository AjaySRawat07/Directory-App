import React from "react";

const Button = ({ title, handleClick, className, disabled = false }) => {
  return (
    <button
      className={`px-3 py-2 bg-blue-600 rounded-md text-white font-medium text-lg ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
