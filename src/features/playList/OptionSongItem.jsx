import "./optionSong.css";
import "./ModalSingleSong.css";
import { useEffect, useState } from "react";
import FlashCard from "./FlashCard";
import { songs_data } from "../../utils/constants";

function OptionSongItem({ item, id }) {
  const { optionName, optionSvgSrc, optionTarget, number } = item;
  const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {
  //   console.log(id, modalShow);
  // }, [modalShow]);
  return (
    <>
      <li>
        <div className="linkOptionDiv">
          <img src={optionSvgSrc} alt={optionName} className="optionSongSvg" />
          {optionName == "Add difficult words" ? (
            <a
              className="dropdown-item"
              href={optionTarget}
              number={number}
              onClick={() => setModalShow(true)}
            >
              {optionName}
            </a>
          ) : (
            <a className="dropdown-item" href={optionTarget} number={number}>
              {optionName}
            </a>
          )}
        </div>
      </li>

      <FlashCard
        show={modalShow}
        onHide={() => {
          console.log("runnnn");
          setModalShow(false);
        }}
        id={id}
      />
    </>
  );
}

export default OptionSongItem;
