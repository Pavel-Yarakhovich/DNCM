import styled from "styled-components";
import { themes } from "../../config/themes";
import CallIcon from '@material-ui/icons/Call';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background: ${themes.regular.violet};
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid ${themes.regular.gold};
`;

export const Logo = styled.img`
  position: absolute;
  z-index: 10;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${themes.regular.violet};
  border: 4px solid ${themes.regular.white}; 
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