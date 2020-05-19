import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPopularMovies,
  fetchUpcomingMovies,
  fetchTopRatedMovies,
  fetchCredits,
  fetchMovieRecs
} from "../../redux/actions";
import styles from "./MovieList.module.css";

import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../sliderStyles";

const MovieList = () => {
  const popularMovies = useSelector(state => state.popularMovies);
  const upcomingMovies = useSelector(state => state.upcomingMovies);
  const topRatedMovies = useSelector(state => state.topRatedMovies);
  const movieRecs = useSelector(state => state.movieRecs);
  const credits = useSelector(state => state.credits);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedID, setSelectedID] = useState(0);
  const dispatch = useDispatch();
  Modal.setAppElement("#root");

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(fetchCredits(selectedID));
      dispatch(fetchMovieRecs(selectedID));
    }
  }, [selectedID, dispatch, selected]);

  const renderMovieList = (film) => {
    return film.map(film => {
      if (film.poster_path)
        return (
          <div key={film.id}>
            <img
              onClick={() => {
                openModal();
                setSelected(film);
                setSelectedID(film.id);
              }}
              className={styles.poster}
              src={"https://image.tmdb.org/t/p/w200/" + film.poster_path}
              alt="movie poster"
            />
          </div>
        );
    });
  };

  const renderCast = () => {
    const size = 7;
    const cast = credits.slice(0, size);
    return cast.map(cast => {
      return (
        <p className={styles.castOne} key={cast.id}>{cast.name},</p>
      );
    });
  };

  const renderRecs = () => {
    const size = 7;
    const recs = movieRecs.slice(0, size);
    return recs.map(rec => {
      return (
        <div>
          <img
            src={"https://image.tmdb.org/t/p/w200/" + rec.poster_path}
            alt="movie poster"
            onClick={() => {
              setSelected(rec);
              setSelectedID(rec.id);
            }}
          />
        </div>
      );
    });
  };

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
            <hr />
            <p>{selected.overview}</p>
            {renderCast()}
          </div>
        </div>
        <div className={styles.recs}>
          <div>
            <h1>Viewers also liked</h1>
            <div className={styles.recsWrapper}>
              {renderRecs()}
            </div>
          </div>
        </div>
      </Modal>

      <div>
        <h1 className={styles.listHeader}>Popular Movies</h1>
        <Slider {...settings}>
          {renderMovieList(popularMovies)}
        </Slider>
        <h1 className={styles.listHeader}>Upcoming Movies</h1>
        <Slider {...settings}>
          {renderMovieList(upcomingMovies)}
        </Slider>
        <h1 className={styles.listHeader}>Top Rated Movies</h1>
        <Slider {...settings}>
          {renderMovieList(topRatedMovies)}
        </Slider>
      </div>
    </div>
  );
};

export default MovieList;