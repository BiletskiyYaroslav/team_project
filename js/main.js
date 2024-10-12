const options = {method: 'GET', headers: {accept: 'application/json',Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWI4NDc4MmZmNjQ2M2NiMTZiNTBlMzM5N2M4ZWY2ZSIsIm5iZiI6MTcyODIxNzA4OC43MTc4NjYsInN1YiI6IjY3MDI3ZjU3NzgzMGMxMzAxZTdkMzkzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fTe7B-RqfklIJ4yGgHP-6NOROZvNJPVjDmE4uzqa_6E'}};
let arr = []
fetch('https://api.themoviedb.org/3/discover/movie?api_key=85b84782ff6463cb16b50e3397c8ef6e', options)
  .then(response => response.json())
  .then(response => get(response.results))
  .catch(err => console.error(err));
  function get (arr){
    let html = ''
    for(let i = 0; i<limit; i++){
        html+= `<div class="movie-item">
                    <img src="http://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="Movie Poster">
                    <p>${arr[i].original_title}</p>
                </div>`
    }
    movieGrid.innerHTML=html
}

let limit = 5
let movieGrid = document.querySelector('.movie-grid')
let movieGrid2024 = document.getElementById('2024')
console.log(movieGrid2024)
fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=85b84782ff6463cb16b50e3397c8ef6e', options)
  .then(response => response.json())
  .then(response => get1(response.results))
  .catch(err => console.error(err));
  function get1 (arr){
    let html = ''
    for(let i = 0; i<limit; i++){
        html+= `<div class="movie-item">
                    <img src="http://image.tmdb.org/t/p/w500${arr[i].poster_path}" alt="Movie Poster">
                    <p>${arr[i].original_title}</p>
                </div>`
    }
    movieGrid2024.innerHTML=html
}
