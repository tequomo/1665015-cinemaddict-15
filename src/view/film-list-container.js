import AbstractView from './abstract.js';

const createContainerTemplate = () => `<div class="films-list__container">

  </div>`;

export default class FilmsListContainer extends AbstractView {
  constructor() {
    super();
    // this._point = point;

    // this._buttonClickHandler = this._buttonClickHandler.bind(this);
    // this._favoriteButtonClickHandler = this._favoriteButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createContainerTemplate();
  }
}
