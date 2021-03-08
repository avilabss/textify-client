import React from "react";
import { io } from "socket.io-client";

import { store } from "../index";
import { UPDATE_OUT_TEXT } from "../redux/actionTypes/outText";

export const socket = io("https://d5182fa0717a.ngrok.io", {
  transports: ["websocket"],
});

export const SocketContext = React.createContext();

socket.on("connect", () => {
  console.log(socket.id);
});

socket.on("text", (outText) => {
  store.dispatch({ type: UPDATE_OUT_TEXT, payload: outText });
});
