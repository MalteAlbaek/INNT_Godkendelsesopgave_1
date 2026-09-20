import AsyncStorage from '@react-native-async-storage/async-storage';

const NOGLE = '@golf_scores';

export async function hentScores() {
  try {
    const json = await AsyncStorage.getItem(NOGLE);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    return [];
  }
}

export async function gemScore(score) {
  const scores = await hentScores();
  const ny = { id: String(Date.now()), dato: new Date().toISOString(), ...score };
  await AsyncStorage.setItem(NOGLE, JSON.stringify([ny, ...scores]));
  return ny;
}

export async function sletScore(id) {
  const scores = await hentScores();
  await AsyncStorage.setItem(NOGLE, JSON.stringify(scores.filter((s) => s.id !== id)));
}
