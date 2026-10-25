import { Stack } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from "expo-router";
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
                    headerLeft: () => <Feather name="chevron-left" size={24} style={{ marginLeft: 20 }} onPress={() => router.back()} />,
                    headerRight: () => <Feather name="heart" size={24} style={{ marginRight: 20 }} />
                }}
            />
            <Stack.Screen name="produtos/espelho"
                options={{
                    title: '',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#F7EFE1' },
                    headerLeft: () => <Feather name="chevron-left" size={24} style={{ marginLeft: 20 }} onPress={() => router.back()} />,
                    headerRight: () => <Feather name="heart" size={24} style={{ marginRight: 20 }} />
                }}
            />
            <Stack.Screen />
        </Stack>
    )
}