import React from "react";
import { View } from "react-native";
import { Octicons } from "@expo/vector-icons"; //iconos de react native
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

export default function TodoList({ item, deleteItem }) {
    return (
        <ComponentContainer>
            <ListContainer>
                <CirlceContainer>
                    <Octicons name="dot-fill" size={12} color="black" />
                </CirlceContainer>
                <View>
                    <TextItem>{item.value}</TextItem>
                    <TextDate> Tarea</TextDate>
                </View>
                <IconContainer onPress={() => deleteItem(item.key)}>
                    <MaterialIcons name="delete" size={24} color="coral" />
                </IconContainer>
            </ListContainer>
        </ComponentContainer>
    );
}

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
  font-family: "Poppins";
`;

const TextDate = styled.Text`
  color: goldenrod;
  font-size: 12px;
  margin-right: 20px;

  font-family: "Poppins";
  border-radius: 10px;
  width: 40px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 15px;

  height: 40px;

  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;