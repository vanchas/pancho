import Souce from './src/assets/images/basket/souce.png'
import cola from './src/assets/images/drinks/cola.jpg'
import juice from './src/assets/images/drinks/juice.jpeg'
import beer from './src/assets/images/drinks/beer.jpeg'

import p1 from './src/assets/images/lil_pizzas/pizza_1.png';
import p2 from './src/assets/images/lil_pizzas/pizza_2.png';
import p3 from './src/assets/images/lil_pizzas/pizza_3.png';
import p4 from './src/assets/images/lil_pizzas/pizza_4.png';
import b1 from './src/assets/images/pizzas/pizza_1.png';
import b2 from './src/assets/images/pizzas/pizza_2.png';
import b3 from './src/assets/images/pizzas/pizza_3.png';
import b4 from './src/assets/images/pizzas/pizza_4.png';

export const orders = [
  { name: 'Маргарита', size: '40 см', price: 199, image: p1, id: Date.now(), counter: 1 },
  { name: 'Биг боc', size: '30 см', price: 299, image: p2, id: Date.now() + 1, counter: 1 }
];

export const history = [
  {
    date: '20.20.20',
    time: '12:20',
    id: Date.now(),
    address: 'Green Streen 123 / 321',
    phone: '123654789',
    amount: 447,
    items: [
      { hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', bigImage: b1, smallImage: p1, size: 30, price: 149, counter: 1 },
      { hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', bigImage: b1, smallImage: p1, size: 30, price: 149, counter: 1 },
      { hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', bigImage: b1, smallImage: p1, size: 30, price: 149, counter: 1 }
    ]
  },
  {
    date: '10.10.10',
    time: '20:12',
    id: Date.now() + 1,
    address: 'Green Streen 123 / 321',
    phone: '123654789',
    amount: 447,
    items: [
      { hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', bigImage: b1, smallImage: p1, size: 30, price: 149, counter: 1 },
      { hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', bigImage: b1, smallImage: p1, size: 30, price: 149, counter: 1 },
      { hot: false, green: false, description: 'Томатный соус, томаты, увеличенная порция сыра моцарелла, орегано', name: 'Margarita', bigImage: b1, smallImage: p1, size: 30, price: 149, counter: 1 }
    ]
  }
];

export const souces = [
  { name: 'Кисло-Сладкий', image: Souce, price: 0 },
  { name: 'Кисло-Сладкий', image: Souce, price: 0 },
  { name: 'Кисло-Сладкий', image: Souce, price: 0 },
  { name: 'Кисло-Сладкий', image: Souce, price: 0 }
];

export const drinks = [
  { name: 'Cola', price: '25', weight: 1, description: '', image: cola },
  { name: 'Juice', price: '25', weight: 1, description: '', image: juice },
  { name: 'Beer', price: '25', weight: 0.5, description: '', image: beer },
  { name: 'Cola', price: '25', weight: 1, description: '', image: cola },
  { name: 'Juice', price: '25', weight: 1, description: '', image: juice },
  { name: 'Beer', price: '25', weight: 0.5, description: '', image: beer },
  { name: 'Cola', price: '25', weight: 1, description: '', image: cola },
  { name: 'Juice', price: '25', weight: 1, description: '', image: juice },
  { name: 'Beer', price: '25', weight: 0.5, description: '', image: beer }
];

