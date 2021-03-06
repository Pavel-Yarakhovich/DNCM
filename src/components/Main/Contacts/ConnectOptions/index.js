import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import { themes } from "../../../../config/themes";
import Insta from "../../../../assets/image/insta.png";
import * as Styled from "./styled";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    border: `1px solid ${themes.regular.violet}`,
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: `${themes.regular.dark_violet}`,
    },
  },
  checkedIcon: {
    backgroundColor: `${themes.regular.gold}`,
    borderColor: `${themes.regular.gold}`,
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: `${themes.regular.gold}`,
    },
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  label: {
    color: `${themes.regular.main_text}`,
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios({ changedRadio, defaultValue }) {
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <Styled.Label component="legend">
        Пожалуйста, выберите удобный способ связи:
      </Styled.Label>
      <RadioGroup
        className={classes.group}
        defaultValue={defaultValue}
        aria-label="gender"
        name="connect-options"
        onChange={changedRadio}
      >
        <FormControlLabel
          className={classes.label}
          value="call"
          control={<StyledRadio />}
          label="Звонок"
        />
        <FormControlLabel
          className={classes.label}
          value="viber"
          control={<StyledRadio />}
          label="Viber"
        />
        <FormControlLabel
          className={classes.label}
          value="telegram"
          control={<StyledRadio />}
          label="Telegram"
        />
        <FormControlLabel
          className={classes.label}
          value="whatsapp"
          control={<StyledRadio />}
          label="WhatsApp"
        />
      </RadioGroup>
    </FormControl>
  );
}
