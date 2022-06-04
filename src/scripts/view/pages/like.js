import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'none';
    return `
      <h2 class="content__heading">Your Favorite Restaurant</h2> <hr>
      <div id="restaurants" class="restaurants-favorite">
      
      </div>
     `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = `
      <div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>
      `;
    }
  },
};

export default Like;
