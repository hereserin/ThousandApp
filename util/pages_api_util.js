export const fetchPages = () => {
  return $.ajax({
    method: "GET",
    url: `https://thousand-app.herokuapp.com/api/pages`,
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
