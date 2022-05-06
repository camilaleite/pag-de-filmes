import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./MovieRow";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 1.5vw;
    padding:0;
    font-family:'IBM Plex Mono', monospace;
    background-color:black;
    color: white;
  }`;

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
        <GlobalStyle />
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
