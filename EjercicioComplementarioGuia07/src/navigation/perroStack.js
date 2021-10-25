import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import perro from '../screens/perro';
const Stack = createStackNavigator();
export default function perroStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="perro" component={perro}
                options={{ title: 'Perro' }} />
        </Stack.Navigator>
    );
}