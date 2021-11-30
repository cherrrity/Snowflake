import React, { useCallback } from "react";
import { StyleSheet, Text, SafeAreaView, Switch,} from "react-native";
import {useToggleThemeContext} from "../navigatiors/ToggleThemeProvider";
import {useTheme} from "@react-navigation/native";
import {Button, TopBar, View } from "../components/theme";

export const ThemeScreen = () => {
    const theme = useTheme();
    const toggleTheme = useToggleThemeContext();

    return (
        <SafeAreaView style = {styles.safe}>
        <View>
            <Button>
                <Text style = {[styles.text, {color: theme.colors.text, fontFamily: toggleTheme.fontFamily}]}>다크모드</Text>
                <Switch style={styles.button} value={theme.dark} onValueChange={toggleTheme.toggle}/>
            </Button>            
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {flex: 1, alignItems:"center"},
    button : {marginTop:-7},
    text: {fontSize: 15, width:100}
});