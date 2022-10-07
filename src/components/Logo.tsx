import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../static/Images/logo.png";

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1em;
`;

const Img = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
`;

const Items = styled.div`

`;

const ItemsTitle = styled.p`
  font-weight: 800;
  font-size: 24px;
  text-transform: uppercase;
  color: #000;
  margin: 0;
`;
const ItemsDesc = styled.p`
  font-weight: 400;
  margin: 0;
  font-size: 16px;
  color: #7b7b7b;
`;

const Logo = () => {
  return (
    <LogoLink as={Link} to="/">
      <Img src={logo} alt="React Logo" />
      <Items>
        <ItemsTitle>react pizza</ItemsTitle>
        <ItemsDesc>самая вкусная пицца во вселенной</ItemsDesc>
      </Items>
    </LogoLink>
  );
};

export default Logo;
