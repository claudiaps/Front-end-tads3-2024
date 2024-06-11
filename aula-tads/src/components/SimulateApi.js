import { useEffect, useState } from "react";
import "./SimulateApi.css";
import { Link } from "react-router-dom";

// simulação de objeto retornado do backend
const infoCampoMourao = {
  dataCriacao: "10/10/1947",
  nome: "Campo Mourão",
  qtdHabitantes: 99000,
  universidades: [
    "Integrado",
    "UTFPR",
    "UNESPAR",
    "Unicampo",
    "Unicesumar",
    "Unoeste",
  ],
};

const SimulateApi = () => {
  const [info, setInfo] = useState();

  // UseEffect que vai ser executado quando o componente for montado
  useEffect(() => {
    // simulação de espera pela resposta do backend
    setTimeout(() => {
      setInfo(infoCampoMourao);
    }, 3000);
  }, []);

  return (
    <div className="container">
      <Link to="/todolist">Ir para a página toDoList</Link>
      {info ? (
        <div>
          <h3>{info.nome}</h3>
          <h4>{info.dataCriacao}</h4>
          <h4>{info.qtdHabitantes}</h4>
          {info.universidades.map((universidade) => (
            <div>{universidade}</div>
          ))}
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default SimulateApi;
