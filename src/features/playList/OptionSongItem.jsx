import "./optionSong.css";
import "./customModalSong.css";
import { useState } from "react";
import FlashCard from "./FlashCard";

function OptionSongItem({ item, id }) {
  const { optionName, optionSvgSrc, optionTarget, number } = item;
  const [modalShow, setModalShow] = useState(false);

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
          setModalShow(false);
        }}
        id={id}
      />
    </>
  );
}

export default OptionSongItem;
