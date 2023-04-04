import {Reviews} from '../types/reviews';

const DATE_DEFAULT = new Date('2023-03-03').toString();

export const reviews: Reviews = [{
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  date: DATE_DEFAULT,
  id: 1,
  rating: 3,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 10,
    isPro: true,
    name: 'Joe',
  },
}, {
  comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  date: DATE_DEFAULT,
  id: 2,
  rating: 1,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 10,
    isPro: false,
    name: 'Sam',
  },
}, {
  comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  date: DATE_DEFAULT,
  id: 3,
  rating: 2,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 10,
    isPro: false,
    name: 'Sean',
  },
}];
