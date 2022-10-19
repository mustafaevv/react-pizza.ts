import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import NavLinks from "../../components/NavLinks";
import Product from "../../components/Product";
import Container from "../../layout/Container";

const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5em;
`;

const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/pizzas?category=${type}`);
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, [type]);

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

export default Category;
