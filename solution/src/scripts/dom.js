export function createListingItemsBasedOnStore(stores) {
  return stores.features.map((feature) => {
    const { properties } = feature;
    return `
    <li id="listing-${properties.id}" class="listings-item">
      <a href="#" id="link-${properties.id}" class="listings-item__title">
        ${properties.name}
      </a>
      <div class="listings-item__city">${properties.address} - ${properties.city}</div>
      <div class="listing-item__phone">${properties.phoneFormatted}</div>
    </li>
  `;
  }).join('');
}

export function createPopupContent(feature) {
  return `
    <h4>${feature.properties.name}</h4>
    <div class="listings-item__city">${feature.properties.address} - ${feature.properties.city}</div>
    <div class="listing-item__phone">${feature.properties.phoneFormatted}</div>
  `;
}

export function highlightSelectedStore(feature) {
  const activeStoreElements = document.getElementsByClassName('active');
  Array.from(activeStoreElements).forEach((active) => {
    active.classList.remove('active');
  });

  const listingItemElement = document.getElementById(`listing-${feature.properties.id}`);
  listingItemElement.classList.add('active');
}

export function enableHighlightOnItemClick({ feature, layer, map }) {
  const listItemElement = document.getElementById(`listing-${feature.properties.id}`);

  listItemElement.addEventListener('click', () => {
    map.flyTo(layer.getLatLng(), 15, { duration: 2 });
    layer.openPopup();
    highlightSelectedStore(feature);
  });
}

export function enableHighlightOnLayerClick({ feature, layer, map }) {
  layer.addEventListener('click', () => {
    map.flyTo(layer.getLatLng(), 15, { duration: 2 });
    layer.openPopup();
    highlightSelectedStore(feature);
  });
}
