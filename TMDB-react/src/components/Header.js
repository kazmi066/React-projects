import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MovieContext } from "../context";

function Header() {
  const { MovieFinder, getMovies } = useContext(MovieContext);
  const [searchText, setSearchText] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    MovieFinder(searchText);
    setSearchText("");
  };

  const HomeFunction = () => {
    getMovies();
  };

  return (
    <Wrapper>
      <div className="Header-container">
        <h1 onClick={HomeFunction} className="logo">
          Movies-App-React
        </h1>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .logo {
    cursor: pointer;
  }
  .Header-container {
    padding: 1rem 2rem;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    border: none;
    padding: 0.7rem;
    font-size: 1rem;
    outline: none;
    background-color: rgb(0, 102, 105);
    color: white;
  }

  input::placeholder {
    color: grey;
  }

  button {
    padding: 0.66rem;
    color: black;
  }
`;

export default Header;
