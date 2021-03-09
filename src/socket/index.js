import React from "react";
import { io } from "socket.io-client";

import { store } from "../index";
import { UPDATE_OUT_TEXT } from "../redux/actionTypes/outText";
import {
  UPDATE_LIKE,
  UPDATE_ONLINE,
  NOT_LOADING,
} from "../redux/actionTypes/activity";

export const socket = io("https://77b49c0a8842.ngrok.io", {
  transports: ["websocket"],
  upgrade: false,
});

export const SocketContext = React.createContext();

socket.on("connect", () => {
  console.log(`[CONNECTED] ${socket.id}`);
});

socket.on("serverStats", (data) => {
  var jsonData = JSON.parse(data);
  store.dispatch({ type: UPDATE_ONLINE, payload: jsonData.online });
  store.dispatch({ type: UPDATE_LIKE, payload: jsonData.like });
});

socket.on("text", (outText) => {
  store.dispatch({ type: UPDATE_OUT_TEXT, payload: outText });
  store.dispatch({ type: NOT_LOADING });
});

socket.on("updateLike", (data) => {
  store.dispatch({ type: UPDATE_LIKE, payload: data });
});

socket.on("updateOnline", (data) => {
  store.dispatch({ type: UPDATE_ONLINE, payload: data });
});
