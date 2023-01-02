import React from "react";

function Buttons(props) {
  return (
    <div className="bg-emerald-600 font-[poppins] text-white py-2 px-6 rounded md:m-4 hover:bg-emerald-400 duration-500">
      {props.children}
    </div>
  );
}

export default Buttons;
