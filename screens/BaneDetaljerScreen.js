import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyle } from '../styles/GlobalStyle';
import { CBS, golfbaner } from '../data/golfbaner';
import { afstandKm } from '../utils/afstand';
import { gemScore } from '../utils/scoreStorage';

function Raekke({ label, vaerdi }) {
  return (
    <View style={GlobalStyle.detaljeRaekke}>
      <Text style={GlobalStyle.detaljeLabel}>{label}</Text>
      <Text style={GlobalStyle.detaljeVaerdi}>{vaerdi}</Text>
    </View>
  );
}

export default function BaneDetaljerScreen({ navigation, route }) {
  const bane = golfbaner.find((b) => b.id === route.params.baneId);
  const [slag, setSlag] = useState('');

  const gem = async () => {
    const antal = parseInt(slag, 10);
    if (isNaN(antal) || antal <= 0) {
      Alert.alert('Ugyldig score', 'Skriv antal slag som et positivt tal.');
      return;
    }
    await gemScore({ baneId: bane.id, baneNavn: bane.navn, par: bane.par, slag: antal });
    setSlag('');
    Alert.alert('Score gemt', `${antal} slag på ${bane.navn} er gemt.`);
  };

  return (
    <ScrollView style={GlobalStyle.container} contentContainerStyle={GlobalStyle.indhold}>
      <Text style={GlobalStyle.overskrift}>{bane.navn}</Text>
      <Text style={GlobalStyle.tekst}>{bane.beskrivelse}</Text>

      <View style={{ marginTop: 12 }}>
        <Raekke label="Adresse" vaerdi={bane.adresse} />
        <Raekke label="Antal huller" vaerdi={bane.huller} />
        <Raekke label="Par" vaerdi={bane.par ?? 'Ikke oplyst'} />
        <Raekke label="Afstand fra CBS" vaerdi={`${afstandKm(CBS, bane).toFixed(1)} km (luftlinje)`} />
      </View>

      <TouchableOpacity
        style={[GlobalStyle.knap, GlobalStyle.knapSekundaer]}
        onPress={() => navigation.navigate('Tabs', { screen: 'Kort', params: { baneId: bane.id } })}
      >
        <Ionicons name="map" size={20} color="#2E7D32" />
        <Text style={[GlobalStyle.knapTekst, GlobalStyle.knapTekstSekundaer]}>Se på kort</Text>
      </TouchableOpacity>

      <Text style={[GlobalStyle.overskrift, { marginTop: 24 }]}>Registrer din score</Text>
      <TextInput
        style={GlobalStyle.input}
        placeholder="Antal slag i alt"
        keyboardType="number-pad"
        value={slag}
        onChangeText={setSlag}
      />
      <TouchableOpacity style={GlobalStyle.knap} onPress={gem}>
        <Ionicons name="save" size={20} color="#fff" />
        <Text style={GlobalStyle.knapTekst}>Gem score</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
