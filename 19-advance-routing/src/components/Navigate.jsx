import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-600 p-4 mt-2 font-semibold text-sm text-center space-x-3">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-indigo-700 px-8 py-2 rounded cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-indigo-700 px-8 py-2 rounded cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navigate;
