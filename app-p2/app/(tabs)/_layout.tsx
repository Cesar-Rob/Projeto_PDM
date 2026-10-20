import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

export default function RootTabsLayout() {

    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                height: 60,
                backgroundColor: '#4A3228',
            },
            tabBarLabelStyle: {
                fontSize: 18,
                fontFamily: 'Arial',
            },
            tabBarActiveTintColor: '#C9962B',
            tabBarInactiveTintColor: '#E8D9B8',
            
            headerStyle: {
                backgroundColor: '#4A3228',
            },
            headerTitleStyle: {
                fontSize: 20,
                fontFamily: 'Arial',
            },
            headerTintColor: '#C9962B',
            


        }}

        >

            <Tabs.Screen name="index"
                options={{
                    tabBarIcon: (({ color }) => (<Feather name="home" size={24} color={color} />)),
                    headerTitle: 'Home',
                    title: 'Tela Principal',

                }}
            />
            <Tabs.Screen name="carrinho"
                options={{
                    tabBarIcon: (({ color }) => (<Feather name="shopping-cart" size={24} color={color} />))
                }}
            />
            <Tabs.Screen name="perfil"
                options={{
                    tabBarIcon: (({ color }) => (<Feather name="user" size={24} color={color} />))
                }}
            />
        </Tabs>
    )
}