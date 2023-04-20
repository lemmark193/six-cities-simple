enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer/:id',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
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

const RATING_MAX_VALUE = 5;

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
  RATING_MAX_VALUE,
  MONTHS,
  AVATAR_URL,
};
