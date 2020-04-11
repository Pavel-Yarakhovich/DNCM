import styled, { css } from "styled-components";
import { themes } from "../../../config/themes";
import Bg from "../../../assets/image/bg.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 1rem;
  color: ${themes.regular.white};
  justify-content: center;
  background-size: cover;

  @media (max-width: 600px) {
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

export const Motto = styled.p`
  font-size: 1.2rem;
  color: ${themes.regular.black};
  margin: 10px 0 15px;
  text-align: center;
  width: 300px;

  ${(props) =>
    props.h1 &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
      margin: 1rem;
    `}
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 8px 0;
  box-sizing: border-box;
  padding: 5px 10px;
  border: 1px solid ${themes.regular.gold};
  border-radius: 4px;
  background: ${themes.regular.white};
  color: ${themes.regular.black};
  font-size: 1rem;

  :focus {
    border-color: ${themes.regular.dark_violet};
    color: ${themes.regular.dark_violet};
    letter-spacing: 0.1rem;
    outline: none;
  }

  ::placeholder {
    color: ${themes.regular.gold};
  }
`;

export const TextArea = styled(Input)`
  height: 90px;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;

  @media (min-width: 616px) {
    width: 600px;
  }
`;
