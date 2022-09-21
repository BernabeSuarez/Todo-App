import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
`
const InputContainer = styled.View`
flex-direction:row;

`
const Input = styled.TextInput`
 font-size: 15px;
  background-color: white;
  width: 250px;
  margin-right: 10px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 25px;
  border-radius: 10px;`

const Button = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: #808080;
  margin-bottom: 20px;
  border-radius: 10px;
  `

const Add = styled.Text`
font-size:12px;
color: white;
font-family:"Poppins";
`

export default function AddInput({ submitHandler }) {
    const [value, setValue] = useState("");

    const onChangeText = (text) => {
        setValue(text);
    };

    return (
        <Container>
            <InputContainer>
                <Input placeholder="Agregar Nota..." onChangeText=
                    {onChangeText} />
            </InputContainer>
            <Button
                onPress={() => {
                    setValue(submitHandler(value));

                }}
            >
                <Add>Add</Add>
            </Button>
        </Container>
    );
}



//agrega una tarea a la lista de tareas pendientes