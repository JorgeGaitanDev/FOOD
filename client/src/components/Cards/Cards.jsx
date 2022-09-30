import React from "react";
import { Link } from "react-router-dom";
import "./CardsRecipes.css";
import Loading from "./Loading/Loading";
import Error from "./Error/Error";
const Cards = ({ actualPage, loader }) => {
  let display;
  if (loader) {
    return <Loading />;
  }
  if (typeof actualPage === "object") {
    display = actualPage.map(({ id, name, healthScore, diets, image }, i) => {
      return (
        <div key={`card ${id}-${i}`} className="container">
          <div className="card">
            <div className="img_score">
            <Link to={`/detail/${id}`}>
              <img
                src={image}
                alt="recipes"
                className="image" />
            </Link>
            <div className="score">{healthScore}</div>
            </div>
            <div className="contenido">
              <div className="name">
                <h4>{name}</h4>
              </div>
              <div className="datos">
                <div className="diets">
                  <ul>
                    {diets &&
                      diets.map((e, i) => {
                        return <li key={`list ${i} card ${id}`}>{e}</li>;
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = <Error />;
  }
  return !actualPage.length ? (
    <Loading />
  ) : (
    <div className="fund">{display}</div>
  );
};

export default Cards;