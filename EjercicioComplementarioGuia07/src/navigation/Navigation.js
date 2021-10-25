import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import gatoStack from './perroStack';
import perroStack from './perroStack';

const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="gato" component={gatoStack} options={{ title: 'Gato' }} />
            <Tab.Screen name="contact" component={perroStack} options={{ title: 'Perro' }} />
        </Tab.Navigator>
    );
}