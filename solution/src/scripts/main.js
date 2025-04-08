import * as L from 'leaflet';
import { stores } from './sweetgreen';
import {
  createListingItemsBasedOnStore,
  createPopupContent,
  enableHighlightOnItemClick,
  enableHighlightOnLayerClick,
} from './dom';

// import styles from leaflet
import 'leaflet/dist/leaflet.css';

// import our custom styles
import '../styles/style.css';

// Populate the listings to the DOM
document.getElementById('listings').innerHTML = createListingItemsBasedOnStore(stores);

/**
 * TODO 1: create tile layer from OSM `https://tile.openstreetmap.org/{z}/{x}/{y}.png`
 */
const tileOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

/**
 * TODO 2: create map object with:
 *  - map container id -> `map`
 *  - zoom level 10,
 *  center at Jakarta ([-6.2, 106.816666]),
 *  and add tile OSM layer
 */
const map = L.map('map', {
  zoom: 10,
  center: [-6.2, 106.816666], // jakarta coordinate
  layers: [tileOSM],
});

/**
 * TODO 3: create geoJSON layer with:
 *  - stores as geoJSON data
 *  - pointToLayer function to create custom marker icon
 *  - onEachFeature function to enable interactivity like popup and highlight the store
 *
 * Notes:
 * - use `createPopupContent` function to create popup content
 * - use `enableHighlightOnLayerClick` and `enableHighlightOnItemClick` function to enable interactivity
 */
const geoJSON = L.geoJSON(stores, {
  pointToLayer(feature, latlng) {
    const markerOptions = {
      alt: feature.properties.address,
      icon: L.icon({
        iconUrl: './marker.png',
        iconRetinaUrl: './marker.png',
        iconAnchor: [28, 56],
        popupAnchor: [1, -46],
      }),
    };

    const marker = L.marker(latlng, markerOptions);
    marker.bindPopup(createPopupContent(feature));
    return marker;
  },

  onEachFeature(feature, layer) {
    enableHighlightOnLayerClick({ feature, layer, map });
    enableHighlightOnItemClick({ feature, layer, map });
  },
});


/**
 * TODO 4: add geoJSON layer to the map
 */
geoJSON.addTo(map);
