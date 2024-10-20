const movieDetails = document.querySelector('.movie-details')

fetch('https://api.themoviedb.org/3/movie/popular?api_key=6372b5c6c883835103fe4b91ebcbf9cb')
    .then(function(result) {
        return result.json();
    })
    .then(function(response) {
        const films = response.results;
        films.forEach(function(film) {
            movieDetails.innerHTML += getMovieInfoHtml(film);
        });
    })
    .catch(function(error) {
        console.error('Error fetching the films:', error);
    });

function getMovieInfoHtml(film) {
    return `
    <div class="movie-details">
        <div class="film-card">
            <div class="movie-poster">
                <img class="movie-poster-img" src="http://image.tmdb.org/t/p/w500${film.poster_path}" alt="Movie Poster">
            </div>
            <div class="movie-info">
                <h2 class="movie-title">${film.title}</h2>
                <ul class="movie-stats">
                    <li>Release date: ${film.release_date}</li>
                    <li>Rating: ${film.vote_average}</li>
                    <li>Vote count: ${film.vote_count}</li>
                    <li>Original language: ${film.original_language}</li>
                </ul>
                <h3 class="movie-overview-title">Overview</h3>
                <p class="movie-overview">${film.overview}</p>
            </div>
        </div>
    </div>        

  `
}
