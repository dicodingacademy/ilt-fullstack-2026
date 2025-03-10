import '@/styles/style.css';
import 'leaflet/dist/leaflet.css';

import { map as leaflet, tileLayer, geoJSON } from 'leaflet';
import { stores as rawStores } from '@/scripts/sweetgreen';
import { addMarker, createIcon } from '@/scripts/utils';

// Initialize the map
const tileOSM = tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});
const map = leaflet('map', {
  zoom: 10,
  center: [-6.2, 106.816666], // jakarta coordinate
  scrollWheelZoom: false,
  layers: [tileOSM],
});

// Edit geoJSON
const stores = { ...rawStores };
const newFeatures = stores.features.map((store, index) => {
  store.properties['id'] = index + 1;
  return store;
});
stores['features'] = newFeatures;

// Populate the listings to the DOM
const listOfListingItemElement = stores.features.map((store) => {
  return `
    <li id="listing-${store.properties.id}" class="listings-item">
      <a href="#" id="link-${store.properties.id}" class="listings-item__title">
        ${store.properties.name}
      </a>
      <div class="listings-item__city">${store.properties.address} - ${store.properties.city}</div>
      <div class="listing-item__phone">${store.properties.phoneFormatted}</div>
    </li>
  `;
});
document.getElementById('listings').innerHTML = listOfListingItemElement.join('');

// Display geoJSON data on the map
const geojsonStore = geoJSON(stores, {
  pointToLayer(feature, latlng) {
    const markerOptions = {
      alt: feature.properties.address,
      icon: createIcon({
        iconUrl: './marker.png',
        iconRetinaUrl: './marker.png',
        shadowUrl: null,
        iconSize: [56, 56],
        iconAnchor: [28, 56],
        popupAnchor: [1, -46],
        tooltipAnchor: [1, -46],
      }),
    };

    const popupOptions = {
      content: `
        <h4>${feature.properties.name}</h4>
        <div class="listings-item__city">${feature.properties.address} - ${feature.properties.city}</div>
        <div class="listing-item__phone">${feature.properties.phoneFormatted}</div>
      `,
    };

    return addMarker(latlng, markerOptions, popupOptions);
  },
  onEachFeature(feature, layer) {
    function highlightSelectedStore() {
      Array.from(document.getElementsByClassName('active')).forEach((active) => {
        active.classList.remove('active');
      });
      document.getElementById(`listing-${feature.properties.id}`).classList.add('active');
    }

    layer.addEventListener('click', () => {
      map.flyTo(layer.getLatLng(), 15, { duration: 2 });
      layer.openPopup();
      highlightSelectedStore();
    });

    document.getElementById(`link-${feature.properties.id}`).addEventListener('click', (event) => {
      stores.features.forEach((store) => {
        if (event.currentTarget.id !== `link-${store.properties.id}`) {
          return;
        }

        map.flyTo(layer.getLatLng(), 15, { duration: 2 });
        layer.openPopup();
      });

      highlightSelectedStore();
    });
  },
});

geojsonStore.addTo(map);
