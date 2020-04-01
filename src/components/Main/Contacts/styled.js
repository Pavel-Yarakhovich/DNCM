import styled from "styled-components";
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
  background: url(${Bg}) no-repeat center center;
  background-size: cover;
`;

export const Motto = styled.p`
  font-size: 1.2rem;
  color: ${themes.regular.black};
  margin: 10px 0 15px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 8px 0;
  box-sizing: border-box;
  padding: 5px 10px;
  border: 1px solid ${themes.regular.violet};
  background: ${themes.regular.violet};
  color: ${themes.regular.white};
  box-shadow: 0 0 30px ${themes.regular.white};
  font-size: 1rem;

  :focus {
    border-color: ${themes.regular.gold};
    color: ${themes.regular.black};
    background: ${themes.regular.white};
    box-shadow: 1px 2px 5px ${themes.regular.violet};
  }

  ::placeholder {
    color: ${themes.regular.white};
  }
`;

export const TextArea = styled(Input)`
  height: 90px;
  margin-bottom: 16px;
`;
