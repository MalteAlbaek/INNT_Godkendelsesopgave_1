// Golfbaner omkring CBS. Koordinater er slået op via OpenStreetMap (Nominatim) ud fra adresserne.
// par: null = ikke oplyst på de kilder vi har brugt.
export const CBS = {
  navn: 'CBS Solbjerg Plads',
  latitude: 55.681549,
  longitude: 12.530452,
};

export const golfbaner = [
  {
    id: 'royal',
    navn: 'Royal Golf Club',
    adresse: 'Center Boulevard 4, 2300 København S',
    huller: 18,
    par: 72,
    latitude: 55.6385551,
    longitude: 12.5728569,
    beskrivelse: 'Moderne 18-hullers anlæg på Amager tæt på Ørestad, designet af Ron Kirby.',
  },
  {
    id: 'albertslund',
    navn: 'Albertslund Golfklub',
    adresse: 'Snubbekorsvej 54, 2620 Albertslund',
    huller: 9,
    par: 33,
    latitude: 55.678927,
    longitude: 12.325493,
    beskrivelse: 'Parklignende 9-hullers bane med mange træer. Fire par 3, fire par 4 og ét par 5.',
  },
  {
    id: 'cgc',
    navn: 'Copenhagen Golf Center',
    adresse: 'Golfsvinget 16-20, 2625 Vallensbæk',
    huller: 18,
    par: 72,
    latitude: 55.630171,
    longitude: 12.385482,
    beskrivelse: '18-hullers bane med åbne fairways og en 9-hullers Pay & Play bane åben for alle.',
  },
  {
    id: 'ishoj',
    navn: 'Ishøj Golf',
    adresse: 'Køgevej 275, 2635 Ishøj',
    huller: 18,
    par: null,
    latitude: 55.623775,
    longitude: 12.278426,
    beskrivelse: '18-hullers bane samt en 9-hullers bane for alle, og driving range.',
  },
];
