import { render, RenderPosition } from './utils/render.js';
import ContentView from './view/content.js';
import FilmView from './view/film.js';
import FilmsListView from './view/films-list.js';
import FooterView from './view/footer.js';
import ProfileView from './view/profile.js';
import SiteMenuView from './view/site-menu.js';
import SortView from './view/sort.js';
import Api from './api/api.js';
import MoviesModel from './model/movies.js';
import { UpdateType } from './utils/const.js';
import BoardPresenter from './presenter/board.js';
import FilmsListContainerView from './view/film-list-container.js';

const URI = 'https://15.ecmascript.pages.academy/cinemaddict/';
const AUTHORIZATION = 'Basic mu041popsy=';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.header');
const mainElement = bodyElement.querySelector('.main');
const footerElement = bodyElement.querySelector('.footer');
const filmsStatElement = footerElement.querySelector('.footer__statistics');

const api = new Api(URI, AUTHORIZATION);

const moviesModel = new MoviesModel();
const contentComponent = new ContentView().getElement();
const filmsListComponent = new FilmsListView().getElement();
const filmsContainerComponent = new FilmsListContainerView().getElement();

const boardPresenter = new BoardPresenter(filmsContainerComponent, moviesModel);

render(headerElement, new ProfileView().getElement(), RenderPosition.BEFOREEND);

render(mainElement, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);

render(mainElement, new SortView().getElement(), RenderPosition.BEFOREEND);


render(mainElement, contentComponent, RenderPosition.BEFOREEND);

render(contentComponent, filmsListComponent, RenderPosition.BEFOREEND);
render(filmsListComponent, filmsContainerComponent, RenderPosition.BEFOREEND);

// console.log(filmsContainerComponent);
render(filmsContainerComponent, new FilmView().getElement(), RenderPosition.BEFOREEND);

// render(mainElement, );

render(filmsStatElement, new FooterView().getElement(), RenderPosition.BEFOREEND);

api.getMovies()
  .then((movies) => {
    moviesModel.setMovies(UpdateType.INIT, movies);
    // console.log(movies);
  })
  .catch(() => {
    moviesModel.setMovies(UpdateType.INIT, []);
    // render(navigationElement, siteMenuComponent, RenderPosition.BEFOREEND);
    // siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
  });

boardPresenter.init();

