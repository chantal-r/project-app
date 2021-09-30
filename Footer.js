import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Button, View, ImageBackground } from 'react-native';

import * as RootNavigation from './RootNavigation'

export default function Footer(props) {
    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('welcome')}
            ><Text>welcome</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('notes')}
            ><Text>notes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#8FBC8F',
    },
    button: {
        padding: 20
    }
});