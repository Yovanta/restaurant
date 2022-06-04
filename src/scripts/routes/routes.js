import RestaurantList from '../view/pages/restaurant-list';
import Detail from '../view/pages/detail';
import Like from '../view/pages/like';

const routes = {
  '/': RestaurantList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
