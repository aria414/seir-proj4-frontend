import React from "react";

const About = () => {
  return (
    <div className="home-content">
      <h2>About</h2>
      <div className="border-decor">
        <img
          src="https://svgsilh.com/svg/1584992.svg"
          alt="Decorative border"
        />
      </div>
      <p>
        This project is for everyone to enjoy the poems from The Lord of the
        Rings Series.
      </p>
      <p>
        Poem content and citation/references are thoughtfully compiled by the
        wonderful {"  "}
        <a href="http://tolkiengateway.net/wiki/Poems_in_The_Lord_of_the_Rings">
          Tolkien Gateway website.
        </a>
      </p>
      <br /> <br />
      <p>
        Head over there for a more complete listing of poems and songs from the
        series.
      </p>
      <p>
        Banner Image: Yosemite Valley - Photo by
        <a href="https://unsplash.com/@kvnga?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          {"  "}Kvnga
        </a>
        {"  "}
        on
        {"  "}
        <a href="/photos/-eUgKnGFNkU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default About;
