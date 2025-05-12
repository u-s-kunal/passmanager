import React from "react";

function Navbar() {
  return (
    <nav
      className=" bg-purple-400 w-full flex gap-3 justify-between text-center absolute top-0 z-10
 "
    >
      <div className="logo font-bold text-white my-5 px-3">
        &lt; PassManager/&gt;
      </div>
      <ul className="gap-3 m-3">
        <li>
          <button className="bg-green-700 px-5 py-2 text-white rounded-full border-2 ">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
