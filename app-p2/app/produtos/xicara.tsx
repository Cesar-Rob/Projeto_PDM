import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Feather from '@expo/vector-icons/Feather';


export default function LayoutBase() {

    let nomeSSR: string = "Xícara de Porcelana";
    let subTituloSSR: string = "Xícara de Porcelana com fios de ouro";
    let descricaoSSR: string = "Esta xícara é feita de porcelana de alta qualidade. Perfeita para apreciar seu café com estilo e relaxar enquanto observa os pobres, é babado.";
    let precoSSR: number = 29.99;
    let imagemSSR: string = "https://images.tcdn.com.br/img/img_prod/608666/antiga_xicara_de_cafe_porcelana_vista_alegre_creme_e_ouro_20571_1_ec2e798fb565d07ea4b4501327c447ef.jpg";


    return (

        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={styles.scroll}
            >

                <View>
                    <View style={styles.container1}>
                        <Image
                            source={{ uri: imagemSSR }}
                            style={styles.imagem}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.container2}>
                        <View style={{ flex: 1, }}>
                            <Text style={styles.nome}>{nomeSSR}</Text>
                            <Text style={styles.subTitulo}>{subTituloSSR}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center', }}>
                            <Text style={styles.starIcon}>★</Text>
                            <Text style={styles.ratingText}>4.5 <Text style={styles.ratingCount}>(230)</Text></Text>
                        </View>

                    </View>

                </View>
                <View style={styles.container3}>
                    <Text style={styles.descr}>Descrição:</Text>
                    <Text style={styles.descricao}>{descricaoSSR}</Text>
                </View>
                    
                

            </ScrollView>

            <View style={styles.container4}>
                <View>
                    <Text style={styles.precoLabel}>Preço</Text>
                    <Text style={styles.preco}>R$ {precoSSR.toFixed(2)} </Text>
                </View>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Comprar agora</Text>
                </TouchableOpacity>

            </View>


        </View >


    );
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F7EFE1',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
    },
    iconeBotao: {
        padding: 10,
    },
    iconBot: {
        fontSize: 23,
        color: '#4E3424',
        fontWeight: '300',
    },
    container1: {
        margin: 5,
        height: 350,
        backgroundColor: '#F7EFE1',
    },
    imagem: {
        width: '100%',
        height: 350,
        borderRadius: 20,
    },  
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
        marginLeft: 20,
    },
    nome: {
        marginTop: 12,
        alignSelf: 'flex-start',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4E3424',

    },
    subTitulo: {
        fontSize: 14,
        color: '#8B5A2B', 
        marginTop: 4,
    },
    starIcon: {
        color: '#C8933B', 
        fontSize: 18,
        marginRight: 5,
    },
    ratingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4E3424',
    },
    ratingCount: {
        fontSize: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

   container3: {
    marginLeft: 20,
    marginRight: 20,
   },
    descr: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4E3424',
        marginBottom: 10,
    
    },
    descricao: {
       fontSize: 15,
        color: '#666',
        lineHeight: 24,
        marginBottom: 25, 
    },

    container4: {
        margin: 5,
        padding: 20,
        backgroundColor: '#F7EFE1',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',



    },
    precoLabel: {
        fontSize: 16,
        fontFamily: 'oldstandard-regular',
        color: '#5d5b5b',
    },
    preco: {

        fontSize: 24,
        fontWeight: 'bold',
        color:'#6b4e49',
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: '#4E3424',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
    },
    scroll: {
        gap: 20,
    }
});




