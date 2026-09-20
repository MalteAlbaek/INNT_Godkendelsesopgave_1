import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import BanerScreen from './screens/BanerScreen';
import KortScreen from './screens/KortScreen';
import ScorekortScreen from './screens/ScorekortScreen';
import BaneDetaljerScreen from './screens/BaneDetaljerScreen';
import { farver } from './styles/GlobalStyle';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ikoner = {
  Baner: 'golf',
  Kort: 'map',
  Scores: 'trophy',
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => <Ionicons name={ikoner[route.name]} size={size} color={color} />,
        tabBarActiveTintColor: farver.groen,
        tabBarInactiveTintColor: farver.graa,
        headerStyle: { backgroundColor: farver.groen },
        headerTintColor: farver.hvid,
      })}
    >
      <Tab.Screen name="Baner" component={BanerScreen} />
      <Tab.Screen name="Kort" component={KortScreen} />
      <Tab.Screen name="Scores" component={ScorekortScreen} options={{ title: 'Scorekort' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: farver.groen },
          headerTintColor: farver.hvid,
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="BaneDetaljer" component={BaneDetaljerScreen} options={{ title: 'Bane' }} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
