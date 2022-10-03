import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async (event) => {
    try {
      event.preventDefault();

      setErrorMessage("");

      const response = await axios.post(
        "https://marvel-backend-js.herokuapp.com/signup",
        {
          email: email,
          username: username,
          password: password,
        }
      );
      if (response.data) {
        console.log("ici ==>", response.data);
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        setErrorMessage("un compte est déja associé à cet email");
      }
    }
  };

  return (
    <div className="form-signup">
      <h1>Créer toi un compte!</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
