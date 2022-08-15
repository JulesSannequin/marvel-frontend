import { Link, useNavigate } from "react-router-dom";
import logo from "../components/images/logo-marvel.png";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo marvel" />
      </Link>
      <div className="header-right">
        <Link to="/characters">
          <button>Personnages</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <button>favoris</button>
      </div>
      <div className="authentificate">
        {token === null ? (
          <>
            <Link to="/login">
              <button>se connecter</button>
            </Link>

            <Link to="/signup">
              <button>créer un compte</button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
