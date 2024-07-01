import { useState } from "react";
import "./ModalSingleSong.css";

import ModalSingleSong from "./ModalSingleSong";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OptionSong from "./OptionSong";
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
  const [modalShow, setModalShow] = useState(false);

  return (
    <li className="playList-item">
      <div
        className="playList-item-div-image"
        id="1"
        // variant="primary"
        // onClick={() => setModalShow(true)}
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
              src="../image/svg/heart-empty.svg"
              className="favoritSvg"
              id={id}
              // onclick={favoritSvg(this.id)}
            />
          </a>
        </div>
      </div>

      <OptionSong id={id} />

      <Button variant="primary" onClick={() => setModalShow(true)}>
        modal
      </Button>
      <ModalSingleSong show={modalShow} onHide={() => setModalShow(false)} />
    </li>
  );
}

export default PlaylistItem;
