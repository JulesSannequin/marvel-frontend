// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "./images/logo-marvel.png";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://marvel-backend-js.herokuapp.com/characters"
        );
        setData(response.data.validData);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return isLoading === true ? (
    <div className="loader">
      <img src={logo} alt="" />{" "}
    </div>
  ) : (
    <>
      <div className="map-characters">
        {data.results.map((category) => {
          return (
            <div className="fiche-characters">
              <p>{category.name}</p>
              <img src={category.thumbnail.path + ".jpg"} alt="photos" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
