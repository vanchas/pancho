import Souce from './src/assets/images/basket/souce.png'
import p1 from './src/assets/images/lil_pizzas/pizza_1.png'
import p2 from './src/assets/images/lil_pizzas/pizza_2.png'
import cola from './src/assets/images/drinks/cola.jpg'
import juice from './src/assets/images/drinks/juice.jpeg'
import beer from './src/assets/images/drinks/beer.jpeg'

export const orders = [
  { name: 'Маргарита', size: '40 см', price: 199, number: 1, image: p1 },
  { name: 'Биг боc', size: '30 см', price: 299, number: 1, image: p2 }
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

