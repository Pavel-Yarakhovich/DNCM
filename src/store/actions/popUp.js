import * as ACTION_TYPES from "./actionTypes";

export const showPopup = (content, id) => {
  return {
    type: ACTION_TYPES.POPUP.SHOW,
    payload: content,
    id
  }
}

export const closePopup = () => {
  return {
    type: ACTION_TYPES.POPUP.CLOSE
  }
}