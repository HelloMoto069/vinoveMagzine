// actions.js
export const setSearchString = (searchString) => ({
    type: 'SET_SEARCH_STRING',
    payload: searchString,
  });
  
  export const setCurrentPage = (currentPage) => ({
    type: 'SET_CURRENT_PAGE',
    payload: currentPage,
  });
  
  export const setLastPage = (lastPage) => ({
    type: 'SET_LAST_PAGE',
    payload: lastPage,
  });
  
  export const setSearchResults = (results) => ({
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  });
  