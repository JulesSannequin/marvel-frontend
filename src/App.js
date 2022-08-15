import { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Characters from "./components/Characters";
import Comics from "./components/Comics";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (tokenToCheck) => {
    if (tokenToCheck !== null) {
      console.log("création du cookie userToken");
      Cookies.set("userToken", tokenToCheck, { expires: 10 });
    } else {
      console.log("suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }
    setToken(tokenToCheck);
  };

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
