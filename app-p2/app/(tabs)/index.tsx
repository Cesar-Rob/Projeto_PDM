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
                    rotaSSR='/produtos/espelho'
                />
                </View>
                
                <View style={{flexDirection:'row', gap:5}}>
                    <ProductCard
                    imagemSSR='https://down-br.img.susercontent.com/file/293f69688c3de12ac3fb59383fa460dd'
                    nomeSSR='Fita Cassete Guns N Roses'
                    textoSSR='Appetite for Destruction - Clássico do Rock'
                    precoSSR={0}
                    rotaSSR='/produtos/fitak7'
                />
                <ProductCard
                    imagemSSR='https://static.wixstatic.com/media/9b7d68_78152821d27a4d9291f81e17c222c0c6~mv2.jpg/v1/fill/w_647,h_466,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9b7d68_78152821d27a4d9291f81e17c222c0c6~mv2.jpg'
                    nomeSSR='Álbum de Figurinhas '
                    textoSSR='Oficial Copa do Mundo FIFA 2026'
                    precoSSR={399.90}
                    rotaSSR='/produtos/album'
                />
                </View>

                <View style={{flexDirection:'row', gap:5}}>
                    <ProductCard
                    imagemSSR='https://static.wixstatic.com/media/9b7d68_78152821d27a4d9291f81e17c222c0c6~mv2.jpg/v1/fill/w_768,h_553,al_c,q_85,usm_0.66_1.00_0.01/9b7d68_78152821d27a4d9291f81e17c222c0c6~mv2.jpg'
                    nomeSSR='Jogo Super Mario'
                    textoSSR='Mario Paint Super Nintendo Original'
                    precoSSR={189.90}
                    rotaSSR='/produtos/jogo'
                />
                <ProductCard
                    imagemSSR='https://i.pinimg.com/736x/9d/29/b5/9d29b5a5fdf5e400be9c1597f6e33fe3.jpg'
                    nomeSSR='Relógio de Bolso'
                    textoSSR='Relógio de Bolso Clássico em Bronze'
                    precoSSR={236.99}
                    rotaSSR='/produtos/relogio'
                />
                </View>
                <View style={{flexDirection:'row', gap:5}}>
                    <ProductCard
                    imagemSSR='https://i.pinimg.com/736x/31/63/16/316316316218a66a8db67e675099ec4f.jpg'
                    nomeSSR='Bule de Chá'
                    textoSSR='Bule de Chá em Porcelana Clássica'
                    precoSSR={0}
                    rotaSSR='/produtos/bule'
                />
                <ProductCard
                    imagemSSR=''
                    nomeSSR=''
                    textoSSR=''
                    precoSSR={0}
                    rotaSSR='/produtos/album'
                />
                </View>
                {/* <View style={{flexDirection:'row', gap:5}}>
                    <ProductCard
                    imagemSSR=''
                    nomeSSR=''
                    textoSSR=''
                    precoSSR={0}
                    rotaSSR='/produtos/album'
                />
                <ProductCard
                    imagemSSR=''
                    nomeSSR=''
                    textoSSR=''
                    precoSSR={0}
                    rotaSSR='/produtos/album'
                />
                </View> */}
                
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