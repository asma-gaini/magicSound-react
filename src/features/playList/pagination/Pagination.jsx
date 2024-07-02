import "./pagination.css";

function Pagination({ handleNextPage, handlePrevPage, currentPage , page_lenght }) {
  return (
    <div className="pagination-modal">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={handlePrevPage}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link page-link-num">{currentPage} </a>
        </li>
        <li className="page-item">
          <a className="page-link" onClick={handleNextPage}>
            next
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
