import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterById = () => {
  const { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const charactersData = async () => {
      const response = await axios.get(
        `https://marvel-backend-js.herokuapp.com/comics/${characterId}`
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    charactersData();
  }, [characterId]);

  return (
    <div className="characterbyid-container">
      {isLoading === true ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="main-hero">
            {data.thumbnail.path + "." + data.thumbnail.extension}
            <div className="maincharactId">
              {data.comics.map((item, index) => {
                console.log(item);

                return (
                  <>
                    <div key={index} className="charactId">
                      <div className="block">
                        <div className="itemTitle">{item.title}</div>
                        <div>{item.description}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterById;
