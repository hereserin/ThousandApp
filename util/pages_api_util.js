// export const fetchPages = () => {
//   return $.ajax({
//     method: "GET",
//     url: `http://localhost:3000/api/pages`
//   });
// };

export const fetchPages = () => {
  return $.ajax({
    method: "GET",
    url: `https://thousand-app.herokuapp.com/api/pages`
  });
};
// header: { "Content-Type": "application/json" }

// export const searchPages = search => {
//   return $.ajax({
//     method: "GET",
//     url: `http://localhost:3000/api/search`,
//     data: search
//   });
// };

export const searchPages = search => {
  return $.ajax({
    method: "GET",
    url: `https://thousand-app.herokuapp.com/api/search`,
    data: search
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
