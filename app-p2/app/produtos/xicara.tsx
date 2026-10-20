import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function LayoutBase() {

    let nomeSSR: string = "Xícara";
    let descricaoSSR: string = "Esta xícara de café é feita de porcelana de alta qualidade, com um design elegante e detalhes em creme e ouro. Perfeita para apreciar seu café com estilo.";
    let precoSSR: number = 19.99;
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
                <Text style={styles.descr}>Descrição:</Text>
                <Text style={styles.descricao}>{descricaoSSR}</Text>

            </View>
            <View style={styles.container4}>
                <View>
                    <Text style={styles.precoLabel}>Preço</Text>
                    <Text style={styles.preco}>R$ {precoSSR.toFixed(2)} </Text>
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
        backgroundColor: '#F4EBD6',
        height: '100%',
        width: '100%',
    },

    container2: {
        margin: 5,
        height: '50%',
        padding: 5,
        backgroundColor: '#E8D9B8',
        borderRadius: 10,
        alignItems: 'center',



    },
    container3: {
        margin: 5,
        height: '35%',
        backgroundColor: '#E8D9B8',
        borderRadius: 10,
        

    },
    container4: {
        margin: 5,
        padding: 20,
        backgroundColor: '#E8D9B8',
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
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        
    },
    descr: {
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        marginVertical: 10,
        marginLeft: 10,
       fontFamily: 'Sans-Serif-Geometric',
    },
    descricao: {
        fontFamily: 'Arial',
        fontSize: 23,
        marginVertical: 10,
        marginLeft: 10,

    },
    precoLabel: {
        fontSize: 15,
        fontFamily: 'oldstandard-regular',
    },
    preco: {
    
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'oldstandard-regular',
    },
    botao: {
  
        backgroundColor: '#8B5A2B',
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




