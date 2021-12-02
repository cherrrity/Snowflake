
import React, { Component, useCallback, useEffect, useState  } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Board, Text} from "../components/theme";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';
import { boardCategoryList, category_list} from '../service/Board';

export const BoardListScreen = () => {
  const navigation = useNavigation();
  
  const [boardList, setBoardList] = useState<any[]>([]);

  const goBoard = useCallback((title)=>{
    navigation.navigate("게시판", {headertitle: title});
  },[]);

  const GetCategoryList = () => {
    boardCategoryList();
    return(
      <View>
        {
          category_list.map(title=>{
            return(
              <TouchableOpacity onPress={() => goBoard(title)}>
                <Board>
                  <View style={[LoginScreenStyles.box]}>
                    <Text>{title}</Text>
                    <Icon name="angle-right" size={15}></Icon>
                  </View>
                </Board>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  };

  


  return (
    <ScrollView>
      <View>
        <GetCategoryList/>
      </View>
    </ScrollView>
  );
}

const LoginScreenStyles = StyleSheet.create({
  view : {width:"100%", flexDirection:"column"},
  box :{flexDirection:'row', justifyContent:'space-between', alignItems: 'center'},
});

//export default BoardScreenÍ