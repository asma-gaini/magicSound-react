import { useDispatch, useSelector } from "react-redux";
import { closeSongModal } from "../../store/slices/appSlice.js";
import PlaylistItem from "./PlaylistItem.jsx";
import ModalSingleSong from "./ModalSingleSong";
import { songs_data } from "../../utils/constants";
import usePagination from "../../hooks/usePagination.js";
import "./pagination/pagination.css";
import Pagination from "./pagination/Pagination.jsx";

function Playlist() {
  const dispatch = useDispatch();
  const modalOpen = useSelector((store) => store.app.songModalOpen);
  const {
    setPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    page_lenght,
    currentPage,
    songItemList,
    pagination_size,
  } = usePagination(4);

  return (
    <>
      <div id="playerList">
        <div className="music-app">
          <div className="content">
            <ul className="playList">
              {songItemList.map((item) => (
                <PlaylistItem item={item} key={item.id} />
              ))}
            </ul>
          </div>
        </div>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          page_lenght={page_lenght}
          pagination_size={pagination_size}
          setCurrentPage={setCurrentPage}
          setPage={setPage}
        />
      </div>
      <ModalSingleSong
        show={modalOpen}
        onHide={() => dispatch(closeSongModal())}
      />
    </>
  );
}

export default Playlist;
