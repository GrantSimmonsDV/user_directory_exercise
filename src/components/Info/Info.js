import React, { useState } from "react";
import Controls from "../Controls/Controls";
import "./Info.css";
import data from "../../data";

export default function Info(props) {
  const { num } = props;

  return (
    <div className="info_container">
      <h1 className="name">
        {data[num].name.first + " " + data[num].name.last}
      </h1>

      {/* {intialData.map(data => (
          <h1 className="name">{data.name.first + " " + data.name.last}</h1>
        ))} */}
      <h2 className="count">
        {num} &#8725; {data.length}
      </h2>
      <div className="info_body">
        <ul className="person_detail">
          <li>
            <b>From:</b>
          </li>
          <li>
            <b>Job Title:</b>
          </li>
          <li>
            <b>Employer:</b>
          </li>
        </ul>
        <ol className="movie_list">
          <b>Favorite Movies:</b>
          <li className="custom_indent"></li>
          <li className="custom_indent"></li>
          <li className="custom_indent"></li>
        </ol>
      </div>
    </div>
  );
}
