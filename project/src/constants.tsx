enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer/:id',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

const UrlMapMarker = {
  Default: 'img/pin.svg',
  Active: 'img/pin-active.svg',
} as const;

const ReviewFormFieldName = {
  Rating: 'rating',
  Review: 'comment',
} as const;

const Rating = {
  Min: 1,
  Max: 5,
} as const;

const CommentLength = {
  Min: 50,
  Max: 300,
} as const;

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AVATAR_URL = 'https://i.pravatar.cc/';

export {
  AppRoute,
  APIRoute,
  AuthStatus,
  OfferType,
  UrlMapMarker,
  ReviewFormFieldName,
  Rating,
  CommentLength,
  MONTHS,
  AVATAR_URL,
};
