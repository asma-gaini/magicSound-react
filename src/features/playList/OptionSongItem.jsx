import "./optionSong.css";
import "./ModalSingleSong.css";
import { useState } from "react";
import FlashCard from "./FlashCard";
import { songs_data } from "../../utils/constants";


function OptionSongItem({ item, id }) {
  const { optionName, optionSvgSrc, optionTarget, number } = item;
  const [modalShow, setModalShow] = useState(false);
  return (
    <li>
      <div class="linkOptionDiv">
        <img src={optionSvgSrc} alt={optionName} class="optionSongSvg" />
        {optionName == "Add difficult words" ? (
          <a
            class="dropdown-item"
            href={optionTarget}
            number={number}
            onClick={() => setModalShow(true)}
          >
            {/* console.log(item.difficultWords) */}
            {songs_data.map(
              (item) =>
                item.id == id && (
                  <FlashCard
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    id={id}
                  />
                )
            )}

            {optionName}
          </a>
        ) : (
          <a class="dropdown-item" href={optionTarget} number={number}>
            {optionName}
          </a>
        )}
      </div>
    </li>
  );
}

export default OptionSongItem;
