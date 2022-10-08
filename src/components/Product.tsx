import React from "react";
import styled from "styled-components";
import { FaPlus } from 'react-icons/fa'

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
const Added = styled.button`
  max-width: 155px;
  width: 100%;
  line-height: 45px;
  background: none;
  border: 1px solid #fe5f1e;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eb5a1e;
  gap: 0.5em;

  & span{
    font-size: 18px;
    font-weight: bold;
  }
`;


const Product = ({data}) => {  
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
        <Added>
          <FaPlus/> <p>Добавить</p> <span>2</span>
        </Added>
      </Item>
    </Block>
  );
};

export default Product;
