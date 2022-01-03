export const triggerShow = (message) => ({
  type: "SHOW",
  message,
});

export const triggerHide = () => ({
  type: "HIDE",
});
let timer;
export const setNotification = (message, timeout) => {
  return (dispatch) => {
    clearTimeout(timer);
    dispatch(triggerShow(message));
    timer = setTimeout(() => {
      dispatch(triggerHide());
    }, timeout * 1000);
  };
};

const messageReducer = (state = "No notification", action) => {
  switch (action.type) {
    case "SHOW":
      return action.message;
    case "HIDE":
      return "No notification";
    default:
      return state;
  }
};

export default messageReducer;
