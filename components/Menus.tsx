import React, { useState } from "react";

const Menus = () => {
  const [toggle, setToggle] = useState(false);
  const hadleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button
        onClick={hadleClick}
        className="btn btn-danger mb-5 bg-orange-400">
        Toggle State
      </button>

      <ul className={`bg-blue-500 ${toggle ? "bg-orange-400" : "bg-red-400"}`}>
        <li className="list-group-item">Item 1</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li>
      </ul>
    </>
  );
};

export default Menus;
