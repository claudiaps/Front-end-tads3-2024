import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Nome: Claudia L P Sampedro</p>
      <p>Idade: 26</p>
      <p>Email: claudia.sampedro@grupointegrado.br</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default Profile;
