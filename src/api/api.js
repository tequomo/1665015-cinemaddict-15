import MoviesModel from '../model/movies.js';
import { DataPath, Method } from '../utils/const.js';

const requestHeaders = new Headers({'Content-Type': 'application/json'});

export default class Api {
  constructor(endPoint, authorization) {
    this._endPoint = endPoint;
    this._authorization = authorization;
  }

  getMovies() {
    return this._load({url: DataPath.MOVIES})
      .then(Api.toJSON)
      .then((movies) => movies.map(MoviesModel.adaptToClient));
  }

  getComments(movieId) {
    return this._load({url: `${DataPath.COMMENTS}/${movieId}`})
      .then(Api.toJSON);
  }

  // getInitData() {
  //   return Promise.all([
  //     this.getPoints(),
  //     this.getOffers(),
  //     this.getDestinations(),
  //   ])
  //     .catch((err) => {throw new Error(err);});
  // }

  updateMovie(movie) {
    return this._load({
      url: `${DataPath.MOVIES}/${movie.id}`,
      method: Method.PUT,
      body: JSON.stringify(MoviesModel.adaptToServer(movie)),
      headers: requestHeaders,
    })
      .then(Api.toJSON)
      .then(MoviesModel.adaptToClient);
  }

  // addMovie(movie) {
  //   return this._load({
  //     url: DataPath.MOVIES,
  //     method: Method.POST,
  //     body: JSON.stringify(MoviesModel.adaptToServer(movie)),
  //     headers: requestHeaders,
  //   })
  //     .then(Api.toJSON)
  //     .then(MoviesModel.adaptToClient);
  // }

  // deleteMovie(movie) {
  //   return this._load({
  //     url: `${DataPath.MOVIES}/${movie.id}`,
  //     method: Method.DELETE,
  //   });
  // }

  sync(data) {
    return this._load({
      url: `${DataPath.MOVIES}/${DataPath.SYNC}`,
      method: Method.POST,
      body: JSON.stringify(data),
      headers: requestHeaders,
    })
      .then(Api.toJSON);
  }

  addComment(comment, movieId) {
    return this._load({
      url: `${DataPath.COMMENTS}/${movieId}`,
      method: Method.POST,
      // body: JSON.stringify(MoviesModel.adaptToServer(movie)),
      headers: requestHeaders,
    })
      .then(Api.toJSON)
      .then(MoviesModel.adaptToClient);
  }

  deleteMovie(movie) {
    return this._load({
      url: `${DataPath.MOVIES}/${movie.id}`,
      method: Method.DELETE,
    });
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers(),
  }) {
    headers.append('Authorization', this._authorization);

    return fetch(
      `${this._endPoint}/${url}`,
      {method, body, headers},
    )
      .then(Api.checkStatus)
      .catch(Api.catchError);
  }

  static checkStatus(response) {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}
