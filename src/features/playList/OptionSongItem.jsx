import "./optionSong.css";
import "./ModalSingleSong.css";
import { useState } from "react";
import FlashCard from "./flashCard";

function OptionSongItem({ item, id }) {
  const { optionName, optionSvgSrc, optionTarget, number } = item;
  const [showFlashCard, setShowFlashCard] = useState(false);
  function handleOpenFlashCard() {
    setShowFlashCard(true);
  }
  return (
    <li>
      <div class="linkOptionDiv">
        <img src={optionSvgSrc} alt={optionName} class="optionSongSvg" />
        {optionName == "Add difficult words" && (
          <a
            class="dropdown-item"
            href={optionTarget}
            number={number}
            onClick={handleOpenFlashCard}
          >
            {optionName}

            <FlashCard
              id={id}
              setShowFlashCard={setShowFlashCard}
              showFlashCard={showFlashCard}
            />
          </a>
        )}
        <a class="dropdown-item" href={optionTarget} number={number}>
          {optionName}
        </a>
      </div>
    </li>
  );
}

export default OptionSongItem;
