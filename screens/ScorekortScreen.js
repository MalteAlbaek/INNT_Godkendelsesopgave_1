import { useCallback, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { GlobalStyle, farver } from '../styles/GlobalStyle';
import { hentScores, sletScore } from '../utils/scoreStorage';

function parTekst(score) {
  if (!score.par) return { tekst: 'Par ikke oplyst', stil: GlobalStyle.tekstGraa };
  const diff = score.slag - score.par;
  if (diff === 0) return { tekst: 'Par', stil: GlobalStyle.tekstGraa };
  return diff < 0
    ? { tekst: `${diff} under par`, stil: GlobalStyle.underPar }
    : { tekst: `+${diff} over par`, stil: GlobalStyle.overPar };
}

export default function ScorekortScreen() {
  const [scores, setScores] = useState([]);

  // Hent igen hver gang fanen vises, så nye scores kommer med
  useFocusEffect(
    useCallback(() => {
      hentScores().then(setScores);
    }, [])
  );

  const slet = async (id) => {
    await sletScore(id);
    setScores((aktuelle) => aktuelle.filter((s) => s.id !== id));
  };

  const bedste = scores.length ? Math.min(...scores.map((s) => s.slag)) : '–';
  const snit = scores.length
    ? (scores.reduce((sum, s) => sum + s.slag, 0) / scores.length).toFixed(1)
    : '–';

  const renderScore = ({ item }) => {
    const { tekst, stil } = parTekst(item);
    return (
      <View style={[GlobalStyle.kort, GlobalStyle.kortRaekke]}>
        <View style={{ flexShrink: 1 }}>
          <Text style={GlobalStyle.kortTitel}>{item.baneNavn}</Text>
          <Text style={GlobalStyle.tekstGraa}>{new Date(item.dato).toLocaleDateString('da-DK')}</Text>
          <Text style={stil}>{tekst}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={GlobalStyle.scoreTal}>{item.slag}</Text>
          <TouchableOpacity style={GlobalStyle.knapSlet} onPress={() => slet(item.id)}>
            <Ionicons name="trash-outline" size={22} color={farver.roed} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={GlobalStyle.container}>
      <FlatList
        data={scores}
        keyExtractor={(item) => item.id}
        renderItem={renderScore}
        contentContainerStyle={GlobalStyle.indhold}
        ListHeaderComponent={
          <View>
            <Text style={GlobalStyle.overskrift}>Mine scores</Text>
            <View style={GlobalStyle.statRaekke}>
              <View style={GlobalStyle.statBoks}>
                <Text style={GlobalStyle.statTal}>{scores.length}</Text>
                <Text style={GlobalStyle.tekstGraa}>Runder</Text>
              </View>
              <View style={GlobalStyle.statBoks}>
                <Text style={GlobalStyle.statTal}>{bedste}</Text>
                <Text style={GlobalStyle.tekstGraa}>Bedste</Text>
              </View>
              <View style={GlobalStyle.statBoks}>
                <Text style={GlobalStyle.statTal}>{snit}</Text>
                <Text style={GlobalStyle.tekstGraa}>Gennemsnit</Text>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={
          <Text style={GlobalStyle.tomTekst}>
            Ingen scores endnu. Vælg en bane under "Baner" og gem din første score.
          </Text>
        }
      />
    </View>
  );
}
