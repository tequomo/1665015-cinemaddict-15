import { remove, render, RenderPosition } from '../utils/render.js';
import FilmView from '../view/film.js';

export default class Film {
  constructor(filmContainer) {
    this._filmContainer = filmContainer;
    // this._movieModel = movieModel;
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;
    // const prevPointAddEditComponent = this._pointAddEditComponent;

    this._filmComponent = new FilmView(this._film);
    // this._pointAddEditComponent = new PointAddEditView(this._point, this._offersModel, this._destinationsModel, this._formState);

    // this._pointComponent.setButtonClickHandler(this._handleButtonPointClick);
    // this._pointComponent.setFavoriteButtonClickHandler(this._handleFavoriteButtonClick);
    // this._pointAddEditComponent.setFormSubmitHandler(this._handleFormSubmit);
    // this._pointAddEditComponent.setButtonClickHandler(this._handleButtonEditClick);
    // this._pointAddEditComponent.setButtonDeleteClickHandler(this._handleButtonDeleteClick);
    // this._pointAddEditComponent.setPriceChangeHandler();

    if (prevFilmComponent === null) {
      render(this._filmContainer, this._filmComponent, RenderPosition.BEFOREEND);
      return;
    }

    // if (this._mode === Mode.DEFAULT) {
    //   replace(this._pointComponent, prevPointComponent);
    // }

    // if (this._mode === Mode.EDITING) {
    //   replace(this._pointComponent, prevPointAddEditComponent);
    //   this._mode = Mode.DEFAULT;
    // }

    remove(prevFilmComponent);
    // remove(prevPointAddEditComponent);
  }

}
