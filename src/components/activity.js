import React, { useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { useSelector } from "react-redux";

import { SocketContext } from "../socket";

const Activity = () => {
  const socket = useContext(SocketContext);
  const online = useSelector((state) => state.online);
  const like = useSelector((state) => state.like);

  const likeHandler = () => {
    socket.emit("doLike");
  };

  return (
    <>
      <ButtonGroup variant="contained" color="default">
        <Button>{like} Likes</Button>
        <Button>{online} Online</Button>
        <Button onClick={likeHandler}>🖤 Like</Button>
      </ButtonGroup>
    </>
  );
};

export default Activity;
