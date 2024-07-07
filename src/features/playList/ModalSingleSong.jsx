import "./ModalSingleSong.css";
import { openSongModal, setSongModalInfo } from "../../store/slices/appSlice";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ModalSingleSong(props) {
  const songInfo = useSelector((store) => store.app.songModalInfo);
  const dispatch = useDispatch();
  let songItems = props.songItemList;
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 className="modal-title">music name</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modalContent-body">
          <div className="modalSong-Image">
            <img src={songInfo?.image} alt="" id="single-song-image" />
          </div>
          <div className="modalSong-info">
            <h3 className="modalSong-title" id="modalSong-title">
              {songInfo?.title}
            </h3>
            <h3 className="modalSong-artistName" id="modalSong-artistName">
              {songInfo?.artist}
            </h3>
          </div>
          <audio
            src={songInfo?.audioSrc}
            controls="controls"
            alt=""
            className="modualSong-audio"
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
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSingleSong;
