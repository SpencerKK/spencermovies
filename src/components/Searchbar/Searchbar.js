import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Searchbar.module.css";

import { searchMovies, searchShows } from "../../redux/actions/index";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(term);
    history.push("/searchResults");
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(searchMovies(searchTerm));
      dispatch(searchShows(searchTerm));
    }
  }, [dispatch, searchTerm]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          type="text"
        />
        <input
          className={styles.button}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Searchbar;