import React, { useState } from 'react';
import {
    Text, StyleSheet, View, FlatList,
    SafeAreaView, Modal, TouchableOpacity, TextInput
} from 'react-native';


const DATA = [

    { id: 1, text: " ida" },
    { id: 2, text: " ida" },
    { id: 3, text: " ida" },
    { id: 4, text: " ida" },


];
const EditListScreen = () => {
    const [data, setData] = useState(DATA);
    const [isRender, setisRender] = useState(false);
    const [isModalVisible, setisModalVivible] = useState(false);
    const [inputText, setinputText] = useState();
    const [editItem, seteditItem] = useState();

    const onPressItem = (item) => {
        setisModalVivible(true);
        setinputText(item.text)
        seteditItem(item.id)
    }


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        );
    }

    const handleEditItem = (editItem) => {
        const newData = data.map(item => {
            if (item.id === editItem) {
                item.text = inputText;
                return item;
            }
            return item;
        })
        setData(newData);
        setisRender(!isRender);
    }

    const onPressSaveEdit = () => {
        handleEditItem(editItem); // save input text to data
        setisModalVivible(false);// close modal
    }

    return (
        <SafeAreaView style={styles.contianer}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                extraData={isRender}
            />
            <Modal
                animationType='fade'
                visible={isModalVisible}
                onRequestClose={() => setisModalVivible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.text}>Change Data: </Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => setinputText(text)}
                        defaultValue={inputText}
                        editable={true}
                        multiline={false}
                        maxLength={50}
                    />
                    <TouchableOpacity
                        onPress={() => onPressSaveEdit()}
                        style={styles.touchableSave}
                    >
                        <Text style={styles.text}>SAVE</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    contianer: {
        flex: 1
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15,
    },
    textInput: {
        width: '90%',
        height: 70,
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 25
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableSave: {
        backgroundColor: 'green',
        paddingHorizontal: 100,
        alignItems: 'center',
        marginTop: 20
    }
});

export default EditListScreen;