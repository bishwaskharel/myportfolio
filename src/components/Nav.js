import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">Pirityy</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
  position: sticky;
  top: 0;
  z-index: 10;
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
