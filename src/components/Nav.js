import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#">Pirityy</a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 1rem 10rem;
  background: #282828;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    padding-left: 10rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export default Nav;
