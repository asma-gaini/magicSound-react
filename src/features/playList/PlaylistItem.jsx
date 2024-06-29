function PlaylistItem({ item }) {
  const {
    title,
    artist,
    audioSrc,
    image,
    id,
    difficultWords,
    time,
    textMusic,
  } = item;

  return (
    <li class="playList-item">
      <div
        class="playList-item-div-image"
        id="1"
        onclick="togglePlay(this.id)"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        setmusichasbeencalled="false"
      >
        <img src={image} alt={title} class="playList-item-image" />
        <img src="../image/svg/play.svg" class="svg" id="playSvg" />
        <img src="../image/svg/pause.svg" class="svg" id="pauseSvg" />
      </div>
      <div class="playList-item-main">
        <div class="playList-item-info">
          <p class="info-title">{title}</p>
          <p class="info-subtitle">{artist}</p>
        </div>
        <div class="LeftItemesPlayList">
          <p class="songTime">{time}</p>
          <a class="favoritLink" href="#">
            <img
              src="../image/svg/heart-empty.svg"
              class="favoritSvg"
              id={id}
              onclick="favoritSvg(this.id)"
            />
          </a>
        </div>
      </div>
    </li>
  );
}

export default PlaylistItem;
