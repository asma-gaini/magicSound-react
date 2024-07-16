import "./customModalSong.css";
import { setSongModalInfo, closeModalSong } from "../../store/slices/appSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CustomModalSong({ songItemList }) {
  const songInfo = useSelector((store) => store.app.songModalInfo);
  const dispatch = useDispatch();
  const isShow = useSelector((store) => store.app.showModalSong);

  const songItems = songItemList;
  let currentSongId = parseInt(songInfo?.id);
  let nextSong = currentSongId + 1;
  function autoNextSong() {
    for (let i = 0; i < songItems.length; i++) {
      if (parseInt(songItems[i].id) == nextSong) {
        document.dispatchEvent(
          new CustomEvent("song_event", {
            detail: { type: "next_song", id: songItems[i].id },
          })
        );
        dispatch(setSongModalInfo(songItems[i]));
      }
    }
  }

  //1))omadim ye custom event listiner neveshtin in event ye esm dare ye detail k etelaat ro bash mifrestim
  //k alan ma bash ye type mifrestim ye id
  //2))bara tabe next dar bala ham hamintor gofim ag id barabar bood ham event ru ba ye type dg bfrest
  //ham etelatate ahange badi ru as tu slice set kone
  //3))bad mirim jayi k mikhaym estefade konim tu playlist ono handle mikonim
  const handlePause = () => {
    document.dispatchEvent(
      new CustomEvent("song_event", {
        detail: { type: "pause", id: songInfo.id },
      })
    );
  };
  const handlePlay = () => {
    document.dispatchEvent(
      new CustomEvent("song_event", {
        detail: { type: "play", id: songInfo.id },
      })
    );
  };
  return (
    <div
      className={`customModal-dialog customModal-dialog-scrollable  ${
        isShow == true ? "showModalsong" : "hideModalSong"
      }`}
    >
      <div className="customModal-content">
        <div className="customModal-header">
          <h4 className="customModal-title">music name</h4>
          <button
            className="btn-close"
            type="button"
            onClick={() => dispatch(closeModalSong())}
          ></button>
        </div>
        <div className="customModal-body">
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
              autoPlay="autoPlay"
              onEnded={autoNextSong}
              onPause={handlePause}
              onPlay={handlePlay}
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
        <div className="customModal-footer">
          <button
            type="button"
            className="btn btn-danger btnClose singleSong"
            onClick={() => dispatch(closeModalSong())}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomModalSong;
