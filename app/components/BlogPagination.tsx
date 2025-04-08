interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: BlogPaginationProps) {
  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  // Limit visible page numbers
  let visiblePageNumbers = pageNumbers;
  if (totalPages > 5) {
    if (currentPage <= 3) {
      // Show first 5 pages + last page
      visiblePageNumbers = [...pageNumbers.slice(0, 5), -1, totalPages];
    } else if (currentPage >= totalPages - 2) {
      // Show first page + last 5 pages
      visiblePageNumbers = [1, -1, ...pageNumbers.slice(totalPages - 5)];
    } else {
      // Show first page + current-1, current, current+1 + last page
      visiblePageNumbers = [
        1, 
        -1, 
        currentPage - 1, 
        currentPage, 
        currentPage + 1, 
        -1, 
        totalPages
      ];
    }
  }
  
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-2">
        {/* Previous button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Page précédente"
          >
            &laquo;
          </button>
        </li>
        
        {/* Page numbers */}
        {visiblePageNumbers.map((page, index) => (
          <li key={index}>
            {page === -1 ? (
              <span className="px-3 py-1">...</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}
        
        {/* Next button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Page suivante"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}
