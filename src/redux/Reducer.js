// reducer.js
const initialState = {
    searchString: '',
    currentPage: 1,
    lastPage: 1,
    searchResults: [],
  };
  
  const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_STRING':
        return { ...state, searchString: action.payload, currentPage: 1 };
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.payload };
      case 'SET_LAST_PAGE':
        return { ...state, lastPage: action.payload };
      case 'SET_SEARCH_RESULTS':
        return { ...state, searchResults: action.payload };
      default:
        return state;
    }
  };
  
  export default Reducer;
  