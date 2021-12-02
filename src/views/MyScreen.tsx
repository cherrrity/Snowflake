
import React, { Component, useCallback, useMemo } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Board, Text} from "../components/theme";
import { userInfo } from '../service/Login';

const MyTagList = () => {
  return (
    <View style={LoginScreenStyles.category_box}>
    {userInfo.tag.map(element=>{
        return(
          <View style={LoginScreenStyles.category}>
            <Text style={LoginScreenStyles.category_text}>{element}</Text>
          </View>
        )
      })}
    </View>
  )
}

const CommitMessage = () => {
  console.log(dateDiffrent());
  return (
    <Text style={LoginScreenStyles.commit_date}>{dateDiffrent()}</Text>
  )
}

const dateDiffrent = () =>{
  const today = new Date();
  const timeValue = new Date(userInfo.lastCommitedDate);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
  if (betweenTime < 1) return '방금전에 커밋했어요🥰';
  if (betweenTime < 60) {
      return `${betweenTime}분전에 커밋했어요😘`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전에 커밋했어요😆`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  const betweenTimeWeek = Math.floor(betweenTime / 60 / 24/ 7);
  if (betweenTimeDay > 7) {
    return `커밋한지 ${betweenTimeWeek}주가 지났어요😅`;
 }else if (betweenTimeDay < 365) {
      return `커밋한지 ${betweenTimeDay}일이 지났어요😢`;
  }

  return `커밋한지 ${Math.floor(betweenTimeDay / 365)}년이 지났어요..😰`;
};

export const MyScreen = () => {

  return (
    <View style={LoginScreenStyles.view}>
      <View style={[LoginScreenStyles.user_profile_box,{}]}>
        <Image style={LoginScreenStyles.user_profile} source={{uri: userInfo.avatar}}/>
        <Text style={LoginScreenStyles.user_nickname}>{userInfo.nickname}</Text>
        <View style={LoginScreenStyles.user_info_box}>
          <Icon name="email" size={18} color="#333333"></Icon>
          <Text> </Text>
          <Text style={LoginScreenStyles.user_email}>{userInfo.email}</Text>
        </View>
        {/* 커밋 응원 메세지 */}
        <CommitMessage/>
        {/* 관심사 */}
        <MyTagList/>
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
  category : { alignContent:"center", alignSelf:"stretch", marginVertical:1.5, color:"#888888", fontWeight:"bold", backgroundColor:"lavender", paddingHorizontal:10, paddingVertical:5, borderWidth:0.8, borderColor:"#b4b4de", borderRadius:10, marginHorizontal:2},
  category_text : {fontSize:10, color:"#888888"},
});

//export default MyScreen;