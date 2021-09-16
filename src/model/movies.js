import AbstractObserver from '../utils/abstract-observer.js';

export default class Movies extends AbstractObserver {
  constructor() {
    super();
    this._movies = [];
  }

  setMovies(updateType, movies) {
    this._movies = movies.slice();
    this._notify(updateType);
  }

  getMovies() {
    return this._movies;
  }

  updateMovie(updateType, updatedMovie) {
    const index = this._movies.findIndex((movie) => movie.id === updatedMovie.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting movie');
    }

    this._movies = [
      ...this.movies.slice(0, index),
      updatedMovie,
      ...this._movies.slice(index + 1),
    ];

    this._notify(updateType, updatedMovie);
  }

  addMovie(updateType, updatedMovie) {
    this._movies = [
      updatedMovie,
      ...this._movies,
    ];

    this._notify(updateType, updatedMovie);
  }

  deleteMovie(updateType, updatedMovie) {
    const index = this._movies.findIndex((movie) => movie.id === updatedMovie.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting movie');
    }

    this._movies = [
      ...this._movies.slice(0, index),
      ...this._movies.slice(index + 1),
    ];

    this._notify(updateType);
  }

  // static adaptToClient(movie) {
  //   const adaptedMovie = Object.assign(
  //     {},
  //     movie,
  //     {
  //       eventType: point['type'],
  //       eventOffers: point['offers'],
  //       basePrice: point['base_price'],
  //       dateFrom: new Date(point['date_from']),
  //       dateTo: new Date(point['date_to']),
  //       isFavorite: point['is_favorite'],
  //     },
  //   );
  //   delete adaptedPoint['type'];
  //   delete adaptedPoint['offers'];
  //   delete adaptedPoint['is_favorite'];
  //   delete adaptedPoint['date_from'];
  //   delete adaptedPoint['date_to'];
  //   delete adaptedPoint['base_price'];

  //   return adaptedPoint;
  // }

  // static adaptToServer(point) {
  //   const adaptedPoint = Object.assign(
  //     {},
  //     point,
  //     {
  //       'date_from': point.dateFrom.toISOString(),
  //       'date_to': point.dateTo.toISOString(),
  //       'type': point.eventType,
  //       'base_price': point.basePrice,
  //       'is_favorite': point.isFavorite,
  //       'offers': point.eventOffers,
  //     },
  //   );

  //   delete adaptedPoint.dateFrom;
  //   delete adaptedPoint.dateTo;
  //   delete adaptedPoint.basePrice;
  //   delete adaptedPoint.isFavorite;
  //   delete adaptedPoint.eventType;
  //   delete adaptedPoint.eventOffers;

  //   return adaptedPoint;
  // }
}
