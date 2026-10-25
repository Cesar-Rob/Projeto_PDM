import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { useRouter } from "expo-router";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Objetos encontrados:</Text>
            <TextInput placeholder="Pesquisar objetos..." style={styles.searchInput} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >
                <View style={{flexDirection:'row', gap:5}}>
                    <ProductCard
                    imagemSSR='https://images.tcdn.com.br/img/img_prod/608666/antiga_xicara_de_cafe_porcelana_vista_alegre_creme_e_ouro_20571_1_ec2e798fb565d07ea4b4501327c447ef.jpg'
                    nomeSSR='Xícara de Café'
                    textoSSR='Uma bela xícara de café feita de porcelana.'
                    precoSSR={29.99}
                    rotaSSR='/produtos/xicara'
                />
                <ProductCard
                    imagemSSR='https://i.pinimg.com/736x/54/4f/ba/544fba56798905a1a2587a8fd13d8d84.jpg'
                    nomeSSR='Espelho da Barbie'
                    textoSSR='Um épico espelho da Barbie.'
                    precoSSR={199.99}
                    rotaSSR='/produtos/fitak7'
                />
                </View>
                
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
        fontFamily: 'Arial',
    },
    scroll: {
        padding: 10,
        gap: 5,
    },

    searchInput: {
        width: '90%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        fontFamily: 'Arial',
    }
})