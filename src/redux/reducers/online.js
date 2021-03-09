import { UPDATE_ONLINE } from "../actionTypes/activity";

const online = (online = 0, action) => {
  switch (action.type) {
    case UPDATE_ONLINE:
      return action.payload;

    default:
      return online;
  }
};

export default online;
