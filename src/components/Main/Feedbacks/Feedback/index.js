import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
`;

const Photo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ccc;
`;

const Customer = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const Comment = styled.p`
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 1.4;
  color: #444;
  text-align: center;
  font-style: italic;
`;

export default ({ name, comment }) => (
  <Container>
    <Photo />
    <Customer>{name}</Customer>
    <Comment>{comment}</Comment>
  </Container>
)