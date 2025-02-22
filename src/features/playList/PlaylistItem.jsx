import { useEffect, useRef, useState } from "react";
import "./ModalSingleSong.css";
import { FaPlay, FaPause } from "react-icons/fa";
import OptionSong from "./OptionSong";
import { useDispatch, useSelector } from "react-redux";
import { openModalSong, setSongModalInfo } from "../../store/slices/appSlice";
import { useLocation } from "react-router-dom";

function PlaylistItem({ item, songItemList }) {
  const {
    title,
    artist,
    audioSrc,
    image,
    id,
    difficultWords,
    time,
    textMusic,
  } = item;

  const location = useLocation();
  const dispatch = useDispatch();
  const songModalId = useSelector((store) => store.app.songModalInfo?.id);
  const [favoritSong, setFavoritSong] = useState(
    location.pathname == "/favoritSongs"
      ? "../image/svg/heart-full.svg"
      : "../image/svg/heart-empty.svg"
  );
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.addEventListener("song_event", (e) => {
      switch (e.detail?.type) {
        case "pause":
          if (item.id == e.detail.id) {
            setIsPlaying(false);
          }
          break;

        case "play":
          if (item.id == e.detail.id) {
            setIsPlaying(true);
          }
          break;

        case "next_song":
          setIsPlaying(e.detail?.id === item.id);
          break;
      }
    });
  }, []);
  useEffect(() => {
    if (item.id !== songModalId) {
      setIsPlaying(false);
    }
  }, [songModalId]);

  function handleTogglePlayAndPause() {
    let audio = document.querySelector("#single-song");
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  }

  function handleOpenModalSong() {
    dispatch(setSongModalInfo(item));
    if (isPlaying == false) {
      dispatch(openModalSong());
    }
    handleTogglePlayAndPause();
  }

  function handleFavoritSong() {
    if (favoritSong == "../image/svg/heart-empty.svg") {
      setFavoritSong("../image/svg/heart-full.svg");
    } else {
      setFavoritSong("../image/svg/heart-empty.svg");
    }
  }

  return (
    <li className="playList-item">
      <div
        className="playList-item-div-image"
        id={id}
        variant="primary"
        onClick={handleOpenModalSong}
        setmusichasbeencalled="false"
      >
        <img src={image} alt={title} className="playList-item-image" />
        {/* estefade az react icon be jaye svg va handle kardan an */}
        {!isPlaying && (
          <FaPlay
            color="rgb(234 185 156)"
            className={`song-action action-play ${
              item.id === songModalId ? "show" : ""
            }`}
          />
        )}
        {isPlaying && (
          <FaPause
            color="rgb(58 252 58)"
            className={`song-action action-pause ${isPlaying ? "show" : ""}`}
          />
        )}
      </div>
      <div className="playList-item-main">
        <div className="playList-item-info">
          <p className="info-title">{title}</p>
          <p className="info-subtitle">{artist}</p>
        </div>
        <div className="LeftItemesPlayList">
          <p className="songTime">{time}</p>
          <a className="favoritLink" href="#">
            <img
              src={favoritSong}
              className="favoritSvg"
              id={id}
              onClick={(e) => {
                handleFavoritSong(e);
              }}
            />
          </a>
        </div>
      </div>

      <OptionSong id={id} />
    </li>
  );
}

export default PlaylistItem;
