// React, Hooks
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';

// Leaflet
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Types
import {CityInfo, Offers} from '../../types/offers';

// Constants
import {UrlMapMarker} from '../../constants';


type MapProps = {
  city: CityInfo;
  offers: Offers;
  blockClassName: string;
}

const iconDefault = new Icon({
  iconUrl: UrlMapMarker.Default,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

// const iconActive = new Icon({
//   iconUrl: UrlMapMarker.Active,
//   iconSize: [28, 40],
//   iconAnchor: [14, 40],
// });

function Map({city, offers, blockClassName}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map === null) {
      return;
    }

    for (const offer of offers) {
      const {latitude, longitude} = offer.location;

      const marker = new Marker({
        lat: latitude,
        lng: longitude,
      });

      marker
        .setIcon(iconDefault)
        .addTo(map);
    }
  }, [map, offers]);

  return (
    <section className={`${blockClassName}__map map`} ref={mapRef} />
  );
}

export default Map;
