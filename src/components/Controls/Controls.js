import React, { useState } from "react";
import Info from "../Info/Info";
import data from "../../data";

import "./Controls.css";

export default function Controls() {
  const [dataLength, setDataLength] = useState(0);
  const [num, setNum] = useState(0);

  const decCount = () => {
    if (num >= 1) {
      setNum(num - 1);
    }
  };
  const incCount = () => {
    if (num < data.length - 1) {
      setNum(num + 1);
    }
  };

  const deleteCard = () => {
    if (dataLength === 1) {
    } else {
      data.splice(num, 1);
      setDataLength(data.length);
      decCount();
    }
    console.log("running?");
  };

  return (
    <div className="controls_main">
      <Info num={num} data={data.length} />

      <div className="control_bar">
        <button onClick={decCount} className="move_buttons">
          &#8592; Previous
        </button>
        <div className="buttons_group">
          <button className="change_buttons">Edit</button>
          <button onClick={deleteCard} className="change_buttons">
            Delete
          </button>
          <button className="change_buttons">New</button>
        </div>
        <button onClick={incCount} className="move_buttons">
          Next &#8594;
        </button>
      </div>
    </div>
  );
}
