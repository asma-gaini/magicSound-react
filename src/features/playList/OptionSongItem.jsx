import "./optionSong.css";
import "./ModalSingleSong.css";

function OptionSongItem({ item }) {
  const { optionName, optionSvgSrc, optionTarget, number } = item;
  return (
    <li>
      <div class="linkOptionDiv">
        <img src={optionSvgSrc} alt={optionName} class="optionSongSvg" />
        <a class="dropdown-item" href={optionTarget} number={number}>
          {optionName}
        </a>
      </div>
    </li>
  );
}

export default OptionSongItem;
