import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/therestaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    return `
      <section class="content">
            <div class="latest">
                <h1 id="restoName"></h1>
                <div class="restaurant-detail" id="restaurant"></div>
                <div id="likeButtonContainer"></div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await TheRestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurantDetail.restaurant.id,
        name: restaurantDetail.restaurant.name,
        city: restaurantDetail.restaurant.city,
        pictureId: restaurantDetail.restaurant.pictureId,
        description: restaurantDetail.restaurant.description,
        rating: restaurantDetail.restaurant.rating,
        address: restaurantDetail.restaurant.address,
        menus: restaurantDetail.restaurant.menus,
        categories: restaurantDetail.restaurant.categories,
        customerReviews: restaurantDetail.restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
