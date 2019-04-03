export const fetchPages = () => {
  return $.ajax({
    method: "GET",
    url: `localhost:3000/api/pages`,
    header: { "Content-Type": "application/json" }
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
