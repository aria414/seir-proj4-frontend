import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PoemsList from "./pages/PoemsList";
import Poem from "./pages/Poem";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const url = "https://lotrpoem-api.herokuapp.com/api/poem";

  // ---------------- Defines STATES --------------------
  const [poems, setPoems] = useState([]);

  const [fotrpoems, setFotrPoems] = useState([]);
  const [tttpoems, setTttPoems] = useState([]);
  const [rotkpoems, setRotkPoems] = useState([]);

  const [selectedPoem, setSelectedPoem] = useState(null);

  // ---------------- FUNCTION TO SELECT A POEM FOR REDIRECT --------------------
  const selectPoem = (current) => {
    setSelectedPoem(current);
  };

  // GET - INDEX---
  const getPoems = () => {
    axios.get(url).then((res) => {
      //Fetch data and store into poems state ... This is for all poems
      const allpoems = res.data;
      setPoems(allpoems);

      //Filter data and store into fotrpoems state ... This is for FOTR poems only
      setFotrPoems(
        allpoems.filter((poem, id) => poem.citation.includes("FOTR"))
      );
      //Filter data and store into tttpoems state ... This is for TWO TOWERS poems only
      setTttPoems(allpoems.filter((poem, id) => poem.citation.includes("TTT")));

      //Filter data and store into rotkpoems state ... This is for ROTK poems only
      setRotkPoems(
        allpoems.filter((poem, id) => poem.citation.includes("ROTK"))
      );
    });
  };
  useEffect(() => {
    getPoems();
  }, []);

  //console.log("Poems fetched: ", poems);
  console.log("FOTR poems: ", fotrpoems);

  return (
    <div className="App">
      <SideNav />
      <div className="main">
        <div className="banner"></div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <PoemsList
                poems={poems}
                headline={"All Poems"}
                selectPoem={selectPoem}
              />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/fotr">
              <PoemsList
                poems={fotrpoems}
                headline={"The Fellowship of the Ring"}
                selectPoem={selectPoem}
              />
            </Route>
            <Route path="/twotowers">
              <PoemsList
                poems={tttpoems}
                headline={"The Two Towers"}
                selectPoem={selectPoem}
              />
            </Route>
            <Route path="/rotk">
              <PoemsList
                poems={rotkpoems}
                headline={"The Return of the King"}
                selectPoem={selectPoem}
              />
            </Route>
            <Route path="/poem/:id">
              <Poem currentPoem={selectedPoem} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
