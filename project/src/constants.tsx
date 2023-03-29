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

const RATING_MAX_VALUE = 5;

export {
  AppRoute,
  AuthStatus,
  OfferType,
  RATING_MAX_VALUE,
};
