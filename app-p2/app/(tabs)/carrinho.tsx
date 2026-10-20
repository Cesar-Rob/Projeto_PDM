import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {useRouter} from "expo-router";
import Feather from '@expo/vector-icons/Feather';

export default function Carrinho() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center',justifyContent: 'center', marginBottom: 20, backgroundColor: '#E8D9B8', padding: 20, borderRadius: 100, borderWidth: 2, borderStyle: 'dashed', borderColor: '#4A3228' }}>
        <Feather name="shopping-cart" size={50} color="#8B5A2B"  />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, paddingHorizontal: 20 }}>
        <Text style={styles.title}>Nada por aqui ainda</Text>
        <Text style={styles.subtitle}>Parece que você ainda não adicionou nenhum item ao seu carrinho.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F4EBD6',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Arial',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'center',

  },

});