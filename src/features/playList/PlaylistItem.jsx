import { useState } from "react";
import "./ModalSingleSong.css";

import OptionSong from "./OptionSong";
import { useDispatch, useSelector } from "react-redux";
import { openModalSong, setSongModalInfo } from "../../store/slices/appSlice";
import FlashCard from "./FlashCard";
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

  const dispatch = useDispatch();

  const [favoritSong, setFavoritSong] = useState(
    "../image/svg/heart-empty.svg"
  );
  const isShow = useSelector((store) => store.app.showModalSong);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleTogglePlayAndPause() {
    let audio = document.querySelector("#single-song");
    console.log(audio);
    if (isPlaying) {
      console.log("isplying");
      audio.pause();
      setIsPlaying(false);
    } else {
      console.log("not is playing");
      audio.play();
      setIsPlaying(true);
    }
  }
  function handleSvgHover() {
    // let AddhoverSvg = document.querySelectorAll(".addPlayingHover");
    // let removehoverSvg = document.querySelectorAll(".removePauseHover");
    let activeClass = document.querySelectorAll(".active");
    let playClass = document.querySelectorAll(".play");
    let puaseClass = document.querySelectorAll(".pause");
    // AddhoverSvg.forEach((el) => el.classList.remove("addPlayingHover"));
    // removehoverSvg.forEach((el) => el.classList.remove("removePauseHover"));
    activeClass.forEach((el) => el.classList.remove("active"));
    playClass.forEach((el) => el.classList.remove("play"));
    puaseClass.forEach((el) => el.classList.remove("pause"));
  }
  function handleOpenModalSong() {
    handleSvgHover();
    dispatch(setSongModalInfo(item));
    if (isPlaying == false) {
      dispatch(openModalSong());
    }
    console.log("before handle " + isPlaying);
    handleTogglePlayAndPause();
    console.log("after handle " + isPlaying);
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
        className={`playList-item-div-image  ${
          isPlaying == true ? "play active removePauseHover" : "addPlayingHover"
        }`}
        id={id}
        variant="primary"
        onClick={handleOpenModalSong}
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
    </li>
  );
}

export default PlaylistItem;
