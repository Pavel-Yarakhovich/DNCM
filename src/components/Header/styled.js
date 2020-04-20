import styled from "styled-components";
import { themes } from "../../config/themes";
import CallIcon from "@material-ui/icons/Call";
import InstaLogo from "../../assets/image/insta.png";
import { Link } from "react-router-dom";

export const Header = styled.div`
  width: 100%;
  height: 66px;
  background: ${themes.regular.violet};
  display: flex;
  align-items: center;
  border-bottom: 4px solid ${themes.regular.white};

  @media (max-width: 768px) {
    height: 50px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 600px) {
    width: 575px;
  }
  @media (min-width: 900px) {
    width: 768px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  z-index: 10;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${themes.regular.violet};
  border: 4px solid ${themes.regular.white};

  @media (max-width: 900px) {
    left: 0;
    top: -4px;
    transform: translateY(0);
  }
`;

export const Contact = styled.a`
  color: ${themes.regular.white};
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0 10px;
  text-decoration: none;
`;

export const Call = styled(CallIcon)`
  color: ${themes.regular.white};
`;

export const Insta = styled.a`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${themes.regular.white};
  color: ${themes.regular.white};
`;

export const AdminLink = styled(Link)`

`;
