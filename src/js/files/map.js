// Initialize and add the map

const uluru = [
  { lat: 55.10773642188598, lng: 38.74416234907394 },
  { lat: 55.1101386927721, lng: 38.73182073693566 },
  { lat: 55.10773642188598, lng: 38.74416234907394 },
];
const imgMarker = ['img/icons/triger.svg', 'img/icons/MapPinLine.svg'];
let map;
function initMap() {
  // The location of Uluru
  var infowindow = new google.maps.InfoWindow({});
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    mapTypeControl: false,
    center: uluru[1],
    styles: [
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f7f1df',
          },
        ],
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [
          {
            color: '#d0e3b4',
          },
        ],
      },
      {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi.medical',
        elementType: 'geometry',
        stylers: [
          {
            color: '#fbd3da',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#bde6ab',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'of',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },

      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffe15f',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#efd151',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: 'black',
          },
        ],
      },
      {
        featureType: 'transit.station.airport',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#cfb2db',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#a2daf2',
          },
        ],
      },
    ],
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru[0],
    map: map,
    icon: imgMarker[0],
  });
  google.maps.event.addListener(
    marker,
    'click',
    (function (marker) {
      return function () {
        infowindow.setContent(document.querySelector('.contacts__markers').innerHTML);
        infowindow.open(map, marker);

        setTimeout(function () {}, 10);
      };
    })(marker)
  );
}
window.addEventListener('resize', () => {
  if (window.innerWidth < 991.98 && !document.body.classList.contains('tablet')) {
    document.body.classList.add('tablet');
	
    [uluru[2], uluru[1]] = [uluru[1], uluru[2]];
    [imgMarker[0], imgMarker[1]] = [imgMarker[1], imgMarker[0]];
    initMap();
  } else if (window.innerWidth > 991.98 && document.body.classList.contains('tablet')) {
    document.body.classList.remove('tablet');

    [uluru[1], uluru[2]] = [uluru[2], uluru[1]];
    [imgMarker[1], imgMarker[0]] = [imgMarker[0], imgMarker[1]];
    initMap();
  }
});
if (window.innerWidth < 991.98 && !document.body.classList.contains('tablet')) {
  document.body.classList.add('tablet');
  [uluru[2], uluru[1]] = [uluru[1], uluru[2]];
  [imgMarker[0], imgMarker[1]] = [imgMarker[1], imgMarker[0]];
} else if (window.innerWidth > 991.98 && document.body.classList.contains('tablet')) {
  document.body.classList.remove('tablet');
  [uluru[1], uluru[2]] = [uluru[2], uluru[1]];
  [imgMarker[1], imgMarker[0]] = [imgMarker[0], imgMarker[1]];
}
window.initMap = initMap;
