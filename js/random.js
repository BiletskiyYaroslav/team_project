document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '6372b5c6c883835103fe4b91ebcbf9cb';
    const movieSection = document.getElementById('movieSection');
    const randomMovieBtn = document.getElementById('randomMovieBtn');

    randomMovieBtn.addEventListener('click', getRandomMovie);

    async function getRandomMovie() {
        try {
            const randomPage = Math.floor(Math.random() * 500) + 1;
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${randomPage}`);
            const data = await response.json();
            const movies = data.results;
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];
            displayMovie(randomMovie);
        } catch (error) {
            console.error('Error fetching random movie:', error);
        }
    }

    function displayMovie(movie) {
        const { title, overview, poster_path, vote_average, release_date } = movie;

        movieSection.innerHTML = `
            <div class="film-card">
                <div class="movie-poster">
                    <img class="movie-poster-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
                </div>
                <div class="movie-info">
                    <h2 class="movie-title">${title}</h2>
                    <ul class="movie-stats">
                        <li>Rating: ${vote_average}</li>
                        <li>Release Date: ${release_date}</li>
                    </ul>
                    <h3 class="movie-overview-title">Overview</h3>
                    <p class="movie-overview">${overview}</p>
                </div>
            </div>
        `;
    }
});
