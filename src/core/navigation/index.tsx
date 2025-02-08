import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { LoginScreen, RegisterScreen } from '@containers';

const hideHeader= {headerShown:false}

export function NavigationApp() {
    //Crear stack
    const Stack= createNativeStackNavigator();

    //funcion de stack para la autenticacion login|register
    function AuthStack() {
        return(
            <Stack.Navigator initialRouteName='register'>
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
    const Tab= createBottomTabNavigator();
    //Funcion que crea los tabs para moverse dentro de la app
    function MainApp(){
        return(
            <Tab.Navigator>
                <Tab.Screen 
                name='Home'
                component={()=><Text>Hola desde Home</Text>}
                options={hideHeader}
            />
            <Tab.Screen 
                name='Profile'
                component={()=><Text>Hola desde home2</Text>}
                options={hideHeader}
            />
            </Tab.Navigator>
        )
    }

    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainApp'>
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