import { useDispatch, useSelector } from "react-redux";
import { closeSongModal } from "../../store/slices/appSlice.js";
import PlaylistItem from "./PlaylistItem.jsx";
import ModalSingleSong from "./ModalSingleSong";
import { songs_data } from "../../utils/constants";
import usePagination from "../../hooks/usePagination.js";

function Playlist() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((store) => store.app.songModalOpen);
  const {
    setPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    currentPage,
    pageItems,
  } = usePagination(4);

  return (
    <>
      <div id="playerList">
        <div className="music-app">
          <div className="content">
            <ul className="playList">
              {pageItems.map((item) => (
                <PlaylistItem item={item} key={item.id} />
              ))}
            </ul>
          </div>
        </div>
        <button onClick={handlePrevPage}>Previous</button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage}>next</button>
      </div>
      <ModalSingleSong
        show={modalOpen}
        onHide={() => dispatch(closeSongModal())}
      />
    </>
  );
}

export default Playlist;
