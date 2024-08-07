// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div className="flex justify-between w-full pl-10 items-center mt-4 mb-4">
//       <div className="flex-1 text-left ml-5">
//         <button
//           className={`p-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//       </div>
//       <div className="flex space-x-2">
//         {pageNumbers.map(number => (
//           <button
//             key={number}
//             onClick={() => onPageChange(number)}
//             className={`px-3 py-1 rounded-3xl ${currentPage === number ? 'bg-blue-700 text-white font-bold' : 'bg-gray-400 text-white'}`}
//           >
//             {number}
//           </button>
//         ))}
//       </div>
//       <div className="flex-1 text-right mr-5">
//         <button
//           className={`p-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;


import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageNumbersToShow = 5; // Number of page numbers to display at once
  let startPage, endPage;

  if (totalPages <= maxPageNumbersToShow) {
    // If total pages are less than or equal to maxPageNumbersToShow, show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // Determine start and end page based on the current page
    const middlePage = Math.ceil(maxPageNumbersToShow / 2);
    if (currentPage <= middlePage) {
      startPage = 1;
      endPage = maxPageNumbersToShow;
    } else if (currentPage + middlePage - 1 >= totalPages) {
      startPage = totalPages - maxPageNumbersToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - middlePage + 1;
      endPage = currentPage + middlePage - 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium mb-5">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

      {pageNumbers.map(number => (
        <li key={number}>
          <button
            onClick={() => onPageChange(number)}
            className={`block size-8 rounded border text-center leading-8 ${currentPage === number ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-100 bg-white text-gray-900'}`}
          >
            {number}
          </button>
        </li>
      ))}

      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ol>
  );
};

export default Pagination;
