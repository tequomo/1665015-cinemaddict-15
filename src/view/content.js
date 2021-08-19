import AbstractView from './abstract.js';

const createContentTemplate = () => `<section class="films">

</section>`;


export default class Content extends AbstractView {
  constructor() {
    super();
    // this._point = point;

    // this._buttonClickHandler = this._buttonClickHandler.bind(this);
    // this._favoriteButtonClickHandler = this._favoriteButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createContentTemplate();
  }
}
