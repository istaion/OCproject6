class Movie {
  constructor(movie) {
    this.image = movie.image_url;
    this.title = movie.title;
    this.genres = movie.genres;
    this.date = movie.date_published;
    this.score = movie.imdb_score;
    this.rated = movie.rated;
    this.directors = movie.directors;
    this.actors = movie.actors;
    this.duration = movie.duration;
    this.countries = movie.countries;
    this.box_office = movie.worldwide_gross_income;
    this.description = movie.long_description;
  }
  modal(selector) {
    document
      .querySelector(selector)
      .insertAdjacentHTML('beforeend', '<h1>' + this.title + '</h1> <img src='
                          + this.image + ' alt="best-movie">'
                          + '<p> genre :' + this.genres + '</p>'
                          + '<p> date de sortie :' + this.date + '</p>'
                          + '<p> rated :' + this.rated + '</p>'
                          + '<p> score Imdb :' + this.score + '</p>'
                          + '<p> réalisateur :' + this.directors + '</p>'
                          + '<p> acteurs :</p><ul>'
                        );
    this.actors.forEach(actor => {
      document
        .querySelector(selector)
        .insertAdjacentHTML('beforeend', '<li>' + actor + '</li>');
    });
    document
      .querySelector(selector)
      .insertAdjacentHTML('beforeend', '</ul><p> durée :' + this.duration + 'min </p>'
                          + '<p> pays d’origine :' + this.countries + '</p>'
                          + '<p> résultat au Box Office :' + this.votes + '</p>'
                          + '<p> résumé :' + this.description + '</p>'
                        );

  }
}
