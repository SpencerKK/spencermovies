import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPopularShows,
  fetchAiringShows,
  fetchTopRatedShows,
  fetchShowCredits,
  fetchShowRecs
} from "../../redux/actions";
import styles from "./ShowList.module.css";

import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "../sliderStyles";

const ShowList = () => {
  const popularShows = useSelector(state => state.popularShows);
  const airingShows = useSelector(state => state.airingShows);
  const topRatedShows = useSelector(state => state.topRatedShows);
  const showRecs = useSelector(state => state.showRecs);
  const credits = useSelector(state => state.showCredits);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const [selectedID, setSelectedID] = useState(0);
  const dispatch = useDispatch();
  Modal.setAppElement("#root");

  useEffect(() => {
    dispatch(fetchPopularShows());
    dispatch(fetchAiringShows());
    dispatch(fetchTopRatedShows());
  }, [dispatch]);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(fetchShowCredits(selectedID));
      dispatch(fetchShowRecs(selectedID));
    }
  }, [selectedID, dispatch, selected]);

  const renderShowList = (show) => {
    return show.map(show => {
      if (show.poster_path)
        return (
          <div key={show.id}>
            <img
              onClick={() => {
                openModal();
                setSelected(show);
                setSelectedID(show.id);
              }}
              className={styles.poster}
              src={"https://image.tmdb.org/t/p/w200/" + show.poster_path}
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
    const recs = showRecs.slice(0, size);
    return recs.map(rec => {
      if (rec.poster_path)
        return (
          <div>
            <img
              src={"https://image.tmdb.org/t/p/w200/" + rec.poster_path}
              alt="movie-poster"
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
          <img src={"https://image.tmdb.org/t/p/w200/" + selected.poster_path} alt="movie-poster" />
          <div className={styles.subBody}>
            <h1>{selected.name}</h1>
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
        <h1 className={styles.listHeader}>Popular Shows</h1>
        <Slider {...settings}>
          {renderShowList(popularShows)}
        </Slider>
        <h1 className={styles.listHeader}>Shows Airing Today</h1>
        <Slider {...settings}>
          {renderShowList(airingShows)}
        </Slider>
        <h1 className={styles.listHeader}>Top Rated Shows</h1>
        <Slider {...settings}>
          {renderShowList(topRatedShows)}
        </Slider>
      </div>
    </div>
  );
};

export default ShowList;