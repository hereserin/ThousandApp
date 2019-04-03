export const fetchPages = () => {
  return $.ajax({
    method: "GET",
    url: `localhost:3000/api/pages`,
    dataType: "cors"
  });
};

// export const fetchPages = () => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/pages`
//   });
// };
//
