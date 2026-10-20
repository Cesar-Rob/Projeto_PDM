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
            <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'center' }}>
                <Text style={styles.nome}>{nomeSSR}</Text>
            <Text style={styles.texto}>{textoSSR}</Text>
            <Text style={styles.preco}>R$ {precoSSR}</Text>
            <TouchableOpacity style={styles.botao} onPress={()=> router.push(rotaSSR)}>
                Saber Mais
            </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        //height: 150,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#E8D9B8',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        flexDirection: 'row',
    },
    imagem: {
            borderRadius: 10,
            width: '50%',
            height: '80%',
            marginRight: 0
    },
    nome: {
        
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    texto: {
        fontSize: 12,
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
        backgroundColor: '#8B5A2B',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },

})