import "./optionSong.css";
import "./ModalSingleSong.css";

import OptionSongItem from "./OptionSongItem";
import { useState } from "react";

const optionSong_player = [
  {
    optionName: "Export difficult words",
    optionSvgSrc: "../image/svg/upload.svg",
    optionTarget: "../pdf/testPdf.pdf",
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
    <div className="dropdown">
      <ul
        className="btn btn-secondary displayOption"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        idsongoption={id}
        onClick={() => handleDropdownOption()}
      >
        <img
          src="../image/svg/dots-three-outline-vertical.svg"
          alt="3-vertical-dots"
          className="optionSongSvg"
        />
      </ul>
      <ul
        className={`dropdown-menu dropdown-menu-dark ${
          showOption == true ? "show" : ""
        }`}
        idsongoption={id}
      >
        {OptionPlayerData.map((item) => (
          <OptionSongItem item={item} key={item.number} id={id} />
        ))}
      </ul>
    </div>
  );
}

export default OptionSong;
