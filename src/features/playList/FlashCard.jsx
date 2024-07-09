import "./flashCard.css";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { songs_data } from "../../utils/constants";

function FlashCard(props) {
  const [word, setWord] = useState("");
  const [mean, setMean] = useState("");
  // console.log(props.id);

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="flashCardWord"
        centered
        className="modalword-content"
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="fs-5"
            id="flashCardWord"
            onClick={props.onHide}
          >
            Difficult Words
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="p-2">Previous words</h5>
          <Table
            bordered
            hover
            className="table table-success table-striped-columns"
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Word</th>
                <th scope="col">Mean</th>
              </tr>
            </thead>
            <tbody>
              {songs_data[props.id - 1].difficultWords.map((word) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{word.word}</td>
                  <td>{word.mean}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <hr />
          <h5 className="headerAddWord">add difficult word</h5>
          <div className="wordForm">
            <div className="formWordLine">
              <label for="word" className="form-label">
                word:
              </label>
              <input
                type="text"
                className="form-control inputUploader"
                id="word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Enter difficult word"
              />
            </div>
            <div className="formWordLine">
              <label for="mean" className="form-label">
                mean:
              </label>
              <input
                type="text"
                className="form-control inputUploader"
                id="mean"
                value={mean}
                onChange={(e) => setMean(e.target.value)}
                placeholder="Enter mean of word"
              />
            </div>
            <div className="sendWord">
              <button type="submit" className="btn btn-primary btnSendWord">
                Send word
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default FlashCard;
