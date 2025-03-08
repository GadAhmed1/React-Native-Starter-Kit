import { View, Text, StyleSheet } from 'react-native';

import { HelloWave } from '../../components/HelloWave';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.Continer}>
      <Text style={styles.TextName}>PizzaName</Text>
      <Text style={styles.Price}>$20.32</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TextName:{
    color:'red'
  },
  Price:{
    color:'green'
  },
  Continer:{
    backgroundColor:"white",
    hi
  }
});
