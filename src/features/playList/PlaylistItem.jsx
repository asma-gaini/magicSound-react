import { useState } from "react";
import "./ModalSingleSong.css";

import ModalSingleSong from "./ModalSingleSong";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OptionSong from "./OptionSong";
import { useDispatch } from "react-redux";
import { openSongModal, setSongModalInfo } from "../../store/slices/appSlice";
import FlashCard from "./FlashCard";
function PlaylistItem({ item }) {
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

  const dispatch = useDispatch();

  const [favoritSong, setFavoritSong] = useState(
    "../image/svg/heart-empty.svg"
  );

  const handleOpenModal = () => {
    dispatch(setSongModalInfo(item));
    dispatch(openSongModal());
  };
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
        id="1"
        variant="primary"
        onClick={handleOpenModal}
        // onclick={togglePlay(1)}
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        setmusichasbeencalled="false"
      >
        <img src={image} alt={title} className="playList-item-image" />
        <img src="../image/svg/play.svg" className="svg" id="playSvg" />
        <img src="../image/svg/pause.svg" className="svg" id="pauseSvg" />
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

      {/* 
      <Button variant="primary" onClick={handleOpenModal}>
        modal
      </Button> */}
    </li>
  );
}

export default PlaylistItem;
