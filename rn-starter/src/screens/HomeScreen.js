import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>KING ALAIN DLC</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" />

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to ListScreen Demo" />

      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to ImageScreen Demo" />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo" />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo" />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo" />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo" />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo" />
      <Button
        onPress={() => navigation.navigate('Picker')}
        title="Go to Image picker Demo" />
      <Button
        onPress={() => navigation.navigate('Edit')}
        title="Go to Edit Flat Demo" />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,

  }
});


export default HomeScreen;

