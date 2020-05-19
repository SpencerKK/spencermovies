import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import MovieList from "./MovieList/MovieList";
import ShowList from "./ShowList/ShowList";
import SearchResults from "./SearchResults/SearchResults";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/shows" component={ShowList} />
          <Route path="/searchResults" component={SearchResults} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
