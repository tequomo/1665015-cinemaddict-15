import FilmPresenter from '../presenter/film.js';

export default class Board {
  constructor(boardContainer, moviesModel) {
    this._boardContainer = boardContainer;
    this._moviesModel = moviesModel;
  }

  init() {
    this._renderBoard();
  }

  _getMovies() {
    return this._moviesModel.getMovies();
  }

  _renderMovie(movie) {
    const moviePresenter = new FilmPresenter(this._eventsListComponent);
    moviePresenter.init(movie);
    // this._pointPresenter.set(point.id, pointPresenter);
  }

  _renderNoMovies() {

  }

  _renderBoard() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }
    const movies = this._getMovies();

    if (movies.length === 0) {
      this._renderNoMovies();
      return;
    }

    this._renderSort();
    this._renderList();
    movies.forEach((movie) => this._renderMovie(movie));
  }
}
