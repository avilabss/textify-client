import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import { reducers } from "./redux/reducers";
import { SocketContext, socket } from "./socket";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <SocketContext.Provider value={socket}>
        <App />
      </SocketContext.Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
