import Cola from './src/assets/images/production/drinks/cola.jpg'
import Sprite from './src/assets/images/production/drinks/sprite.jpg'
import Fanta from './src/assets/images/production/drinks/fanta.jpg'
import Water from './src/assets/images/production/drinks/water.jpg'
import Juice from './src/assets/images/production/drinks/juice.jpg'
import Beer from './src/assets/images/production/drinks/beer.jpg'

import b1 from './src/assets/images/pizzas/pizza_1.png';
import b2 from './src/assets/images/pizzas/pizza_2.png';
import b3 from './src/assets/images/pizzas/pizza_3.png';

import Souce from './src/assets/images/basket/souce.png'

export const history = [
  {
    date: '20.20.20',
    time: '12:20',
    id: Date.now(),
    address: 'Green Streen 123 / 321',
    phone: '123654789',
    amount: 477,
    items: [
      { orderId: Date.now(), counter: 1, weight: 380, id: 1, hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', image: b1,  size: 40, price: 229 },
      { orderId: Date.now() + 1, counter: 1,  weight: 380,id: 2, hot: true, green: true, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Rukola', image: b2,  size: 30, price: 149 },
      { orderId: Date.now() + 2, counter: 1,  weight: 380,id: 3, hot: true, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Pepperoni', image: b3,  size: 25, price: 99 },
    ]
  },
  {
    date: '10.10.10',
    time: '20:12',
    id: Date.now() + 1,
    address: 'Green Streen 123 / 321',
    phone: '123654789',
    amount: 477,
    items: [
      { orderId: Date.now(), counter: 1, weight: 380, id: 1, hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', image: b1,  size: 40, price: 229 },
      { orderId: Date.now() + 1, counter: 1,  weight: 380,id: 2, hot: true, green: true, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Rukola', image: b2,  size: 30, price: 149 },
      { orderId: Date.now() + 2, counter: 1,  weight: 380,id: 3, hot: true, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Pepperoni', image: b3,  size: 25, price: 99 },
    ]
  }
];

export const souces = [
  { name: 'Терияки', image: Souce, price: 6 },
  { name: 'Манго-чили', image: Souce, price: 6 },
  { name: 'Терияки', image: Souce, price: 6 },
  { name: 'Манго-чили', image: Souce, price: 6 }
];

export const drinks = [
  { name: 'Coca Cola', price: {S: 19, M: 24}, weight: {S: 0.5, M: 1}, description: '', image: Cola },
  { name: 'Sprite', price: {S: 19, M: 24}, weight: {S: 0.5, M: 1}, description: '', image: Sprite },
  { name: 'Fanta', price: {S: 19, M: 24}, weight: {S: 0.5, M: 1}, description: '', image: Fanta },
  { name: 'Соки Rich', price: 40, weight: 1, description: '', image: Juice },
  { name: 'Бонаква газ/не газ', price: {S: 15, M: 18}, weight: {S: 0.5, M: 1}, description: '', image: Water },
  { name: 'Пиво Балтика 0', price: 30, weight: 0.5, description: '', image: Beer },
];

