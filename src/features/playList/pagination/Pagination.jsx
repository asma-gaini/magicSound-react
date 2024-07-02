import "./pagination.css";

function Pagination({
  handleNextPage,
  handlePrevPage,
  currentPage,
  page_lenght,
  pagination_size,
}) {
  const pageCount = [];
  for (let i = 0; i < pagination_size; i++) {
    pageCount.push(i + 1);
  }

  return (
    <div className="pagination-modal">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={handlePrevPage}>
            Previous
          </a>
        </li>
        {pageCount.map((page) => (
          <li className="page-item">
            <a
              className={`page-link page-link-num ${
                page == currentPage ? "active" : ""
              }`}
            >
              {page}
            </a>
          </li>
        ))}

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
