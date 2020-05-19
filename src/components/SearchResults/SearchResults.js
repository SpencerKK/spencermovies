import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SearchResults.module.css";

import {
  fetchCredits,
  fetchMovieRecs,
  fetchShowCredits,
  fetchShowRecs
} from "../../redux/actions";

import Modal from "react-modal";

const SearchResults = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedID, setSelectedID] = useState(0);
  const results = useSelector(state => state.movieSearchResults.results);
  const showResults = useSelector(state => state.showSearchResults.results);
  const credits = useSelector(state => state.credits);
  const showCredits = useSelector(state => state.showCredits);
  const movieRecs = useSelector(state => state.movieRecs);
  const showRecs = useSelector(state => state.showRecs);
  const dispatch = useDispatch();
  Modal.setAppElement("#root");

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(fetchCredits(selectedID));
      dispatch(fetchMovieRecs(selectedID));
      dispatch(fetchShowCredits(selectedID));
      dispatch(fetchShowRecs(selectedID));
    }
  }, [selectedID, dispatch, selected]);


  const renderResults = (movies) => {
    if (movies) {
      return movies.map(movie => {
        if (movie.poster_path)
          return (
            <img
              key={movie.id}
              src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
              alt={movie.title}
              onClick={() => {
                openModal();
                setSelected(movie);
                setSelectedID(movie.id);
              }}
            />
          );
      });
    }
  };


  const renderShowResults = (shows) => {
    if (shows) {
      return shows.map(show => {
        if (show.poster_path)
          return (
            <img
              src={"https://image.tmdb.org/t/p/w200/" + show.poster_path}
              alt={show.name}
              onClick={() => {
                openModal();
                setSelected(show);
                setSelectedID(show.id);
              }}
            />
          );
      });
    }
  };

  // Cast
  const renderCast = param => {
    const cast = param.slice(0, 7);
    return cast.map(member => {
      return (
        <p className={styles.castOne} key={member.id}>{member.name},</p>
      );
    });
  };

  const renderEitherCast = () => {
    if (!selected.first_air_date) {
      return renderCast(credits);
    } else {
      return renderCast(showCredits);
    }
  };

  // Recommendations
  const renderRecs = (param) => {
    const recs = param.slice(0, 7);
    return recs.map(rec => {
      if (rec.poster_path)
        return (
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w200/" + rec.poster_path}
              alt="poster"
              onClick={() => {
                setSelected(rec);
                setSelectedID(rec.id);
              }}
            />
          </div>
        );
    });
  };

  const renderEitherRecs = () => {
    if (!selected.first_air_date) {
      return renderRecs(movieRecs);
    } else {
      return renderRecs(showRecs);
    }
  };

  // Modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Modal"
        className={styles.modalContent}
        overlayClassName={styles.overlay}
      >
        <button className={styles.modalCloseBtn} onClick={closeModal}>&times;</button>
        <div className={styles.modalBody}>
          <img src={"https://image.tmdb.org/t/p/w200/" + selected.poster_path} alt="movie poster" />
          <div className={styles.subBody}>
            <h1>{selected.title}</h1>
            <h1>{selected.name}</h1>
            <hr />
            <p>{selected.overview}</p>
            {renderEitherCast()}
          </div>
        </div>
        <div className={styles.recs}>
          <div>
            <div className={styles.recsWrapper}>
              {renderEitherRecs()}
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.movieList}>
        <h1>Movies</h1>
        {renderResults(results)}
        <h1>Shows</h1>
        {renderShowResults(showResults)}
      </div>
    </div>
  );

};

export default SearchResults;