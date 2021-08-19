import AbstractView from './abstract.js';

const createFilmsListTemplate = () => `<section class="films-list">
<h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

<div class="films-list__container">

</div>

<button class="films-list__show-more">Show more</button>
</section>`;


export default class FilmList extends AbstractView {
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
