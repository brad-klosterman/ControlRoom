// import colors from 'theme/colors';

const MAP_DARK_THEME = [
  {
    elementType: 'labels',
    featureType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'all',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#000000',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    featureType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    featureType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'administrative',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    elementType: 'geometry.stroke',
    featureType: 'administrative',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'administrative.country',
    stylers: [
      {
        color: '#c4c4c4',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'administrative.locality',
    stylers: [
      {
        color: '#c4c4c4',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        color: '#c4c4c4',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'landscape',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'poi',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 21,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'road.highway',
    stylers: [
      {
        color: '#575757',
      },
      {
        lightness: '0',
      },
    ],
  },
  {
    elementType: 'geometry.stroke',
    featureType: 'road.highway',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.highway',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    featureType: 'road.highway',
    stylers: [
      {
        color: '#575757',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'road.arterial',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    elementType: 'geometry.fill',
    featureType: 'road.arterial',
    stylers: [
      {
        color: '#575757',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.arterial',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    featureType: 'road.arterial',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'road.local',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.local',
    stylers: [
      {
        color: '#999999',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'transit',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'water',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 17,
      },
    ],
  },
];

const MAP_LIGHT_THEME = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'poi',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'poi',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'poi.park',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'poi.park',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'road',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.arterial',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'road.highway',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.highway',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'road.local',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'transit.line',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'transit.station',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    elementType: 'geometry',
    featureType: 'water',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    featureType: 'water',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];

export { MAP_DARK_THEME, MAP_LIGHT_THEME };
