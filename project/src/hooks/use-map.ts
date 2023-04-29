import {useState, useRef, useEffect} from 'react';

// Leaflet
import {Map, TileLayer} from 'leaflet';

// Types
import {MutableRefObject} from 'react';
import {CityInfo} from '../types/offers';

type MapRef = MutableRefObject<HTMLElement | null>;
type MapResult = Map | null;

function useMap(
  mapRef: MapRef,
  city: CityInfo,
): MapResult {
  const [map, setMap] = useState<MapResult>(null);
  const isRenderedRef = useRef<boolean>(false);

  const {latitude, longitude, zoom} = city.location;

  useEffect(() => {
    if (mapRef.current === null || isRenderedRef.current) {
      return;
    }

    // Map instance
    const mapInstance = new Map(mapRef.current);

    // Layer
    const layer = new TileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      },
    );

    layer.addTo(mapInstance);

    setMap(mapInstance);
    isRenderedRef.current = true;
  }, [map, city]);

  useEffect(() => {
    if (map === null) {
      return;
    }

    map.setView([latitude, longitude], zoom);

  }, [map, city]);

  return map;
}

export default useMap;
