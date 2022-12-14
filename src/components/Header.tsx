import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import { useSelector } from "react-redux";
import { getItemCount } from "../redux/cart";

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4em;
`;

const Button = styled.button`
  border: none;
  background: #fe5f1e;
  border-radius: 30px;
  max-width: 150px;
  width: 100%;
  color: #fff;
  font-weight: bold;
  line-height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  text-decoration: none;

  & span {
    display: flex;
    align-items: center;
    &::after {
      content: "";
      width: 2px;
      height: 30px;
      background-color: #ffdf8c;
      display: block;
      margin-left: 10px;
    }
  }
`;

const Header = () => {

  return (
    <Block>
      <Logo />
      <Button as={Link} to="/cart">
        <span> 550 ₽</span>
        <FiShoppingCart /> 3
      </Button>
    </Block>
  );
};

export default Header;
