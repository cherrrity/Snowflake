
import React, { Component, useCallback, useLayoutEffect, useState  } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Board, Text} from "../components/theme";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import { useNavigation, useRoute, NavigatorScreenParams} from "@react-navigation/native";
import { indigo100 } from 'react-native-paper/lib/typescript/styles/colors';

interface NavigationParams {
  text: string;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
  navigation: Navigation;
}

export const BoardScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.params? route.params.headertitle : "";

  navigation.setOptions({title: title});
  
    const goDetail = useCallback( ()=>{
      navigation.navigate("게시글내용", {headertitle: title});
  },[]);

  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={goDetail}>
          <Board>
            <View style={LoginScreenStyles.category}>
              <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
            </View>
            <View style={LoginScreenStyles.box}>
              <Text style={LoginScreenStyles.title}>소용돌이</Text>
              <Text style={LoginScreenStyles.time}>05:26</Text>
            </View>
            <Text style={LoginScreenStyles.context}>
            소용돌이치는 하루 속에
            사소한 행복을 나에게 줘서
            비어 있는 내 두 손에
            세상의 모든 미소를 쥐여줘서
            가파른 길에 숨이 찰 때도
            추운 날 길 잃은 때도
            따듯한 온기와 함께 손을 내밀어주는
            그대에게 그대에게
            전해주고 싶은 이야기
            그대에게 그대에게
            말하고 싶어 이렇게 더
            Oh 소용돌이치는 바람 속에
            영원한 사랑이 있다면
            그건 당신이겠죠
            </Text>
            <Text style={LoginScreenStyles.auth}>세븐틴</Text>
          </Board>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const LoginScreenStyles = StyleSheet.create({
  view : {width:"100%", flexDirection:"column"},
  box :{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'},

  category_box : {flexWrap:'wrap', marginTop:8, width: "70%", flexDirection:"row", justifyContent:"center", alignItems:"center", alignContent:"center"},
  category : {width:50, alignContent:"center", alignSelf:"stretch", marginVertical:3, color:"#888888", fontWeight:"bold", backgroundColor:"lavender", paddingHorizontal:10, paddingVertical:3, borderWidth:0.8, borderColor:"#b4b4de", borderRadius:10, marginHorizontal:2},
  category_text : {fontSize:10, color:"#888888"},

  title : {fontSize:18, fontWeight:'bold', overflow:'hidden'},
  time : {fontSize:12, marginTop:5, color:"#888888"},
  context : {fontSize:15, marginTop:15, color:"#666666", overflow:'hidden', textAlign:"justify", lineHeight:17},
  auth: {fontSize:13, marginTop:15, color:"#888888", fontWeight:"bold"},
});

//export default BoardScreenÍ