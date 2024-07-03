import "./optionSong.css";
import "./ModalSingleSong.css";

import OptionSongItem from "./OptionSongItem";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import { useState } from "react";

const optionSong_player = [
  {
    optionName: "Add to favorite",
    optionSvgSrc: "../image/svg/heart-empty.svg",
    optionTarget: "#",
    number: "1",
  },
  {
    optionName: "Add difficult words",
    optionSvgSrc: "../image/svg/keyboard.svg",
    optionTarget: "#",
    number: "2",
  },
  {
    optionName: " Download",
    optionSvgSrc: "../image/svg/download-minimalistic-svgrepo-com.svg",
    optionTarget: "#",
    number: "3",
  },
  {
    optionName: " Share",
    optionSvgSrc: "../image/svg/share-svgrepo-com.svg",
    optionTarget: "#",
    number: "4",
  },
  {
    optionName: "More details",
    optionSvgSrc: "../image/svg/details-symbolic-svgrepo-com.svg",
    optionTarget: "#",
    number: "5",
  },
];

function OptionSong({ id }) {
  const OptionPlayerData = optionSong_player;
  const [showOption, setShowOption] = useState(false);
  function handleDropdownOption() {
    if (showOption == false) {
      setShowOption(true);
    } else {
      setShowOption(false);
    }
  }
  return (
    <div class="dropdown">
      <ul
        class="btn btn-secondary displayOption"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        idsongoption={id}
        onClick={() => handleDropdownOption()}
      >
        <img
          src="../image/svg/dots-three-outline-vertical.svg"
          alt="3-vertical-dots"
          class="optionSongSvg"
        />
      </ul>
      <ul
        className={`dropdown-menu dropdown-menu-dark ${
          showOption == true ? "show" : ""
        }`}
        idsongoption={id}
      >
        {OptionPlayerData.map((item) => (
          <OptionSongItem item={item} key={item.number} />
        ))}
      </ul>
    </div>
  );
}

export default OptionSong;
