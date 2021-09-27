bestMovie().then(function(value){
    document
      .querySelector(".best-movie__first-block > h1")
      .innerText = value.title;
    document
      .querySelector(".best-movie__second-block")
      .insertAdjacentHTML('afterbegin', '<img src=' + value.image_url + ' alt="best-movie">');
    document
      .querySelector(".best-movie__second-block > p")
      .innerText = value.description;
    document
      .querySelector("#best-movie-modal h1")
      .innerText = value.title;
    document
      .querySelector("#best-movie-modal h1")
      .insertAdjacentHTML('afterend', '<img src=' + value.image_url + ' alt="best-movie">'
                          + '<p> genre :' + value.genres + '</p>'
                          + '<p> date de sortie :' + value.date_published + '</p>'
                          + '<p> rated :' + value.rated + '</p>'
                          + '<p> score Imdb :' + value.imdb_score + '</p>'
                          + '<p> réalisateur :' + value.directors + '</p>'
                          + '<p> acteurs :</p>'
                        );
    value.actors.forEach(actor => {
      document
        .querySelector("#best-movie-modal ul")
        .insertAdjacentHTML('beforeend', '<li>' + actor + '</li>');
    });
    document
      .querySelector("#best-movie-modal ul")
      .insertAdjacentHTML('afterend', '<p> durée :' + value.duration + 'min </p>'
                          + '<p> pays d’origine :' + value.countries + '</p>'
                          + '<p> résultat au Box Office :' + value.votes + '</p>'
                          + '<p> résumé :' + value.long_description + '</p>'
                        );
});

var modal = document.getElementById("best-movie-modal");
var btn = document.getElementsByClassName("best-movie__button")[0];
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
