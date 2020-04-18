import React from 'react';
import { ScrollView, View, ImageBackground } from 'react-native';

import Animation from '../../components/animation/animation';

import styles from './home-styles'

export default function Home() {

    return (
        <View style={styles.container}>

            <ScrollView>

                <View style={styles.topContainer}>

                    <ImageBackground style={styles.image} source={require('../../../assets/image.png')}>

                        <Animation color='#7bd645' numPulses={2} diameter={200} speed={20} duration={2000} />

                    </ImageBackground>

                </View>

            </ScrollView>

        </View>
    );
}

