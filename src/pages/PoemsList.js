import React from "react";
import { useHistory } from "react-router-dom";
const PoemsList = (props) => {
  let history = useHistory();

  const { poems, headline, selectPoem } = props;

  const handleClick = (poem) => {
    console.log("You selected poem ", poem);
    selectPoem(poem);
    history.push(`/poem/${poem.id}`);
  };

  const loaded = () => {
    console.log("Poems props: ", poems);
    let langColor = "#000";

    const allpoems = poems.map((poem, index) => {
      if (poem.language === "English") {
        langColor = "#005905";
      }
      if (poem.language === "Mordor") {
        langColor = "#320084";
      }
      if (poem.language === "Quenya") {
        langColor = "#a34e00";
      }
      if (poem.language === "Sindarin") {
        langColor = "#007ca5";
      }

      return (
        <section
          key={poem.id}
          className="poem-list"
          onClick={() => handleClick(poem)}
        >
          <h3>{poem.title}</h3>
          <p className="light-gray-text">
            RECITED BY: {poem.recitedby.toUpperCase()}
          </p>
          <p style={{ color: langColor }}>{poem.language}</p>
        </section>
      );
    });

    return (
      <div className="content">
        <h2>{headline}</h2>
        <div className="border-decor">
          <img src="https://svgsilh.com/svg/1584992.svg" />
        </div>

        {allpoems}
      </div>
    );
  };

  const loading = () => {
    return <h2>Poems loading...</h2>;
  };

  return poems.length > 0 ? loaded() : loading();
};

export default PoemsList;