# Golf ved CBS

Mobilapp i React Native (Expo), der viser golfbaner omkring CBS på kort og i en liste, med baneinfo (huller og par) og et scorekort, hvor man kan gemme sine scores.

Lavet som individuel obligatorisk opgave 1 i INNT (E26).

**Demovideo:** _(indsæt link her)_

## Funktioner
- **Baner**: liste over golfbaner sorteret efter afstand fra CBS. Tryk på en bane for detaljer.
- **Kort**: kort med CBS og alle baner. Tryk på en markør og derefter på dens tekstboks for baneinfo.
- **Bane**: antal huller, par, adresse og afstand. Knap til at se banen på kortet og til at gemme en score.
- **Scorekort**: alle gemte scores med par-forskel, antal runder, bedste score og gennemsnit. Data gemmes lokalt på telefonen (AsyncStorage).

## Krav i opgaven
| Krav | Hvor |
|---|---|
| Min. 3 screens | `screens/` – Baner, Kort, Scorekort + BaneDetaljer |
| Min. 3 views | `View` bruges i alle skærme |
| Min. 2 knapper (én navigerer) | "Se på kort" (navigerer) og "Gem score" (gemmer) i `BaneDetaljerScreen.js` |
| Min. 1 liste | `FlatList` i `BanerScreen.js` og `ScorekortScreen.js` |
| Styling i separat fil | `styles/GlobalStyle.js` |

## Kør appen
```bash
npm install
npx expo start
```
Scan QR-koden med Expo Go på telefonen, eller tryk `i` for iOS-simulator.

Til Xcode: `npx expo prebuild --platform ios` og åbn `ios/*.xcworkspace`.

## Data
Banedata ligger i `data/golfbaner.js`. Koordinater er slået op via OpenStreetMap ud fra banernes adresser. Par for Ishøj Golf var ikke oplyst på de kilder, der blev brugt, og vises som "Ikke oplyst".
