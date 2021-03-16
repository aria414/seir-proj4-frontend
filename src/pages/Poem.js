import React from "react";
import { useHistory } from "react-router-dom";

const Poem = (props) => {
  let history = useHistory();

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

    let isTranslate = "";
    if (currentPoem.language !== "English") {
      isTranslate = "Translation";
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
          <h3>Intext Reference</h3>
          <p>{currentPoem.intextref}</p>
          <br /> <hr />
          <section className="share-icons">
            <i className="las la-bookmark"></i>
            <i className="lar la-heart"></i>
            <i className="las la-share"></i>
          </section>
          <h3>{currentPoem.language}</h3>
          <pre>{currentPoem.content}</pre>
          <br />
          <h3>{isTranslate}</h3>
          <pre>{currentPoem.translation}</pre>
          <button id="btn-back" onClick={() => history.push("/")}>
            Back to Listing
          </button>
        </div>
      </>
    );
  };

  const loading = () => {
    return (
      <section class="loading light-gray-text">
        <h2>Loading Poems...</h2>
        <p>Please be paitient... Loading from Heroku might take some time.</p>
      </section>
    );
  };

  return currentPoem ? loaded() : loading();
};

export default Poem;
