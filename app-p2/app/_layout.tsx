import { Stack } from "expo-router";

export default function RootStackLayout(){
    return(
        <Stack
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="index"
            options={{
                headerShown: true,
            }}
            
            />

            <Stack.Screen name="auth/index"
            options={{
                headerShown: true,
            }}
            
            />
        </Stack>
    )
}