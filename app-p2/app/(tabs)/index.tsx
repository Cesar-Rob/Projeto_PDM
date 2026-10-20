import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {useRouter} from "expo-router";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Objetos encontrados:</Text>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      >
        <ProductCard
      imagemSSR='https://images.tcdn.com.br/img/img_prod/608666/antiga_xicara_de_cafe_porcelana_vista_alegre_creme_e_ouro_20571_1_ec2e798fb565d07ea4b4501327c447ef.jpg'
      nomeSSR='Xícara de Café'
      textoSSR='Uma bela xícara de café feita de porcelana.'
      precoSSR={29.90}
      rotaSSR='/produtos/xicara'
      />
      </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4EBD6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scroll: {
    padding: 10,
    gap: 0,
  }
});