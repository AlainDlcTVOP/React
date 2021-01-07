import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {

    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />

            <Text>Image Score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});



export default ImageDetail;