import React from "react";

const Home = () => {
  return (
    <div className="home-content">
      <h2>Home</h2>
      <div className="border-decor">
        <img
          src="https://svgsilh.com/svg/1584992.svg"
          alt="Decorative border"
        />
      </div>
      <h3>Welcome Strider!</h3>
      <br />
      <p>
        You have stumbled across a wonderful little website dedicated to the
        poetry of The Lord of the Rings series. We hope you enjoy the stay.
        Please use the navigation links to check out the poems from the books.
      </p>
      <br />
      <p>
        If you feel that a poem is missing, or would like us to add it to the
        collection, feel free to drop us a note on the contact page.
      </p>
    </div>
  );
};

export default Home;
