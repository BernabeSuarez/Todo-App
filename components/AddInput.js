import React, { useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
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
  background-color: transparent;
  margin-bottom: 20px;
  border-radius: 10px;
  `



export default function AddInput({ submitHandler }) {
    const [value, setValue] = useState("");

    const onChangeText = (text) => {
        setValue(text);
    };

    return (
        <Container>
            <InputContainer>
                <Input
                    ref={note => { this.noteInput = note }}
                    placeholder="Agregar Nota..."
                    onChangeText=
                    {onChangeText} />
            </InputContainer>
            <Button
                onPress={() => {
                    setValue(submitHandler(value));
                    this.noteInput.clear()  //liompiar los inputs

                }}
            >
                <FontAwesome name="pencil-square-o" size={40} color="white" />
            </Button>
        </Container>
    );
}



//agrega una tarea a la lista de tareas pendientes