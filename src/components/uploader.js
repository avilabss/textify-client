import React, { useState, useEffect, useContext } from "react";
import { Button } from "@material-ui/core";

import { store } from "../index";
import { LOADING } from "../redux/actionTypes/activity";
import { SocketContext } from "../socket";
import { getB64 } from "../helpers";

const Uploader = () => {
  const socket = useContext(SocketContext);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const convertAndEmitForText = async () => {
        store.dispatch({ type: LOADING });
        const b64String = await getB64(selectedFile);
        socket.emit("getText", b64String);
      };
      convertAndEmitForText();
    }
    setSelectedFile(null);
  }, [selectedFile, socket]);

  return (
    <div>
      <input
        style={{ display: "none" }}
        id="imageFile"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <label htmlFor="imageFile">
        <Button variant="contained" color="default" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default Uploader;
