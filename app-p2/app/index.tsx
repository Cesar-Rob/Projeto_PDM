import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {useRouter} from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela antes do login pusheen</Text>
      <Text onPress={()=>router.push('./auth/')}>Ir para tela login</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});