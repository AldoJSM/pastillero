import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen, RegisterScreen, HomeScreen, ProfileScreen, AddAlarmScreen } from '@containers';

const hideHeader = { headerShown: false }

export function NavigationApp() {
    //Crear stack
    const Stack = createNativeStackNavigator();

    //funcion de stack para la autenticacion login|register
    function AuthStack() {
        return (
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen
                    name='login'
                    component={LoginScreen}
                    options={hideHeader}
                />
                <Stack.Screen
                    name='register'
                    component={RegisterScreen}
                    options={hideHeader}
                />
            </Stack.Navigator>
        )
    }

    //Crea los tabs
    const Tab = createBottomTabNavigator();
    //Funcion que crea los tabs para moverse dentro de la app
    function MainApp({route}:any) {
        const { userId } = route.params || {};
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name='Alarmas'
                    component={HomeScreen}
                    options={hideHeader}
                    initialParams={{ userId }}
                />
                <Tab.Screen
                    name='Agregar'
                    component={AddAlarmScreen}
                    options={hideHeader}
                    initialParams={{ userId }}
                />
                <Tab.Screen
                    name='Perfil'
                    component={ProfileScreen}
                    options={hideHeader}
                    initialParams={{ userId }}
                />
            </Tab.Navigator>
        )
    }

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Authentication'>
                <Stack.Screen
                    name='Authentication'
                    component={AuthStack}
                    options={hideHeader}
                />
                <Stack.Screen
                    name='MainApp'
                    component={MainApp}
                    options={hideHeader}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}