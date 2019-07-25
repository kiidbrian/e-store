import React from 'react';
import queryString from 'query-string';

const Pagination = (props) => {
    let page = props.info.page;
    let pageSize = props.info.pageSize || 12;

    //if search request save results from api
    let totalCount = 0;
    if (props.searchState) {
      totalCount = props.info.totalRecords
    } else if (props.categoryState) {
      totalCount = props.info.totalRecords
    } else {
      totalCount = props.info.totalRecords
    }
    // let totalCount = props.searchState ? props.info.totalCount : Utils.loadStorageItem('ITEMS_TOTAL_COUNT') || props.info.totalCount
    let displayPageCount = new Number(process.env.REACT_APP_DISPLAY_PAGE_COUNT);
  
    let currentPage = page;
    let totalPageCount = Math.ceil(totalCount / pageSize);
    let displayStartPage, displayEndPage;
    // Use page to determine the bracket of pages to display.
    displayStartPage = Math.floor((page - 1) / displayPageCount) *
      displayPageCount + 1;
    // Utils.log(`Start page: ${displayStartPage}`, false);

    // Utils.log(`Total page count: ${totalPageCount}`, false);
    displayEndPage = Math.min(totalPageCount,
      displayStartPage + displayPageCount -1);

    // Utils.log(`End page: ${displayEndPage}`, false);
    
    let remLinks = [];
    for (let i = displayStartPage; i <= displayEndPage; i++) {
        remLinks.push(<li key={"page-link-" + i} className={"page-item" + (i == currentPage ? " active" : "")}>
          <a className="page-link" href={document.location.pathname + '?' +
            queryString.stringify({page: i, pageSize})}>{i}</a>
        </li>);
    }
    
    let previousLink, nextLink;
    if (remLinks.length > 0) {
      if (currentPage > 1) {
        previousLink = <li className="page-item">
          <a className="page-link" href={document.location.pathname + '?' +
            queryString.stringify({page: currentPage-1, 
            pageSize})} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>;
      }
      else {
        
      }
      if (currentPage < totalPageCount) {
        nextLink = <li className="page-item">
          <a className="page-link" href={document.location.pathname + '?' +
            queryString.stringify({page: currentPage+1, 
            pageSize})} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>;
      }
      else {

      }
    }

    return (
        <ul className="pagination justify-content-left">
            {previousLink}
            {remLinks}
            {nextLink}
        </ul>
    )
}

export default Pagination;