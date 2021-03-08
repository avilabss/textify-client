import { UPDATE_OUT_TEXT } from "../actionTypes/outText";

const defaultOut = "Your Text From Image Will Appear Here After Resolve 😀";

const outText = (outText = defaultOut, action) => {
  switch (action.type) {
    case UPDATE_OUT_TEXT:
      return action.payload;

    default:
      return outText;
  }
};

export default outText;
