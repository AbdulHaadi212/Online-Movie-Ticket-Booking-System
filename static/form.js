// //form.pug

// //    // Function to get query parameter
// //    function getQueryParam(param) {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     return urlParams.get(param);
// // }

// // // Get the movie title from URL
// // const movieTitle = getQueryParam('movie');

// // // Update the heading and input field with the movie title
// // if (movieTitle) {
// //     document.getElementById('movie-title').textContent = `Booking for: ${movieTitle}`;
// //     document.getElementById('movie').value = movieTitle;
// // }


//   // Function to get the query parameter from the URL
//   function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
//   }

//   // Get the movie title from the URL
//   const movieTitle = getQueryParam('movie');

//   // Update the h1 and input field with the movie title
//   if (movieTitle) {
//     document.querySelector('h1').textContent = `Booking for: ${movieTitle}`;
//     document.querySelector('movie').value = movieTitle;
//   } 
//   //  else {
//   //       document.querySelector('h1').textContent = "No movie selected.";
//   //     }


// JavaScript to set the movie title dynamically
document.addEventListener('DOMContentLoaded', function () {
  // Get the query parameter (if present) or hardcoded movie title
  const urlParams = new URLSearchParams(window.location.search);
  const movieTitle = urlParams.get('movie') || 'Default Movie Title';

  // Set the movie title in the input field and in the h1 tag
  document.getElementById('movie').value = movieTitle;
  document.getElementById('movie-title').textContent = movieTitle;
});