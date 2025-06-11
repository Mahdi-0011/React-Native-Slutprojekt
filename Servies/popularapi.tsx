const fetchPopularMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y2YWQ4MzNjNzI3NDY2YzFkNjFmMTBlMWRjMjI4NiIsIm5iZiI6MTc0OTQ1NzI1MS4xNDEsInN1YiI6IjY4NDY5OTYzN2ExZGI5YzIxYTI5MmY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CScodTpFvqDa3fYtsw6uoZ3gUXytmgbSRhKDtAUjUno',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.results;
};

export default fetchPopularMovies;