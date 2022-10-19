import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import NavLinks from "../../components/NavLinks";
import Product from "../../components/Product";
import Container from "../../layout/Container";

const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
`;

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/pizzas`);
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Header />
        <NavLinks />
        <Cards>
          {data && [...data].map((card, i) => <Product data={card} key={i} />)}
        </Cards>
      </Container>
    </>
  );
};

export default Home;
