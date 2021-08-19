import AbstractView from './abstract.js';

const createFooterTemplate = () => '<p>130 291 movies inside</p>';

export default class Footer extends AbstractView {
  constructor() {
    super();
    // this._point = point;

    // this._buttonClickHandler = this._buttonClickHandler.bind(this);
    // this._favoriteButtonClickHandler = this._favoriteButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createFooterTemplate();
  }
}
