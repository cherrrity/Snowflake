
import React, { Component, useCallback  } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Board, Text} from "../components/theme";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

export const BoardListScreen = () => {
  const navigation = useNavigation();

    const goBoard = useCallback( ()=>{
      navigation.navigate("게시판");
  },[]);
  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={goBoard}>
          <Board>
            <View style={[LoginScreenStyles.box]}>
              <Text>세븐틴</Text>
              <Icon name="angle-right" size={15}></Icon>
            </View>
          </Board>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const LoginScreenStyles = StyleSheet.create({
  view : {width:"100%", flexDirection:"column"},
  box :{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'},
});

//export default BoardScreenÍ