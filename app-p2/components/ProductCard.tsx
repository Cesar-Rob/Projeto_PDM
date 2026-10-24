import React from "react";
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
            <View style={styles.infoContainer}>
                <Text style={styles.nome} numberOfLines={1}>{nomeSSR}</Text>
                <Text style={styles.texto} numberOfLines={2}>{textoSSR}</Text>
                <Text style={styles.preco}>R$ {precoSSR}</Text>

                <TouchableOpacity style={styles.botao} onPress={() => router.push(rotaSSR)}>
                    <Text style={styles.textoBotao}>Saber Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        backgroundColor: '#E8D9B8',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
    },
    imagem: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 10,
    },
    infoContainer: {
        marginTop: 10,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    texto: {
        fontSize: 13,
        color: '#666',
        marginBottom: 8,
    },
    preco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    botao: {
        alignItems: 'center',
        backgroundColor: '#8B5A2B',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    textoBotao: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    }
});