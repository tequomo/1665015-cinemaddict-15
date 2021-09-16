import { render, RenderPosition } from './utils/render.js';
import ContentView from './view/content.js';
import FilmView from './view/film.js';
import FilmListView from './view/films-list.js';
import FooterView from './view/footer.js';
import ProfileView from './view/profile.js';
import SiteMenuView from './view/site-menu.js';
import SortView from './view/sort.js';
import Api from './api/api.js';
import MoviesModel from './model/movies.js';

const URI = 'https://15.ecmascript.pages.academy/cinemaddict/';
const AUTHORIZATION = 'Basic mu041popsy=';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.header');
const mainElement = bodyElement.querySelector('.main');
const footerElement = bodyElement.querySelector('.footer');
const filmsStatElement = footerElement.querySelector('.footer__statistics');

const api = new Api(URI, AUTHORIZATION);

render(headerElement, new ProfileView().getElement(), RenderPosition.BEFOREEND);

render(mainElement, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);

render(mainElement, new SortView().getElement(), RenderPosition.BEFOREEND);

const contentComponent = new ContentView().getElement();

render(mainElement, contentComponent, RenderPosition.BEFOREEND);

render(contentComponent, new FilmListView().getElement(), RenderPosition.BEFOREEND);
render(contentComponent.querySelector('.films-list__container'), new FilmView().getElement(), RenderPosition.BEFOREEND);

// render(mainElement, );

render(filmsStatElement, new FooterView().getElement(), RenderPosition.BEFOREEND);

api.getMovies()
  .then((response) => {
    MoviesModel.setMovies(response);
  })
  .catch(() => {
    MoviesModel.setPoints([]);
    // render(navigationElement, siteMenuComponent, RenderPosition.BEFOREEND);
    // siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
  });
