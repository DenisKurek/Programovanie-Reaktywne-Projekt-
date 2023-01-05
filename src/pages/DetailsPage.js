import React from "react";
import TitleCard from "../components/movie/TitleCard";
import Card from "../components/UI/Card";
import classes from "../components/movie/MovieList.module.css";
export default function DetailsPage(props) {
  return (
    <Card className={` ${classes.details} ${classes.centered}`}>
      <img
        id="filmPoster"
        src="https://fwcdn.pl/fpo/08/62/862/7517878.6.jpg"
        alt=" plakat"
        loading="lazy"
      />
      <div>
        <TitleCard />
        <p>gatunek: Dramat</p>
        <p>reżyser: Frank Darabont</p>
        <p>
          opis: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          lacinia, ante nec consectetur vulputate, mauris diam congue justo,
          sagittis condimentum metus mauris eget leo. Ut ut arcu vitae metus
          imperdiet tempor. Nam bibendum nibh eu ex ullamcorper fringilla. Ut
          fermentum, erat in sodales porttitor, mi quam malesuada enim, vitae
          malesuada lacus risus sed orci. Pellentesque vitae gravida massa.
          Morbi ultrices auctor turpis id semper. Cras lacinia odio quis
          tincidunt facilisis.
        </p>
      </div>
    </Card>
  );
}
