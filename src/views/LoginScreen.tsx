
import React, { Component, useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import { githubRequest, EmailLoginRequset} from '../service/Login';

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const updateEmail = useCallback((userEmail)=>{ setEmail(userEmail)},[]);
  const updatePwd = useCallback((userPasswd)=>{ setPwd(userPasswd)},[]);

  const emailLogin = () => {
    EmailLoginRequset(email, pwd);
  }

  const githubLogin = async () => {
    const res = githubRequest();
  };

  return (
    <View style={LoginScreenStyles.view}>
      <Text style={LoginScreenStyles.H1}>LOGIN</Text>
      <View style={LoginScreenStyles.inputBox}>
        <TextInput placeholder="your id" style={LoginScreenStyles.input} onChangeText={updateEmail}></TextInput>
        <TextInput placeholder="your password" secureTextEntry={true} onChangeText={updatePwd} style={LoginScreenStyles.input} ></TextInput>
      </View>
      <View>
        <TouchableOpacity style={LoginScreenStyles.button} onPress={emailLogin}>
          <Text style={LoginScreenStyles.innerButton}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={LoginScreenStyles.decoline}></View>
      <View>
        <TouchableOpacity style={[LoginScreenStyles.button,{backgroundColor:"black"}]} onPress={githubLogin}>
          <Text style={[LoginScreenStyles.innerButton]}>
          <Icon name="github" size={20} style={{marginRight:10, paddingRight:10}}/>
          <Text>  </Text>
              Github으로 로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const LoginScreenStyles = StyleSheet.create({
  view : {flex: 1, flexDirection:"column", paddingVertical:50, paddingHorizontal:30},
  inputBox : {marginVertical:20},
  input: {marginVertical:5, backgroundColor:"white"},
  H1 : {fontSize:25, fontWeight:'500'},
  button : {backgroundColor:"#3672d1", paddingVertical:15},
  innerButton:{textAlign:"center", color:"white"},
  decoline:{ background:"black", borderTopWidth:1, borderLeftWidth:0, borderRightWidth:0, borderBottomWidth:0, borderColor:"#d6d6d4", marginVertical:20}
});


function socialMediaAuth(githubProvider: any) {
  throw new Error('Function not implemented.');
}
//export default LoginScreen;