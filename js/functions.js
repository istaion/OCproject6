// function to get Best Movie object

async function bestMovieSort() {
  const res = await fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  return res.json();
}

async function bestMovie() {
  let movieDic = await bestMovieSort();
  let movieUrl = await movieDic.results[0].url;
  let res = await fetch(movieUrl);
  let bestMovie = await res.json();
  return new Movie(bestMovie);
}

async function bestMovies(m,k) {
  let movieDic = await bestMovieSort();
  let bestMovies = await new Array(k-m);
  console.log(bestMovies);
  for await (item of bestMovies) {
    let movieUrl = await movieDic.results[m].url;
    let res = await fetch(movieUrl);
    let movie = await res.json();
    item = await bestMovies.push(new Movie(movie));
    m = await m++;
  };
  return bestMovies;
}

bestMovies(1,3).then(function(res){
  console.log(res);
})
