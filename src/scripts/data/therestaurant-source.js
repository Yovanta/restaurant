import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantSource {
  static async restaurantrestoList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    return response.json();
  }

  static async favoritRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_FAVORITE);
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheRestaurantSource;
