import { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";
import PoemsList from "./pages/PoemsList";
import Poem from "./pages/Poem";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  //const url = "http://localhost:1080/api/poem/";
  const url = "https://lotrpoem-api.herokuapp.com/api/poem";

  // ---------------- Defines STATES --------------------
  const [poems, setPoems] = useState([]);
  const [fotrpoems, setFotrPoems] = useState([]);
  const [selectedPoem, setSelectedPoem] = useState(null);

  const selectPoem = (current) => {
    setSelectedPoem(current);
    console.log("APP - Selected poem: ", selectedPoem);
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
        <div className="banner">
          <h1>All Poems</h1>
        </div>

        <Switch>
          <Route exact path="/">
            <PoemsList
              poems={poems}
              headline={"All Poems"}
              selectPoem={selectPoem}
            />
          </Route>

          <Route
            path="/fotr"
            render={(routerProps) => (
              <PoemsList
                poems={fotrpoems}
                headline={"The Fellowship of the Ring"}
                selectPoem={selectPoem}
              />
            )}
          />
          <Route
            path="/poem/:id"
            render={(routerProps) => <Poem currentPoem={selectedPoem} />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
