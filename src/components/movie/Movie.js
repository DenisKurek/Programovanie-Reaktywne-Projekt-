import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  const content =
    props.content.length > 300
      ? props.content.substr(0, 297) + "..."
      : props.content;
  return (
    <div className={`card ${props.className} `}>
      <Link to={`/details/${props.id}`}>
        <img className="card-img-top" src={props.image} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}
