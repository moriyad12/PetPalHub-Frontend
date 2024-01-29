import React, {useEffect, useState} from 'react';
import "./Other.css"

export default function Pagination({totalRecords}) {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
    }, [currentPage, totalRecords]);

    const pageSize = 12;

    const getPageInPagination = (number) => {
        return <li className={`page-item ${(number === currentPage) ? 'active' : ''}`} key={number}>
            <a className="page-link" href="#" onClick={() => setCurrentPage(number)}>{number}</a>
        </li>
    }

    const getOnlyFive = (totalNumberOfPages) => {
        const pageNumbers = [];
        for (let i = 1; i <= totalNumberOfPages; i++)
            pageNumbers.push(i);

        return pageNumbers.map(number => {
            return getPageInPagination(number)
        });
    }

    const getFirstFive = (totalNumberOfPages) => {
        const pageNumbers = [];
        for (let i = 1; i <= 5; i++)
            pageNumbers.push(i);

        return (
            <>
                {pageNumbers.map(number => {
                    return getPageInPagination(number)
                })}
                ...
                {getPageInPagination(totalNumberOfPages - 1)}
                {getPageInPagination(totalNumberOfPages)}
            </>
        );
    }
    const getLastFive = (totalNumberOfPages) => {
        const pageNumbers = [];
        for (let i = totalNumberOfPages - 4; i <= totalNumberOfPages; i++)
            pageNumbers.push(i);

        return (
            <>
                {getPageInPagination(1)}
                {getPageInPagination(2)}
                ...
                {pageNumbers.map(number => {
                    return getPageInPagination(number)
                })}
            </>
        );
    }
    const getMiddleFive = (totalNumberOfPages) => {
        const pageNumbers = [];
        for (let i = currentPage - 2; i <= currentPage + 2; i++)
            pageNumbers.push(i);

        return (
            <>
                {getPageInPagination(1)}
                {getPageInPagination(2)}
                ...
                {pageNumbers.map(number => {
                    return getPageInPagination(number)
                })}
                ...
                {getPageInPagination(totalNumberOfPages - 1)}
                {getPageInPagination(totalNumberOfPages)}
            </>
        );
    }

    const renderPagination = () => {
        const totalNumberOfPages = Math.ceil(totalRecords / pageSize);
        let mypagination;

        if (totalNumberOfPages <= 5)
            mypagination = getOnlyFive(totalNumberOfPages);
        else if (currentPage <= 4)
            mypagination = getFirstFive(totalNumberOfPages);
        else if (currentPage >= totalNumberOfPages - 3)
            mypagination = getLastFive(totalNumberOfPages);
        else
            mypagination = getMiddleFive(totalNumberOfPages);

        return (
            <nav className="my-sticky-bottom">
                <ul className="pagination">
                    <li className={`page-item ${(currentPage === 1) ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Previous" onClick={() => {
                            setCurrentPage(currentPage - 1)
                        }}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {mypagination}
                    <li className={`page-item ${(currentPage === totalNumberOfPages) ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Next" onClick={() => {
                            setCurrentPage(currentPage + 1)
                        }}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }

    return (renderPagination());
}

// <li className="page-item">
//     <a className="page-link" href="#" aria-label="Previous">
//         <span aria-hidden="true">&laquo;</span>
//         <span className="sr-only">Previous</span>
//     </a>
// </li>
// ...
// <li className="page-item"><a className="page-link" href="#">1</a></li>
// <li className="page-item"><a className="page-link" href="#">2</a></li>
// <li className="page-item"><a className="page-link" href="#">3</a></li>
// ...
// <li className="page-item">
//     <a className="page-link" href="#" aria-label="Next">
//         <span aria-hidden="true">&raquo;</span>
//         <span className="sr-only">Next</span>
//     </a>
// </li>
