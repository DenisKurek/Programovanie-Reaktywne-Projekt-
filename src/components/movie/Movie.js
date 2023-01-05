import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import TitleCard from "./TitleCard";

export default function (props) {
  return (
    <Card className="card">
      <Link to="/details">
        <img
          className="card-img-top"
          id="filmPoster"
          src="https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg"
          alt=" plakat"
          loading="lazy"
        />
      </Link>
      <div className="card-body">
        <TitleCard />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">gatunek: Dramat</li>
        <li className="list-group-item">reżyser: Frank Darabont</li>
      </ul>
    </Card>
  );
}
