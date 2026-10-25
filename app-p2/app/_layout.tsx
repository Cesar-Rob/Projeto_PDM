import { Stack, useRouter } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from "react-native";
export default function RootStackLayout() {
    const router = useRouter();
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index"
                options={{
                    headerShown: false,
                }}

            />

            <Stack.Screen name="auth/index"
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen name="produtos/xicara"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <TouchableOpacity><Feather name="chevron-left" size={20} style={{
                        marginLeft: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} onPress={() => router.back()} /> </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity> <Feather name="heart" size={20} style={{
                        marginRight: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} /> </TouchableOpacity>
                }}
            />
            <Stack.Screen name="produtos/espelho"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <TouchableOpacity><Feather name="chevron-left" size={20} style={{
                        marginLeft: 20,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} onPress={() => router.back()} /> </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity> <Feather name="heart" size={20} style={{
                        marginRight: 20, 
                        color: '#4E3424',
                        fontWeight: '300',
                    }} /> </TouchableOpacity>
                }}
            />
            <Stack.Screen name="produtos/album"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <TouchableOpacity><Feather name="chevron-left" size={20} style={{
                        marginLeft: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} onPress={() => router.back()} /> </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity> <Feather name="heart" size={20} style={{
                        marginRight: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} /> </TouchableOpacity>
                }}
            />
            <Stack.Screen name="produtos/fitak7"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <TouchableOpacity><Feather name="chevron-left" size={20} style={{
                        marginLeft: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} onPress={() => router.back()} /> </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity> <Feather name="heart" size={20} style={{
                        marginRight: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} /> </TouchableOpacity>
                }}
            />
            <Stack.Screen name="produtos/jogo"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <TouchableOpacity><Feather name="chevron-left" size={20} style={{
                        marginLeft: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} onPress={() => router.back()} /> </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity> <Feather name="heart" size={20} style={{
                        marginRight: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} /> </TouchableOpacity>
                }}
            />
            <Stack.Screen name="produtos/relogio"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <TouchableOpacity><Feather name="chevron-left" size={20} style={{
                        marginLeft: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} onPress={() => router.back()} /> </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity> <Feather name="heart" size={20} style={{
                        marginRight: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} /> </TouchableOpacity>
                }}
            />
            <Stack.Screen name="produtos/bule"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <TouchableOpacity><Feather name="chevron-left" size={20} style={{
                        marginLeft: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} onPress={() => router.back()} /> </TouchableOpacity>,
                    headerRight: () => <TouchableOpacity> <Feather name="heart" size={20} style={{
                        marginRight: 24,
                        color: '#4E3424',
                        fontWeight: '300',
                    }} /> </TouchableOpacity>
                }}
            />
            <Stack.Screen />
        </Stack>
    )
}