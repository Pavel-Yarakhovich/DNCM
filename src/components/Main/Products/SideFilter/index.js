import React, { useState } from "react";
import Button from "../../../../shared/Button";
import { Transition } from "react-transition-group";
import * as Styled from "./styled";

const defaultMenu = {
  right: 0,
  transition: "all 250ms ease",
};
const transitionMenu = {
  entering: { right: 0 },
  entered: { right: -200 },
  exiting: { right: 0 },
  exited: { right: 0 },
};

export default ({ clicked, selected }) => {
  const [isShown, setShown] = useState(false);
  const toggleMenu = () => setShown(!isShown);
  return (
    <Transition in={isShown} timeout={250}>
      {(state) => (
        <Styled.Menu
          style={{
            ...defaultMenu,
            ...transitionMenu[state]
          }}
        >
          <Button
            type="side-select"
            name="boy"
            clicked={clicked}
            isActive={selected === "boy"}
          >
            Мальчикам
          </Button>
          <Button
            type="side-select"
            name="girl"
            clicked={clicked}
            isActive={selected === "girl"}
          >
            Девочкам
          </Button>
          <Button
            type="side-select"
            name="shoes"
            clicked={clicked}
            isActive={selected === "shoes"}
          >
            Обувь
          </Button>
          <Button
            type="side-select"
            name="other"
            clicked={clicked}
            isActive={selected === "other"}
          >
            Разное
          </Button>
          <Styled.Toggler onClick={toggleMenu}>
            <Styled.Arrows fontSize="large" />
          </Styled.Toggler>
        </Styled.Menu>
      )}
    </Transition>
  );
};
