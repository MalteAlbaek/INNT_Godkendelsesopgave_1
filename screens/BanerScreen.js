import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyle, farver } from '../styles/GlobalStyle';
import { CBS, golfbaner } from '../data/golfbaner';
import { afstandKm } from '../utils/afstand';

// Sorteret efter afstand til CBS
const baner = golfbaner
  .map((bane) => ({ ...bane, afstand: afstandKm(CBS, bane) }))
  .sort((a, b) => a.afstand - b.afstand);

export default function BanerScreen({ navigation }) {
  const renderBane = ({ item }) => (
    <TouchableOpacity
      style={GlobalStyle.kort}
      onPress={() => navigation.navigate('BaneDetaljer', { baneId: item.id })}
    >
      <View style={GlobalStyle.kortRaekke}>
        <Text style={GlobalStyle.kortTitel}>{item.navn}</Text>
        <Ionicons name="chevron-forward" size={20} color={farver.graa} />
      </View>
      <Text style={GlobalStyle.tekstGraa}>{item.adresse}</Text>
      <View style={GlobalStyle.badgeRaekke}>
        <Text style={GlobalStyle.badge}>{item.huller} huller</Text>
        <Text style={GlobalStyle.badge}>{item.par ? `Par ${item.par}` : 'Par ikke oplyst'}</Text>
        <Text style={GlobalStyle.badge}>{item.afstand.toFixed(1)} km fra CBS</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={GlobalStyle.container}>
      <FlatList
        data={baner}
        keyExtractor={(item) => item.id}
        renderItem={renderBane}
        contentContainerStyle={GlobalStyle.indhold}
        ListHeaderComponent={<Text style={GlobalStyle.overskrift}>Golfbaner omkring CBS</Text>}
      />
    </View>
  );
}
