import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput, 
    View, 
    TouchableOpacity, 
    ImageBackground 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const roteadorSSR = useRouter();

    const [emailSSR, setEmailSSR] = useState<string>('');
    const [senhaSSR, setSenhaSSR] = useState<string>('');
    const [exibirSSR, setExibirSSR] = useState<boolean>(false);
    const [mensagemErroSSR, setMensagemErroSSR] = useState<string>('');
    const [sucessoSSR, setSucessoSSR] = useState<boolean>(false);

    const emailCertoSSR = "achados@pdm.com";
    const senhaCertaSSR = "123456";

    const exibirSenhaSSR = () => {
        setExibirSSR(!exibirSSR);
    };

    const validarLoginSSR = () => {
        if (!emailSSR.trim() || !senhaSSR.trim()) {
            setMensagemErroSSR('Por favor, preencha todos os campos.');
            setSucessoSSR(false);
            return;
        }

        if (emailSSR !== emailCertoSSR) {
            setMensagemErroSSR('E-mail incorreto. Verifique e tente novamente.');
            setSucessoSSR(false);
            return;
        }

        if (senhaSSR !== senhaCertaSSR) {
            setMensagemErroSSR('Senha incorreta.');
            setSucessoSSR(false);
            return;
        }

        setMensagemErroSSR('');
        setSucessoSSR(true);

        setTimeout(() => {
            roteadorSSR.replace('/(tabs)');
        }, 1000);
    };

    const imagemFundoSSR = 'https://plus.unsplash.com/premium_photo-1661297433665-870517c1cf6f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D';

    return (
        <ImageBackground
            source={{ uri: imagemFundoSSR }}
            resizeMode="cover"
            style={stylesSSR.container}
        >
            <View style={stylesSSR.overlay}>

                <Text style={stylesSSR.titulo}>Descubra o inimaginável!</Text>
                <Text style={stylesSSR.subtitulo}>Faça login para continuar</Text>

                <View style={stylesSSR.ViewInputEmail}>
                    <Feather name="mail" size={20} color="#4A3228" style={stylesSSR.iconeEsquerdaSSR} />
                    <TextInput
                        style={stylesSSR.InputEmail}
                        onChangeText={setEmailSSR}
                        value={emailSSR}
                        placeholder='Email'
                        placeholderTextColor='#7D6B5D'
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                </View>

                <View style={stylesSSR.ViewInputSenha}>
                    <Feather name="lock" size={20} color="#4A3228" style={stylesSSR.iconeEsquerdaSSR} />
                    <TextInput
                        style={stylesSSR.InputSenha}
                        onChangeText={setSenhaSSR}
                        value={senhaSSR}
                        placeholder='Senha'
                        placeholderTextColor='#7D6B5D'
                        secureTextEntry={!exibirSSR}
                    />
                    <TouchableOpacity onPress={exibirSenhaSSR}>
                        {exibirSSR ? (
                            <Feather name="eye" size={20} color="#4A3228" />
                        ) : (
                            <Feather name="eye-off" size={20} color="#4A3228" />
                        )}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={stylesSSR.botaoEntrar} onPress={validarLoginSSR}>
                    <Text style={stylesSSR.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                {mensagemErroSSR !== '' && (
                    <Text style={stylesSSR.errado}>{mensagemErroSSR}</Text>
                )}

                {sucessoSSR && (
                    <Text style={stylesSSR.certo}>Login realizado com sucesso! Redirecionando...</Text>
                )}

            </View>
        </ImageBackground>
    );
}

const stylesSSR = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4A3228',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(74, 50, 40, 0.85)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F4EBD6',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 14,
        color: '#E8D9B8',
        textAlign: 'center',
        marginBottom: 30,
    },
    ViewInputEmail: {
        backgroundColor: '#E8D9B8',
        width: '100%',
        height: 52,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    InputEmail: {
        flex: 1,
        fontSize: 16,
        color: '#4A3228',
        height: '100%',
        marginLeft: 10,
    },
    ViewInputSenha: {
        backgroundColor: '#E8D9B8',
        width: '100%',
        height: 52,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    InputSenha: {
        flex: 1,
        fontSize: 16,
        color: '#4A3228',
        height: '100%',
        marginLeft: 10,
    },
    iconeEsquerdaSSR: {
        marginRight: 4,
    },
    botaoEntrar: {
        backgroundColor: '#8B5A2B',
        width: '100%',
        height: 52,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#F4EBD6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errado: {
        color: '#FF6B6B',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },
    certo: {
        color: '#6B6B3A',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    },
});