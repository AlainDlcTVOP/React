import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetails';
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Alice"
                imageSource={require('../../assets/kawa.jpg')}
                score={100}
            />
        </View>
    );
};

const styles = StyleSheet.create({});



export default ImageScreen;