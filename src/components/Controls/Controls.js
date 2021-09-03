import React, { useState } from "react";
import Info from "../Info/Info";

import "./Controls.css";

export default function Controls() {
  const [num, setNum] = useState(0);

//   decCount = () => setNum(num - 1);

  return (
    <div className="controls_main">
      <Info num={num} />

      <div className="control_bar">
        <button className="move_buttons">
          &#8592; Previous
        </button>
        <p>{num}</p>
        console.log(num)
        <div className="buttons_group">
          <button className="change_buttons">Edit</button>
          <button className="change_buttons">Delete</button>
          <button className="change_buttons">New</button>
        </div>
        <button className="move_buttons">Next &#8594;</button>
      </div>
    </div>
  );
}
