import React, { useState } from "react";
import { useFonts } from 'expo-font';
import { View, StatusBar, FlatList } from "react-native";
import styled from "styled-components";
import AddInput from "./components/AddInput";
import Empty from "./components/Empty";
import Header from "./components/Header";
import TodoList from "./components/TodoList";


const ComponentContainer = styled.View`

  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Light.ttf'),
  });

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),   //le otorga un key a cada elemento que se suma al array
        },
        ...prevTodo,
      ];
    });

  }

  const deleteItem = (key) => {    //elimina un elemento de la lista segun su key
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };


  const [data, setData] = useState([]);

  if (fontsLoaded) {
    return (

      <ComponentContainer>



        <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
        <View>
          <FlatList
            data={data}
            //ListHeaderComponent muestra un elemento en la parte superior de todos los elementos
            ListHeaderComponent={() => <Header />}
            //ListEmptyComponent muestra un elemento cuando la lista esta vacia
            ListEmptyComponent={() => <Empty />}
            renderItem={({ item }) => (
              <TodoList item={item} deleteItem={deleteItem} />
            )}
          />
          <AddInput submitHandler={submitHandler} />
        </View>

      </ComponentContainer>


    )
  };
}



