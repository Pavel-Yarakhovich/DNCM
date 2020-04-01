import * as ACTION_TYPES from "./actionTypes";

export const setLanguage = lang => {
  return {
    type: ACTION_TYPES.LANGUAGE.SET,
    payload: lang
  }
}