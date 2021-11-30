import React from "react";
import {StyleSheet, SafeAreaView, View, Text} from "react-native";
import type {FC} from "react";
import {DrawerContentComponentProps, DrawerContentScrollView} from "@react-navigation/drawer";

const title = "DrawerContent";
const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
    console.log(Object.keys(props));
    return (
    <DrawerContentScrollView style = {styles.safe}>
        <View style = {styles.content}>
            <Text style = {styles.text}>{title}</Text>
        </View>
    </DrawerContentScrollView>);
}

export default DrawerContent;

const styles = StyleSheet.create({
    safe: {flex: 1},
    text: {fontSize: 20},
    content: {flex: 1, alignItems: "center", justifyContent:"center"}
})