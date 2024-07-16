import PlaylistItem from "./PlaylistItem.jsx";
import usePagination from "../../hooks/usePagination.js";
import "./pagination/pagination.css";
import Pagination from "./pagination/Pagination.jsx";
import CustomModalSong from "./CustomModalSong.jsx";
import { playList } from "../../utils/constants";

function Playlist() {
  const {
    setPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    page_lenght,
    currentPage,
    songItemList,
    pagination_size,
  } = usePagination(4, playList);

  return (
    <>
      <div id="playerList">
        <CustomModalSong songItemList={songItemList} />
        <div className="music-app">
          <div className="content">
            <ul className="playList">
              {songItemList.map((item) => (
                <PlaylistItem
                  item={item}
                  key={item.id}
                  songItemList={songItemList}
                  
                />
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
    </>
  );
}

export default Playlist;
