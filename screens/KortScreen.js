import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GlobalStyle, farver } from '../styles/GlobalStyle';
import { CBS, golfbaner } from '../data/golfbaner';

const startRegion = {
  latitude: 55.66,
  longitude: 12.42,
  latitudeDelta: 0.28,
  longitudeDelta: 0.28,
};

export default function KortScreen({ navigation, route }) {
  const kortRef = useRef(null);
  const baneId = route.params?.baneId;

  // Zoom ind på banen hvis vi kommer fra "Se på kort"
  useEffect(() => {
    const bane = golfbaner.find((b) => b.id === baneId);
    if (bane && kortRef.current) {
      kortRef.current.animateToRegion(
        { latitude: bane.latitude, longitude: bane.longitude, latitudeDelta: 0.04, longitudeDelta: 0.04 },
        600
      );
    }
  }, [baneId]);

  return (
    <View style={GlobalStyle.container}>
      <MapView ref={kortRef} style={GlobalStyle.kortView} initialRegion={startRegion} showsUserLocation={false}>
        <Marker
          coordinate={CBS}
          title="CBS"
          description="Solbjerg Plads, Frederiksberg"
          pinColor={farver.blaa}
        />
        {golfbaner.map((bane) => (
          <Marker
            key={bane.id}
            coordinate={{ latitude: bane.latitude, longitude: bane.longitude }}
            title={bane.navn}
            description={`${bane.huller} huller${bane.par ? ` · Par ${bane.par}` : ''} – tryk for detaljer`}
            pinColor={farver.groen}
            onCalloutPress={() => navigation.navigate('BaneDetaljer', { baneId: bane.id })}
          />
        ))}
      </MapView>
    </View>
  );
}
