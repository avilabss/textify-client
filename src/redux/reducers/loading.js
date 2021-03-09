import { LOADING, NOT_LOADING } from "../actionTypes/activity";

const loading = (loading = false, action) => {
  switch (action.type) {
    case LOADING:
      return true;

    case NOT_LOADING:
      return false;

    default:
      return loading;
  }
};

export default loading;
