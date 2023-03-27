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

export {
  AppRoute,
  AuthStatus,
  OfferType,
};
