import { Icon, icon, marker, popup } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export function createIcon(options = {}) {
  return icon({
    ...Icon.Default.prototype.options,
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    ...options,
  });
}

export function addMarker(coordinates, markerOptions = {}, popupOptions = null) {
  if (typeof markerOptions !== 'object') {
    throw new Error('markerOptions must be an object');
  }

  const newMarker = marker(coordinates, {
    icon: createIcon(),
    ...markerOptions,
  });

  if (popupOptions) {
    if (typeof popupOptions !== 'object') {
      throw new Error('popupOptions must be an object');
    }

    const newPopup = popup(popupOptions);
    newPopup.setLatLng(coordinates);
    newMarker.bindPopup(newPopup);
  }

  return newMarker;
}
