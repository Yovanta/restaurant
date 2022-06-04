import TheRestaurantSource from '../../data/therestaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'block';
    return `
        <div class="latest">
          <h4>Explore Restaurant</h4> 
          <div class="lds-facebook"><div></div><div></div><div></div></div>
          <div class="restaurant" id="explore"</div>
        `;
  },

  async afterRender() {
    const restaurantsList = await TheRestaurantSource.restaurantrestoList();
    const restaurantsContainer = document.querySelector('.restaurant');
    restaurantsList.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
