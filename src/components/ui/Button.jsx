import React from "react";

function Button({ label, onclickHandler }) {
  return (
    <button
      className="bg-slate-50 hover:bg-gray-400 text-gray-400 hover:text-white font-medium bold py-2 px-4 rounded"
      onClick={onclickHandler}
    >
      {label}
    </button>
  );
}

export default Button;
