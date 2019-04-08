import * as PagesAPIUtil from "../util/pages_api_util";

export const RECEIVE_PAGES = "RECEIVE_PAGES";

export const RECEIVE_PAGE = "RECEIVE_PAGE";
export const START_LOADING_PAGES = "START_LOADING_PAGES";
export const START_LOADING_PAGE = "START_LOADING_PAGE";
export const CLEAR_PAGES = "CLEAR_PAGES";

export const fetchPages = () => {
  return dispatch => {
    return PagesAPIUtil.fetchPages().then(pages => {
      return dispatch(receivePages(pages));
    });
  };
};

export const searchPages = search => {
  return dispatch => {
    dispatch(startLoadingPages());
    return PagesAPIUtil.searchPages(search).then(payload => {
      return dispatch(receivePages(payload));
    });
  };
};

// export const fetchPages = () => {
//   return dispatch => {
//     () => console.log("HELLO.");
//   };
// };

const receivePages = ({ pages }) => {
  return {
    type: RECEIVE_PAGES,
    pages: pages
  };
};

export const startLoadingPages = () => ({
  type: START_LOADING_PAGES
});

export const startLoadingPage = () => ({
  type: START_LOADING_PAGE
});

export const clearPages = () => ({
  type: CLEAR_PAGES
});
