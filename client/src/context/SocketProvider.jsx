import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  const socket = useMemo(
    () =>
      io(`${process.env.REACT_APP_URL}`, {
        auth: {
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc5NmNiZjliMDYxNjk2Y2YzNDE2NmEiLCJwbGFuIjoiZGVmYXVsdCIsImlhdCI6MTY4NTcwMDgwNSwiZXhwIjoxNjg1NzA4MDA1fQ.xwu0V46M0Md4mGPg9WsOotIaXpVfDgs6mjg3EMXpa7g",
        },
      }),
    []
  );

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
