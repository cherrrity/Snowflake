import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


//Views
import {MainScreen, RankScreen, MyScreen, BoardScreen, SettingScreen, FontScreen, ThemeScreen, BoardListScreen, BoardDetailScreen} from '../views';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Board } from "../components/theme";
import DrawerContent from "./DrawerContent"

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function BoardListDrawerNavigator(){
    return (
        // 게시판 이름 받아서 name? 대신 출력해야 함
        <Drawer.Navigator drawerContent = {(props) =>
            <DrawerContent {...props}/>}>
        </Drawer.Navigator>
        );
}

export function BoardNavigator(){
    return (
        // 게시판 이름 받아서 name? 대신 출력해야 함
    <Stack.Navigator>
        <Stack.Screen name = "목록" component={BoardListScreen}></Stack.Screen>
        <Stack.Screen name = "게시판" component={BoardScreen}></Stack.Screen>
        <Stack.Screen name = "게시글내용" component={BoardDetailScreen}></Stack.Screen>
    </Stack.Navigator>);
}

export function SettingNavigator(){
    return (
    <Stack.Navigator>
        <Stack.Screen name = "설정" component={SettingScreen}></Stack.Screen>
        <Stack.Screen name = "다크모드" component={ThemeScreen}></Stack.Screen>
        <Stack.Screen name = "서체" component={FontScreen}></Stack.Screen>
    </Stack.Navigator>);
}

export function MainBottomNavigator(){
    return(
    <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused, color, size}) => {
            let iconName:string = '';
            if(route.name === "홈") {
                iconName = 'home'
               } else if(route.name === '랭킹') {
                iconName = 'emoji-events'
               } else if (route.name === '게시판') {
                iconName = 'forum'
               } else if (route.name === 'My') {
                iconName = 'account-circle'
               } else if (route.name === '설정') {
                iconName = 'tune'
               }
               return <Icon name={iconName} size={size} color={color} />;
            }
    })}
    >
        <Tab.Screen name = "홈" component={MainScreen}/>
        <Tab.Screen name = "랭킹" component={RankScreen}/>
        <Tab.Screen name = "게시판" component={BoardNavigator} options={{headerShown:false}}/>
        <Tab.Screen name = "My" component={MyScreen}/>
        <Tab.Screen name = "설정" component={SettingNavigator} options={{headerShown:false}}/>
    </Tab.Navigator>
    );
}