export const fetchPages = () => {
  return $.ajax({
    method: "GET",
    url: `localhost:3000/api/pages`
  });
};

// export const fetchPages = () => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/pages`
// dataType: "json"
//   });
// };
//
