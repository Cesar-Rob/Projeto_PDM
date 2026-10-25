import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function LayoutBase() {

    let nomeSSR: string = "Espelho da Barbie";
    let subTituloSSR: string = "Espelho da Barbie Castelo de Diamante";
    let descricaoSSR: string = "Este espelho da Barbie é feito de vidro de alta qualidade, com um design elegante e icônico. Perfeito para se admirar com estilo enquanto farma muita aura.";
    let precoSSR: number = 199.99;
    let imagemSSR: string = "https://i.pinimg.com/736x/76/6c/d9/766cd98caf8a834603ba287844bd5400.jpg";


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
                            <Text style={styles.ratingText}>5.0 <Text style={styles.ratingCount}>(1000)</Text></Text>
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




