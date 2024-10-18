// Movies.pug
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Get the movie title from the <h3> element in the same movie div
        const movieTitle = this.parentElement.querySelector('h3').textContent.trim();

        // Redirect to the form page and pass the movie title as a query parameter
        window.location.href = `/form?movie=${encodeURIComponent(movieTitle)}`;
    });
});
