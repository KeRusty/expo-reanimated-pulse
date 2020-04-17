import React from 'react';
import { SafeAreaView, ScrollView, View, ImageBackground } from 'react-native';

import styles from './home-styles'

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <View style={styles.topContainer}>

                    <ImageBackground style={styles.image} source={require('../../../assets/image.png')} />

                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

