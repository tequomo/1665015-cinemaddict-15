import AbstractView from './abstract.js';

const createSiteMenuTemplate = () => `<nav class="main-navigation">
<div class="main-navigation__items">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
  <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
  <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
  <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
</div>
<a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;


export default class SiteMenu extends AbstractView {
  constructor() {
    super();
    // this._point = point;

    // this._buttonClickHandler = this._buttonClickHandler.bind(this);
    // this._favoriteButtonClickHandler = this._favoriteButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createSiteMenuTemplate();
  }
}
