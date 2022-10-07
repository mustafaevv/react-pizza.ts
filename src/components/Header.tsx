import React from "react";
import styled from "styled-components";
// import { FiShoppingCart } from 'react-icons/all-files'

import Container from "../layout/Container";
import Logo from "./Logo";

const Block = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Button = styled.button`
  border: none;
  background: #fe5f1e;
  border-radius: 30px;
  max-width: 150px;
  width: 100%;
  font-size: 18px;
  line-height: 50px;
`;

const Header = () => {
  return (
    <Block>
      <Logo/>
      <Button>520 ₽  </Button>
    </Block>
  );
};

export default Header;
