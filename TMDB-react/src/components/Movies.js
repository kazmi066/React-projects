import React, { useContext } from "react";
import { MovieContext } from "../context";
import Movie from "./Movie";
import styled from "styled-components";

export default function Movies() {
  const { movies } = useContext(MovieContext);
  console.log(movies);

  if (movies.length > 0) {
    return (
      <Wrapper>
        <section>
          {movies.map((item) => {
            return <Movie key={item.id} item={item} />;
          })}
        </section>
      </Wrapper>
    );
  } else {
    return <div>loading ...</div>;
  }
}

const Wrapper = styled.section`
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
