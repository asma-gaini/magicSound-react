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
  const pagecountLong = [];
  for (let i = 0; i < pagination_size; i++) {
    pagecountLong.push(i + (currentPage - 1));
  }

  return (
    <div className="pagination-modal">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={handlePrevPage}>
            Previous
          </a>
        </li>

        {currentPage > pagination_size - 1 ? (
          <>
            <li
              class="page-item PaginationFirst"
              id="1"
              onclick="setPagination(this.id)"
            >
              <a class="page-link PaginationFirst page-link-num" href="#">
                1
              </a>
            </li>
            <li class="page-item PaginationFirst">...</li>
            {pagecountLong.map((page) => (
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
          </>
        ) : (
          <>
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
          </>
        )}

        {page_lenght > pagination_size && (
          <>
            <li className="page-item PaginationLenght">...</li>
            <li
              className="page-item PaginationLenght"
              id="12"
              onclick="setPagination(this.id)"
            >
              <a className="page-link PaginationLenght page-link-num" href="#">
                {page_lenght}
              </a>
            </li>
          </>
        )}

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
