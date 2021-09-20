import AbstractView from './abstract.js';

const createFilmsListTemplate = () => `<section class="films-list">
<h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

<button class="films-list__show-more">Show more</button>
</section>`;


export default class FilmsList extends AbstractView {
  constructor() {
    super();
    // this._point = point;

    // this._buttonClickHandler = this._buttonClickHandler.bind(this);
    // this._favoriteButtonClickHandler = this._favoriteButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmsListTemplate();
  }
}
