import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SvgCssUri } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';
import { useToggleThemeContext } from '../navigatiors/ToggleThemeProvider';
import { userInfo } from '../service/Login';


// exception 처리 필요 svg 속 css에 적용되는 default-font(-apple-system)가 없어 발생함
const UserCommitChart = () => {

  const svgurl = `https://ghchart.rshah.org/${userInfo.nickname? userInfo.nickname:"cherrrity"}`;
  return(
    <ScrollView horizontal={true} contentOffset={{x:800, y:0}} >
      <SvgCssUri uri={svgurl}/> 
    </ScrollView>
  );
}


export const MainScreen = () => {
  const theme = useTheme();
  const toggleTheme = useToggleThemeContext();

  return (
    <ScrollView scrollsToTop={true} style={{backgroundColor:theme.colors.card}}>
      <View style={MainScreenStyle.view}>
        <Text style={[MainScreenStyle.H2, {color:theme.colors.text, fontFamily:toggleTheme.fontFamily}]}>나의 커밋 그래프</Text>
        <View style={MainScreenStyle.box}>
          <UserCommitChart/>
        </View>
        
      </View>
      <View style={MainScreenStyle.view}>
        <Text style={[MainScreenStyle.H2, {color:theme.colors.text, fontFamily:toggleTheme.fontFamily}]}>최근 커밋 했어요!</Text>
      </View>
      <View style={MainScreenStyle.view}>
        <Text style={[MainScreenStyle.H2, {color:theme.colors.text, fontFamily:toggleTheme.fontFamily}]}>나와 같은 관심사</Text>
      </View>
    </ScrollView>
  );
}

const MainScreenStyle = StyleSheet.create({
  view : {flex:1, flexDirection:'column', alignContent:"center", paddingHorizontal:20, paddingVertical:15,},
  box: {marginVertical:20},
  H1 : {fontSize:25, fontWeight:'500'},
  H2 : {fontSize:22, fontWeight:'700'},

});

//export default MainScreen;