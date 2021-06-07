fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    fetch(value.results[0].url)
      .then(function(res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function(value) {
        document
          .querySelector(".best-movie__first-block > h1")
          .innerText = value.title;
        document
          .querySelector(".best-movie__second-block")
          .insertAdjacentHTML('afterbegin', '<img src=' + value.image_url + ' alt="best-movie">');
        document
          .querySelector(".best-movie__second-block > p")
          .innerText = value.description;
      })
      .catch(function(err) {
        // Une erreur est survenue
      })
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
