import React from 'react';
import { View, Text } from 'react-native';
export default function gato() {
    return (
        <View>
            <Text>Gatos</Text>
            <View>
                <Image source={require('../img/gatos/angoraTurco.jpg')} />
                <Text>Angora Turco</Text>
            </View>
            <View>
                <Image source={require('../img/perros/colorPoint.jpg')} />
                <Text>Color Point</Text>
            </View>
            <View>
                <Image source={require('../img/perros/habana.jpg')} />
                <Text>Habana</Text>
            </View>
            <View>
                <Image source={require('../img/perros/minskin.jpg')} />
                <Text>Minskin</Text>
            </View>
            <View>
                <Image source={require('../img/perros/vanTurco.jpg')} />
                <Text>Van Turco</Text>
            </View>
        </View>
    );
}