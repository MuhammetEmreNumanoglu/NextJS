import React from "react";

const Input = () => {
  return (
    <div className="w-full">
      <label htmlFor="" className="relative block cursor-text">
        <input type="text" className="h-14 w-full border border-primary outline-none px-4 peer" required />
        <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs transition-all peer-valid:h-7 peer-valid:text-xs peer-valid:pb-2" >Email</span>
      </label>
    </div>
  );
};

export default Input;
