import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";

type openedProps = {
  select: boolean;
};

const Block = styled.div`
  max-width: 280px;
  width: 100%;
  margin-top: 50px;
`;
const Img = styled.img`
  width: 260px;
  height: 260px;
`;
const Name = styled.h6`
  color: #000;
  font-size: 18px;
  margin-bottom: 1em;
  text-align: center;
  font-weight: 900;
`;
const Info = styled.div`
  width: 100%;
  height: 80px;
  background: #f3f3f3;
  border-radius: 10px;
  gap: 1em;
  padding: 5px;
`;
const Types = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5em;
  margin-bottom: 5px;
`;
const Type = styled.button`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border: none;
  line-height: 33px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #2c2c2c;
  cursor: pointer;
`;
const Sizes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5em;
`;
const Size = styled.button`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border: none;
  line-height: 33px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #2c2c2c;
  cursor: pointer;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;
const Added = styled.button<openedProps>`
  max-width: 155px;
  width: 100%;
  line-height: 45px;
  background: ${({ select }) => (select ? "none" : "#fe5f1e")};
  border: 1px solid #fe5f1e;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ select }) => (select ? "#fe5f1e" : "#fff")};
  gap: 0.5em;
  cursor: pointer;
  transition: 0.5s color, 0.5s background;
`;

const Product = ({ data }: any) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    dispatch(addToCart(data));
    setSelect((state) => !state);
  };
  return (
    <Block>
      <Img src={data.image} alt={data.name} />
      <Name>{data.name}</Name>
      <Info>
        <Types>
          <Type>{data.types[0]}</Type>
          <Type>{data.types[1]}</Type>
        </Types>
        <Sizes>
          <Size>{data.sizes[0]} см</Size>
          <Size>{data.sizes[1]} см</Size>
          <Size>{data.sizes[2]} см</Size>
        </Sizes>
      </Info>
      <Item>
        <Price>от {data.price}</Price>
        <Added select={select} onClick={handleSelect}>
          <FaPlus /> Добавить
        </Added>
      </Item>
    </Block>
  );
};

export default Product;
