import React, { createContext, useState, useEffect } from "react";

const Contexto = createContext();

const ContextoProvider = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [navResOpen, setNavResOpen] = useState(false);
  return (
    <Contexto.Provider
      value={{ modalIsOpen, setIsOpen, navResOpen, setNavResOpen }}
    >
      {props.children}
    </Contexto.Provider>
  );
};
export { Contexto, ContextoProvider };
