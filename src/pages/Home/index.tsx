import React from "react";

import Header from "../../components/Header";
import NavLinks from "../../components/NavLinks";
import Product from "../../components/Product";
import Container from "../../layout/Container";

const Home = () => {
  return (
    <>
      <Container>
        <Header/>
        <NavLinks />
        <Product/>
      </Container>
    </>
  );
};

export default Home;
