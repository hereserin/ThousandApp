export const parseUrlToUserInput = urlQuery => {
  return urlQuery.substring(1).replace(/[^A-Za-z0-9]/g, " ");
};

export const parseUserInputToUrl = userSearchTextInput => {
  return userSearchTextInput.replace(/[^A-Za-z0-9]/g, "+");
};
