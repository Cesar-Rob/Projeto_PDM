import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router'; 

const { width } = Dimensions.get('window');

export default function WelcomeSSR() {
    const roteadorSSR = useRouter();
    const [indiceAtivoSSR, setIndiceAtivoSSR] = useState<number>(0);
    const imagensCarrosselSSR = [
        'https://media.istockphoto.com/id/945857994/pt/foto/antique-clock-stand-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=KzIKF1vVHaEqnHHRE8KlsHqwL-PbRMY3U0wCZ-aD-58=',
        'https://images.unsplash.com/photo-1606241018160-4985a8ab5dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        'https://images.unsplash.com/photo-1639148604826-8c8afc2aefe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
    ];

    const aoMudarIndiceSSR = (event: any) => {
        const larguraSlideSSR = event.nativeEvent.layoutMeasurement.width;
        const posicaoAtualSSR = event.nativeEvent.contentOffset.x;
        const indexCalculadoSSR = Math.round(posicaoAtualSSR / larguraSlideSSR);
        setIndiceAtivoSSR(indexCalculadoSSR);
    };

    return (
        <View style={stylesSSR.container}>
            
          
            <View style={stylesSSR.containerCarrosselSSR}>
                <ScrollView 
                    horizontal 
                    pagingEnabled 
                    showsHorizontalScrollIndicator={false}
                    onScroll={aoMudarIndiceSSR}
                    scrollEventThrottle={16}
                >
                    {imagensCarrosselSSR.map((imagemSSR, indexSSR) => (
                        <Image 
                            key={indexSSR}
                            source={{ uri: imagemSSR }} 
                            style={stylesSSR.imagemSlideSSR} 
                            resizeMode="cover"
                        />
                    ))}
                </ScrollView>
            </View>

        
            <View style={stylesSSR.contentContainer}>
            
                <Text style={stylesSSR.titulo}>
                    Achados, Perdidos & Curiosidades
                </Text>

                <Text style={stylesSSR.subtitulo}>
                    Explore itens raros e histórias fascinantes. O extraordinário está à distância de um clique!
                </Text>

                {/* Indicadores de Paginação Dinâmicos (Dots) */}
                <View style={stylesSSR.pagination}>
                    {imagensCarrosselSSR.map((_, indexSSR) => (
                        <View 
                            key={indexSSR} 
                            style={[
                                stylesSSR.dot, 
                                indiceAtivoSSR === indexSSR && stylesSSR.dotActive
                            ]} 
                        />
                    ))}
                </View>
            
      
                <TouchableOpacity 
                    style={stylesSSR.botao} 
                    onPress={() => roteadorSSR.replace('/auth')}
                >
                    <Text style={stylesSSR.textoBotao}>Começar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const stylesSSR = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A3228', 
    },
    containerCarrosselSSR: {
        width: '100%',
        height: '50%',
    },
    imagemSlideSSR: {
        width: width,
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 40,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F4EBD6', 
        textAlign: 'center',
        marginTop: 10,
    },
    subtitulo: {
        fontSize: 14,
        color: '#E8D9B8', 
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    pagination: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(232, 217, 184, 0.4)',
    },
    dotActive: {
        width: 24,
        backgroundColor: '#E8D9B8',
    },
    botao: {
        backgroundColor: '#8B5A2B', 
        width: '100%',
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#F4EBD6', 
        fontSize: 18,
        fontWeight: 'bold',
    },
});
