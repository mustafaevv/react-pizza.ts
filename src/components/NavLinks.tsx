import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import categories from "../routers/categories";

import classes from "./NavLink.module.scss";

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1.1em;
`;

const NavLink = styled.a`
  background: #f9f9f9;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #000;
  padding: 10px 25px;
  transition: 0.5s color, 0.5s background;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const NavLinks = () => {
  const { pathname } = useLocation();

  return (
    <ul className={classes["list"]}>
      {categories.map(({ name, link }) => (
        <li key={name}>
          <Link
            className={`${classes["list__link"]} ${
              pathname === link ? classes["list__link_active"] : ""
            }`}
            to={link}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
