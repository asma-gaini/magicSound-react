import "./customModalSong.css";
import { openSongModal, setSongModalInfo } from "../../store/slices/appSlice";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CustomModalSong({ songItemList }) {
  const songInfo = useSelector((store) => store.app.songModalInfo);
  const dispatch = useDispatch();
  let songItems = songItemList;
  let currentSongId = parseInt(songInfo?.id);
  let nextSong = currentSongId + 1;
  function autoNextSong() {
    for (let i = 0; i < songItems.length; i++) {
      if (parseInt(songItems[i].id) == nextSong) {
        dispatch(setSongModalInfo(songItems[i]));
      }
    }
  }
  return (
    <div class="customModal-dialog customModal-dialog-scrollable">
      <div class="customModal-content">
        <div class="customModal-header">
          <h4 className="customModal-title">music name</h4>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="customModal-body">
          <div className="customModalContent-body">
            <div className="customModalSong-Image">
              <img src={songInfo?.image} alt="" id="single-song-image" />
            </div>
            <div className="customModalSong-info">
              <h3 className="customModalSong-title" id="customModalSong-title">
                {songInfo?.title}
              </h3>
              <h3
                className="customModalSong-artistName"
                id="customModalSong-artistName"
              >
                {songInfo?.artist}
              </h3>
            </div>
            <audio
              src={songInfo?.audioSrc}
              controls="controls"
              alt=""
              className="customModalSong-audio"
              id="single-song"
              autoplay="autoplay"
              onEnded={autoNextSong}
            ></audio>
            <div className="text">
              {songInfo?.textMusic.split("/").map((text, i) => (
                <p
                  className={`textContent ${
                    i % 2 === 0 ? "persionFont" : "englishFont"
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div class="customModal-footer">
          <button
            type="button"
            class="btn btn-danger btnClose singleSong"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomModalSong;
