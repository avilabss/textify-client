import React from "react";
import { io } from "socket.io-client";

import { store } from "../index";
import { UPDATE_OUT_TEXT } from "../redux/actionTypes/outText";

export const socket = io("https://22727ad8f8bf.ngrok.io", {
  transports: ["websocket"],
});

export const SocketContext = React.createContext();

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("text", (outText) => {
  store.dispatch({ type: UPDATE_OUT_TEXT, payload: outText });
});
