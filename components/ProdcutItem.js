import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

const ProductItem = ({product, onProductRemove}) => {

    const handleRemoveProduct = (product) => {
        onProductRemove(product)
    }
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{product.title}</Text>
            <TouchableOpacity onPress={() => handleRemoveProduct(product)}>
                <MaterialIcons name="delete" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex:1,
        flexDirection: "row",
        backgroundColor: "white",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius:5,
        marginVertical:5,
        marginHorizontal: 5,
        paddingHorizontal: 15,
        shadowColor: "black",
        shadowOffset: {
            width:0,
            height:2
        },
        shadowRadius:6,
        elevation: 5,
    },
    itemText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: 'center',
        padding:0,
    }
});

export default ProductItem;