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
  static adaptToClient(film) {
    return {
      id: film.id,
      comments: film.comments,
      filmInfo: {
        poster: film.film_info.poster,
        title: film.film_info.title,
        alternativeTitle: film.film_info.alternative_title,
        rating: film.film_info.total_rating,
        director: film.film_info.director,
        writers: film.film_info.writers,
        actors: film.film_info.actors,
        releaseDate: film.film_info.release.date,
        runtime: film.film_info.runtime,
        country: film.film_info.release.release_country,
        genres: film.film_info.genre,
        description: film.film_info.description,
        ageRating: film.film_info.age_rating,
      },
      userDetails: {
        isInWatchlist: film.user_details.watchlist,
        isWatched: film.user_details.already_watched,
        isFavorite: film.user_details.favorite,
        watchingDate: film.user_details.watching_date,
      },
    };
  }

  static adaptToServer(film) {
    return {
      'id': film.id,
      'comments': film.comments,
      'film_info': {
        'title': film.filmInfo.title,
        'alternative_title': film.filmInfo.alternativeTitle,
        'total_rating': film.filmInfo.rating,
        'poster': film.filmInfo.poster,
        'age_rating': film.filmInfo.ageRating,
        'director': film.filmInfo.director,
        'writers': film.filmInfo.writers,
        'actors': film.filmInfo.actors,
        'release': {
          'date': film.filmInfo.releaseDate,
          'release_country': film.filmInfo.country,
        },
        'runtime': film.filmInfo.runtime,
        'genre': film.filmInfo.genres,
        'description': film.filmInfo.description,
      },
      'user_details': {
        'watchlist': film.userDetails.isInWatchlist,
        'already_watched': film.userDetails.isWatched,
        'watching_date': film.userDetails.watchingDate,
        'favorite': film.userDetails.isFavorite,
      },
    };
  }


}
