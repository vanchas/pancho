import FourSisons from './src/assets/images/пиццы/4_sezona.png'
import Bbq from './src/assets/images/пиццы/BBQ.png'
import BigBoss from './src/assets/images/пиццы/big_boss.png'
import Rich from './src/assets/images/пиццы/bogataya_cipa.png'
import Cezar from './src/assets/images/пиццы/cezar.png'
import Cheeseburger from './src/assets/images/пиццы/чизбурегер-без-фона.png'
import Village from './src/assets/images/пиццы/derevenskaya.png'
import Hawai from './src/assets/images/пиццы/gavayskaya.png'
import Italy from './src/assets/images/пиццы/ital.png'
import Julien from "./src/assets/images/пиццы/jul'en.png"
import King from './src/assets/images/пиццы/surnuy_korol.png'
import Kisloslad from './src/assets/images/пиццы/chiken_de_luks.png'
import Margarita from './src/assets/images/пиццы/margorita.png'
import Mexica from './src/assets/images/пиццы/meksika.png'
import Muza from './src/assets/images/пиццы/muza_kukuruza.png'
import Myasoed from './src/assets/images/пиццы/myasoed.png'
import Owo from './src/assets/images/пиццы/ovoshi_sur.png'
import Pancho from './src/assets/images/пиццы/pancho_firm.png'
import Pepperoni from './src/assets/images/пиццы/peperoni.png'
import Radosti from './src/assets/images/пиццы/prostue_radosti.png'
import Ranch from './src/assets/images/пиццы/ran4.png'
import Reindjer from './src/assets/images/пиццы/ranger.png'
import Rukola from './src/assets/images/пиццы/rukkola.png'
import Sea from './src/assets/images/пиццы/morskaya.png'
import Papa from './src/assets/images/пиццы/sutuy_papa.png'

export const pizza = [
  {
    hit: true,
    new: false,
    hot: false,
    green: false,
    id: 1,
    name: '4 сезона',
    description: '2 кусочка Мясоед,2 кусочка Пепперони,2 кусочка Сырный король, 2 кусочка Маргарита',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: FourSisons
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 2,
    name: 'Техас BBQ',
    description: 'Томатный соус, бекон, ветчина, вяленая курица, грибы, соус BBQ, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Bbq
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id:3,
    name: 'Биг Босс',
    description: 'Белый соус ранч, перец халопеньо, говядина, ветчина, салями, охот. колбаски, вялен. курица, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: BigBoss
  },
  {
    hit: false,
    new: true,
    hot: false,
    green: false,
    id: 4,
    name: 'Чизбургер пицца',
    description: 'Томатный соус, мясной фарш, бекон, красный лук,томаты, соленый огурец, сыр моцарелла и сырный соус',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Cheeseburger
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 5,
    name: 'Богатая Цыпа',
    description: 'Томатный соус, буженина, вяленная курочка, томаты, сыр дор блю, сыр моццарела, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Rich
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 6,
    name: 'Цезарь',
    description: 'Цезарь соус, курица, бекон, помидорчики черри, пекин.капуста, пармезан, сыр моцарелла,орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Cezar
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 7,
    name: 'Деревенская',
    description: 'Томатный соус, охот. колбаски, бекон, соленый огурчик, грибы, лук, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Village
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 8,
    name: 'Гавайская',
    description: 'Томатный соус, курица, ананас, томаты, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Hawai
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 9,
    name: 'Итальянская',
    description: 'Томатный соус, салями, грибы, маслины, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Italy
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 10,
    name: 'Жульен',
    description: 'Белый соус, индейка, грибы, лук, чесночок, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Julien
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 11,
    name: 'Сырный король',
    description: 'Томатный соус, сыр пармезан, сыр дор блю, сыр гауда, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: King
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 12,
    name: 'Чикен Де люкс',
    description: 'Томат.соус, вялен. курица, ананас, слад.перец, красный лук, кунжут, кис-сл.соус, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Kisloslad
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: true,
    id: 13,
    name: 'Маргарита',
    description: 'Томатный соус, томаты, увеличенная порция моцареллы, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Margarita
  },
  {
    hit: false,
    new: false,
    hot: true,
    green: false,
    id: 14,
    name: 'Мексиканская',
    description: 'Томатный соус, курица, бекон, сладкий перец, лук, перец чили, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Mexica
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 15,
    name: 'Муза-кукуруза',
    description: 'Томатный соус, курица, кукуруза, маслины, томаты, укроп, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Muza
  },
  {
    hit: true,
    new: false,
    hot: false,
    green: false,
    id: 16,
    name: 'Мясоед',
    description: 'Томатный соус, охотничьи колбаски, салями, ветчина, лук, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Myasoed
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 17,
    name: 'Овощи и сыр',
    description: 'Томатный соус, грибы,черри, красный лук, маслины, сыр фета, слад.перец,сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Owo
  },
  {
    hit: true,
    new: false,
    hot: false,
    green: false,
    id: 18,
    name: 'Панчо фирменная',
    description: 'Томатный соус, салями, ветчина, сладкий перец, томаты, шампиньоны, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Pancho
  },
  {
    hit: false,
    new: false,
    id: 19,
    hot: false,
    green: false,
    name: 'Пепперони',
    description: 'Томатный соус, салями, увеличенная порция сыра моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Pepperoni
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 20,
    name: 'Простые радости',
    description: 'Томатный соус, курица, ветчина, томаты, грибы,сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Radosti
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: false,
    id: 21,
    name: 'Ранч-пицца',
    description: 'Белый соус ранч, курица, бекон, томаты, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Ranch
  },
  {
    hit: false,
    new: false,
    hot: true,
    green: false,
    id: 22,
    name: 'Рейнджер',
    description: 'Белый соус ранч, буженина, охот. колбаски, грибы, перец чили, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Reindjer
  },
  {
    hit: false,
    new: false,
    hot: false,
    green: true,
    id: 23,
    name: 'Руколла',
    description: 'Томатный соус, курица, томаты, сыр фета, маслины, руккола, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Rukola
  },
  {
    hit: false,
    new: false,
    hot: true,
    green: false,
    id: 24,
    name: 'Морская',
    description: 'Томатный соус, лосось, креветки, маслины, сыр моцарелла, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Sea
  },
  {
    hit: false,
    new: false,
    id: 25,
    name: 'Сытый Папа',
    description: 'Томатный соус, говядина, вяленная курочка, бекон, томаты, сыр моццарела, орегано',
    size: {S: 25, M: 30, L: 40},
    price: {S: 171, M: 208, L: 282},
    weight: {S: 450, M: 650, L: 1080},
    image: Papa
  }
];

