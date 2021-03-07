import React from "react";
import { useHistory } from "react-router-dom";

const Poem = (props) => {
  //let history = useHistory();

  const { currentPoem } = props;
  let langColor = "#000";

  const loaded = () => {
    console.log("Single poem prop: ", currentPoem);

    if (currentPoem.language === "English") {
      langColor = "#005905";
    }
    if (currentPoem.language === "Mordor") {
      langColor = "#320084";
    }
    if (currentPoem.language === "Quenya") {
      langColor = "#a34e00";
    }
    if (currentPoem.language === "Sindarin") {
      langColor = "#007ca5";
    }

    return (
      <>
        <div className="poem-info">
          <h1>{currentPoem.title}</h1>
          <p className="citation">{currentPoem.citation}</p>
          <p className="light-gray-text">{currentPoem.comment}</p>
          <br />
          <p className="light-gray-text">
            RECITED BY: {currentPoem.recitedby.toUpperCase()}
          </p>
          <p style={{ color: langColor }}>Languages: {currentPoem.language}</p>
          <br /> <hr />
        </div>

        <div className="poem-format" key={currentPoem.id}>
          <p>{currentPoem.intextref}</p>
          <br /> <hr />
          <pre>{currentPoem.content}</pre>
          <pre>{currentPoem.translation}</pre>
        </div>
      </>
    );
  };

  const loading = () => {
    return <h2>Poem loading...</h2>;
  };

  return currentPoem ? loaded() : loading();
};

export default Poem;
