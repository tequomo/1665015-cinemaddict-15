import AbstractView from './abstract.js';

const createProfileTemplate =() => `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;


export default class Profile extends AbstractView {
  constructor() {
    super();
    // this._point = point;

    // this._buttonClickHandler = this._buttonClickHandler.bind(this);
    // this._favoriteButtonClickHandler = this._favoriteButtonClickHandler.bind(this);
  }

  getTemplate() {
    return createProfileTemplate();
  }

  // _buttonClickHandler(evt) {
  //   evt.preventDefault();
  //   this._callback._buttonClick();
  // }

  // _favoriteButtonClickHandler(evt) {
  //   evt.preventDefault();
  //   this._callback._favoriteButtonClick();
  // }

  // setButtonClickHandler(callback) {
  //   this._callback._buttonClick = callback;
  //   this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._buttonClickHandler);
  // }

  // setFavoriteButtonClickHandler(callback) {
  //   this._callback._favoriteButtonClick = callback;
  //   this.getElement().querySelector('.event__favorite-btn').addEventListener('click', this._favoriteButtonClickHandler);
  // }
}
