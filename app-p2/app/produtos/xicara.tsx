import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function LayoutBase() {

    let nomeSSR: string = "Xícara";
    let descriptSSR: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    let priceSSR: number = 19.99;
    let imagemSSR: string = "https://images.tcdn.com.br/img/img_prod/608666/antiga_xicara_de_cafe_porcelana_vista_alegre_creme_e_ouro_20571_1_ec2e798fb565d07ea4b4501327c447ef.jpg";


    return (

        <View style={styles.container}>
            <View style={styles.container2}>
                <Image
                    source={{ uri: imagemSSR }}
                    style={styles.imagem}
                />
                <Text style={styles.nome}>{nomeSSR}</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.descript}>{descriptSSR}</Text>

            </View>
            <View style={styles.container4}>
                <View>
                    <Text style={styles.priceLabel}>Preço</Text>
                    <Text style={styles.price}>R$ {priceSSR.toFixed(2)} </Text>
                </View>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Buy now</Text>
                </TouchableOpacity>

            </View>



        </View >



    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#aba095',
        height: '100%',
        width: '100%',
    },

    container2: {
        margin: 5,
        height: '50%',
        padding: 5,
        backgroundColor: '#E8DDD2',
        borderRadius: 10,
        alignItems: 'center',



    },
    container3: {
        margin: 5,
        height: '34%',
        padding: 0,
        backgroundColor: '#E8DDD2',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container4: {
        margin: 5,
        padding: 10,
        backgroundColor: '#E8DDD2',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    


    },
    imagem: {
        width: '100%',
        height: '90%',
        borderRadius: 10,
        marginBottom: 10,
    },
    nome: {
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'oldstandard-regular',
    },
    descript: {
        fontSize: 25,
        fontFamily: 'oldstandard-regular',
        textAlign: 'center',
        marginVertical: 10,
    },
    priceLabel: {
        fontSize: 15,
        fontFamily: 'oldstandard-regular',
    },
    price: {
    
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'oldstandard-regular',
    },
    botao: {
  
        backgroundColor: '#a6c5e7',
        padding: 10,
        borderRadius: 20,
        width: 100,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});




