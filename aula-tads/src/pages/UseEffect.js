import { useEffect, useState } from "react";

const UseEffect = () => {
  const [myState, setMyState] = useState();
  const [myState2, setMyState2] = useState();

  // Atualização do componente
  useEffect(() => {
    console.log(
      "useEffect executado na montagem do e atualização do componente"
    );
  }, [myState, myState2]);

  // Montagem do componente
  useEffect(() => {
    console.log("UseEffect executado na montagem do componente");
  }, []);

  // Desmontagem do componente
  useEffect(() => {
    return () => {
      console.log("Função executada na desmontagem do componente");
    };
  }, []);

  const updateMyState = () => {
    setMyState("meu novo myState");
  };

  return (
    <div>
      <button onClick={updateMyState}>Disparar useEffect</button>
    </div>
  );
};

export default UseEffect;
