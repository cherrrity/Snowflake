
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Board, Text} from "../components/theme";

export const MyScreen = () => {

  return (
    <View style={LoginScreenStyles.view}>
      <View style={[LoginScreenStyles.user_profile_box,{}]}>
        <Image style={LoginScreenStyles.user_profile} source={require('../assets/images/user.jpg')}/>
        <Text style={LoginScreenStyles.user_nickname}>흰둥이</Text>
        <View style={LoginScreenStyles.user_info_box}>
          <Icon name="email" size={18} color="#333333"></Icon>
          <Text> </Text>
          <Text style={LoginScreenStyles.user_email}>siro@cranyonshincha.nn</Text>
        </View>
        {/* 커밋 응원 메세지 */}
        <Text style={LoginScreenStyles.commit_date}>커밋한지 100+일이 지났어요😭</Text>
        {/* 관심사 */}
        <View style={LoginScreenStyles.category_box}>
          <View style={LoginScreenStyles.category}>
            <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
          </View>
          <View style={LoginScreenStyles.category}>
            <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
          </View>
          <View style={LoginScreenStyles.category}>
            <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
          </View>
          <View style={LoginScreenStyles.category}>
            <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
          </View>
          <View style={LoginScreenStyles.category}>
            <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
          </View>
          <View style={LoginScreenStyles.category}>
            <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
          </View>
          <View style={LoginScreenStyles.category}>
            <Text  style={LoginScreenStyles.category_text}>세븐틴</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const LoginScreenStyles = StyleSheet.create({
  view : {flex: 1, flexDirection:"column", paddingVertical:30, paddingHorizontal:15, alignItems:"center"},
  user_profile_box : {flex:1, width:"100%", maxHeight:270, alignItems:"center", borderBottomWidth:1, borderBottomColor:"#dddddd"},
  user_profile : {width:120, height:120, borderRadius:100,},
  user_info_box : {marginTop:8, flexDirection:"row", justifyContent:"center", alignItems:"center", alignContent:"center"},
  user_nickname: {fontSize: 16, marginTop:10, fontWeight:"bold"},
  user_email : { color:"#333333", alignItems:"center",},
  commit_date : {marginTop:8, fontSize:12, color:"purple", alignItems:"center",},
  category_box : {flexWrap:'wrap', marginTop:8, width: "70%", flexDirection:"row", justifyContent:"center", alignItems:"center", alignContent:"center"},
  category : {width:50, alignContent:"center", alignSelf:"stretch", marginVertical:3, color:"#888888", fontWeight:"bold", backgroundColor:"lavender", paddingHorizontal:10, paddingVertical:3, borderRadius:10, marginHorizontal:2},
  category_text : {fontSize:10, color:"#888888"},
});

//export default MyScreen;