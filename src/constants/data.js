import images from './images';

const beers = [
  {
    title: 'Gold Amber',
    price: 'VND 32,000',
    tags: 'M | 330 ml',
  },
  {
    title: 'Gold Amber',
    price: 'VND 50,000',
    tags: 'L | 500 ml',
  },
  {
    title: 'Red Ruby',
    price: 'VND 36,000',
    tags: 'M | 330 ml',
  },
  {
    title: 'Red Ruby',
    price: 'VND 54,000',
    tags: 'L | 500 ml',
  },
  {
    title: 'Black Pearl',
    price: 'VND 39,000',
    tags: 'M | 330 ml',
  },
  {
    title: 'Black Pearl',
    price: 'VND 58,000',
    tags: 'L | 500 ml',
  },
];

const foods = [
  {
    title: 'Vietnamese Sausage Combo',
    price: 'VND 59,000',
    tags: 'M',
  },
  {
    title: 'Vietnamese Sausage Combo',
    price: 'VND 99,000',
    tags: 'L',
  },
  {
    title: 'Grilled Sausages',
    price: 'VND 49,000',
    tags: 'M',
  },
  {
    title: 'Grilled Sausages',
    price: 'VND 95,000',
    tags: 'L',
  },
  {
    title: 'Dry Chicken',
    price: 'VND 30,000',
    tags: '',
  },

];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { beers, foods, awards };
