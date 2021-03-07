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
      <div className="content" key={currentPoem.id}>
        <h3>{currentPoem.title}</h3>
        <p>{currentPoem.citation}</p>
        <p className="light-gray-text">
          RECITED BY: {currentPoem.recitedby.toUpperCase()}
        </p>
        <p style={{ color: langColor }}>{currentPoem.language}</p>

        <pre className="poem-format">{currentPoem.content}</pre>
        <pre className="poem-format">{currentPoem.translation}</pre>
        <p>{currentPoem.intextref}</p>
      </div>
    );
  };

  const loading = () => {
    return <h2>Poem loading...</h2>;
  };

  return currentPoem ? loaded() : loading();
};

export default Poem;
