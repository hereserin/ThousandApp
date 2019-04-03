export const fetchPages = () => {
  return $.ajax({
    method: "GET",
    url: `localhost:3000/api/pages`,
    dataType: "jsonp"
  });
};

// export const fetchPages = () => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/pages`
//   });
// };
//
