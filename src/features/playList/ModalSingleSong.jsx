import "./ModalSingleSong.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalSingleSong(props) {
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
        <button
          className="btn-close"
          type="button"
          data-bs-dismiss="modal"
        ></button>
      </Modal.Header>
      <Modal.Body>
        <div className="modalContent-body">
          <div className="modalSong-Image">
            <img
              src="../image/music cover/shaye-nistameton.png"
              alt=""
              id="single-song-image"
            />
          </div>
          <div className="modalSong-info">
            <h3 className="modalSong-title" id="modalSong-title">
              khial khosh-6
            </h3>
            <h3 className="modalSong-artistName" id="modalSong-artistName">
              alireza ghorbani
            </h3>
          </div>
          <audio
            src="https://dl.rozmusic.com/Music/1399/04/29/Alireza%20Ghorbani%20-%20Khiale%20Khosh%20%28128%29.mp3"
            controls="controls"
            alt=""
            className="modualSong-audio"
            id="single-song"
          ></audio>
          <div className="text">
            <p className="textContent englishFont">khial khosh</p>
            <p className="textContent persionFont">خیال خوش</p>
            <p className="textContent englishFont"> I gave you your dreams</p>
            <p className="textContent persionFont">من رویا هات رو بهت دادم</p>
            <p className="textContent englishFont"> Cause you ment the world</p>
            <p className="textContent persionFont">چون تو دنیای من بودی</p>
            <p className="textContent englishFont">
              So did I deserve to be left in hurt
            </p>
            <p className="textContent persionFont">
              پس واقعا لیاقتم این بود که منو با این همه درد تنها بذاری
            </p>
            <p className="textContent englishFont">So you think I don’t know</p>
            <p className="textContent persionFont">فکر می کنی نمیدونم</p>
            <p className="textContent englishFont">You’re out of control</p>
            <p className="textContent persionFont">که تو غیر قابل کنترلی</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSingleSong;
