import React, { useState } from "react";
import Controls from "../Controls/Controls";
import "./Info.css";
import data from "../../data";

export default function Info(props) {
  const { num } = props;

  // const deleteCard = data.findIndex((item) => item.id );

 

  return (
    <div className="info_container">
      <h2 className="count">
        {num + 1} &#8725; {props.data}
        {console.log(props.data)}
        {/* >= 1 ? num : "1" */}
      </h2>
      <h2 className="name">
        {data[num].name.first + " " + data[num].name.last}
      </h2>

      {/* {intialData.map(data => (
          <h1 className="name">{data.name.first + " " + data.name.last}</h1>
        ))} */}
      <div className="info_body">
        <ul className="person_detail">
          <li>
            <b>From:</b>
            {" " + data[num].city + "," + " " + data[num].country}
          </li>
          <li>
            <b>Job Title:</b>
            {" " + data[num].title}
          </li>
          <li>
            <b>Employer:</b>
            {" " + data[num].employer}
          </li>
        </ul>
        <ol className="movie_list">
          <b>Favorite Movies:</b>
          <li className="custom_indent"> {data[num].favoriteMovies[0]}</li>
          <li className="custom_indent"> {data[num].favoriteMovies[1]}</li>
          <li className="custom_indent"> {data[num].favoriteMovies[2]}</li>
        </ol>
      </div>
    </div>
  );
}
