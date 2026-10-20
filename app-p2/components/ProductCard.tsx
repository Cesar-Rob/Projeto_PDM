import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter, type Href } from "expo-router";

type propsProductCard = {
    imagemSSR: string,
    nomeSSR: string,
    textoSSR: string,
    precoSSR: number,
    rotaSSR: Href,
}

export default function ProductCard({ imagemSSR, nomeSSR, textoSSR, precoSSR, rotaSSR }: propsProductCard) {
    const router = useRouter();



    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imagemSSR }}
                style={styles.imagem}
            />
            <Text style={styles.nome}>{nomeSSR}</Text>
            <Text style={styles.texto}>{textoSSR}</Text>
            <Text style={styles.preco}>R$ {precoSSR}</Text>
            <TouchableOpacity style={styles.botao} onPress={()=> router.push(rotaSSR)}>
                Saber Mais
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 380,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center'
    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 10
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    texto: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10
    },
    preco: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    botao: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },

})