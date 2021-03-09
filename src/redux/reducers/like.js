import { UPDATE_LIKE } from "../actionTypes/activity";

const like = (like = 0, action) => {
  switch (action.type) {
    case UPDATE_LIKE:
      return action.payload;

    default:
      return like;
  }
};

export default like;
