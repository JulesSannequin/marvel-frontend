import batman from "./images/batman.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={batman} alt="photo de baman" />
      <p>Marvel par Jules Sannequin élève du Reacteur</p>
    </div>
  );
};

export default Footer;
