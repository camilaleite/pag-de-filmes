import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./MovieRow";

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <>
      <div className="page">
        <section className="listas">
          {movieList.map((movie) => (
            <MovieRow
              key={movie.items.id}
              title={movie.title}
              items={movie.items}
              uri={movie.items.poster_path}
            />
          ))}
        </section>
      </div>
    </>
  );
};
