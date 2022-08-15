import { useNavigate } from "react-router-dom";
import mainimg from "../components/images/main-image.jpeg";

const Main = () => {
  return (
    <section className="main">
      <img src={mainimg} alt="backgroundimage" />
    </section>
  );
};

export default Main;
