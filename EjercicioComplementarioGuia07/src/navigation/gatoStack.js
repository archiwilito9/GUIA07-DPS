import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import gato from '../screens/gato';
const Stack = createStackNavigator();
export default function gatoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="gato" component={gato}
                options={{ title: 'Gato' }} />
        </Stack.Navigator>
    );
}