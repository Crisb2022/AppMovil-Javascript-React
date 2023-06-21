import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/Navigation.js";
import { NavigationContainer} from '@react-navigation/native';
import ProfileCard from './src/components/home/ProfileCard.js';

export default function App() {

  
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});