import '@/styles/style.css';
import 'leaflet/dist/leaflet.css';

import { stores as rawStores } from '@/scripts/sweetgreen';

// TODO: 01. Initialize the map

// Add ID for each store
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

// TODO: 02. Display geoJSON data on the map
// TODO: 03. Display custom icon for markers
// TODO: 04. Add interactivity to the map like popup and highlight the store
