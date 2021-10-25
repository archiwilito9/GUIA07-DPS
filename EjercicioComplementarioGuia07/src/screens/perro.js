import React from 'react';
import { View, Text } from 'react-native';
export default function perro() {
    return (
        <View>
            <Text>Perros</Text>
            <View>
                <Image source={require('../img/perros/akita.jpg')} />
                <Text>Akita</Text>
            </View>
            <View>
                <Image source={require('../img/perros/lebrel.jpg')} />
                <Text>Lebrel</Text>
            </View>
            <View>
                <Image source={require('../img/perros/malamute.jpg')} />
                <Text>Malamute</Text>
            </View>
            <View>
                <Image source={require('../img/perros/pastor.jpg')} />
                <Text>Pastor</Text>
            </View>
            <View>
                <Image source={require('../img/perros/setter.jpg')} />
                <Text>Setter</Text>
            </View>
        </View>
    );
}