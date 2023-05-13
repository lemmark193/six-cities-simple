// React
import {useEffect, useRef} from 'react';

// Hooks & functions
import useMap from '../../hooks/use-map';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getAciveOfferId} from '../../store/data-main-process/selectors';

// Leaflet
import {Icon, LayerGroup, Marker} from 'leaflet';
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

const iconActive = new Icon({
  iconUrl: UrlMapMarker.Active,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

function Map({city, offers, blockClassName}: MapProps): JSX.Element {
  const activeOfferId = useAppSelector(getAciveOfferId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersGroupRef = useRef<LayerGroup | null>(null);

  useEffect(() => {
    if (map === null) {
      return;
    }

    if (markersGroupRef.current === null) {
      markersGroupRef.current = new LayerGroup().addTo(map);
    }

    for (const offer of offers) {
      const {latitude, longitude} = offer.location;
      const isActive = offer.id === activeOfferId;

      const marker = new Marker({
        lat: latitude,
        lng: longitude,
      });

      marker
        .setZIndexOffset(Number(isActive) * 1000)
        .setIcon(isActive ? iconActive : iconDefault)
        .addTo(markersGroupRef.current);
    }

    return () => {
      markersGroupRef.current?.clearLayers();
    };
  }, [map, offers, activeOfferId]);

  return (
    <section
      className={`${blockClassName}__map map`}
      ref={mapRef}
    />
  );
}

export default Map;
