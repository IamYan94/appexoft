import React, { useEffect, useState } from "react";
import "./WindowWidth.scss";
const WindowWidth = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films");
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="window-container">
      <h1 className="header1">Зоряні війни</h1>
      <ul>
        {films.map(
          ({ episode_id, title, director, release_date, producer }) => {
            return (
              <div key={episode_id}>
                <h1 className="direk">{director}</h1>
                <h2 className="rig">Режисер: {director}</h2>
                <h2 className="date">Дата релізу: {release_date}</h2>
                <h2 className="prod">Продюсери: {producer}</h2>
                <li className="name">{title}</li>
              </div>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default WindowWidth;
