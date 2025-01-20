
const Pagination = ({ handlePrevPage, handleNextPage, currentPage,totalPages,onPageChange}) => {

    let startPage, endPage;

    if (totalPages <= 3) {
        // If total pages are less than or equal to 3, show all
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage <= 2) {
            startPage = 1;
            endPage = 3;
        } else if (currentPage + 1 >= totalPages) {
            startPage = totalPages - 2;
            endPage = totalPages;
        } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }
    }
    localStorage.setItem('currentPage', currentPage);

    return (
        <>


            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center" style={{fontSize: '1.5rem'}}>
                {currentPage !== 1 && (
                    <li className="page-item">
                        <button className="page-link btn-lg bg-primary text-white" onClick={handlePrevPage}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </li>
                )}
                {[...Array(endPage - startPage + 1)].map((_, index) => (
                    <li
                        key={index}
                        className={`page-item ${currentPage === startPage + index ? 'active' : ''}`}
                    >
                        <button
                            className="page-link btn-outline-light bg-transparent text-black-50"
                            onClick={() => onPageChange(startPage + index)}
                        >
                            {startPage + index}
                        </button>
                    </li>
                ))}
                {currentPage !== totalPages && (
                    <li className="page-item">
                        <button className="page-link btn-lg bg-primary text-white" onClick={handleNextPage}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
        </>
    );
};

export default Pagination;
