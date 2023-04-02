enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer',
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

export {
  AppRoute,
  AuthStatus,
  OfferType,
  UrlMapMarker,
  RATING_MAX_VALUE,
};
