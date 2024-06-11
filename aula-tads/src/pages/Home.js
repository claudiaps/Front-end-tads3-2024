import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/profile">Ir para a página de perfil</Link>
      </div>
      <div>
        <Link to="/list">Ir para a página de lista</Link>
      </div>
    </div>
  );
};

export default Home;
