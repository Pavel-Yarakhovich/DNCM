import styled from "styled-components";
import { themes } from "../../../../config/themes";
import ImportExportIcon from "@material-ui/icons/ImportExport";

export const Arrows = styled(ImportExportIcon)`
  color: ${themes.regular.white};
  transform: rotate(90deg);
`;

export const Menu = styled.div`
  position: fixed;
  z-index: 110;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  background: rgba(44, 0, 49, 0.7);
  display: flex;
  flex-flow: column;
  justify-content: center;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Toggler = styled.div`
  position: absolute;
  content: "";
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  top: 70px;
  left: -60px;
  border-radius: 50% 0 0 50%;
  background: rgba(44, 0, 49, 0.7);
`;
