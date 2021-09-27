class Movie {
  constructor(item) {
    this.title = item.title;
    this.year = item.year;
    this.date_published = item.date_published;
    this.duration = item.duration;
    this.description = item.description;
    this.long_description = item.long_description;
    this.imdb_score = item.imdb_score;
    this.votes = item.votes;
    this.gross_income = item.worldwide_gross_income;
    this.genres = item.genres;
    this.directors = item.directors;
    this.actors = item.actors;
    this.countries = item.countries;
    this.image_url = item.image_url;
  }
}
