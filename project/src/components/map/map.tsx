import {useRef} from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

// Types
import {CityInfo} from '../../types/offers';

type MapProps = {
  city: CityInfo;
}

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  useMap(mapRef, city);

  return (
    <section className="cities__map map" ref={mapRef} />
  );
}

export default Map;
