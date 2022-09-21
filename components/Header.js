import React from "react";
import styled from "styled-components";

let today = new Date().toISOString().slice(0, 10); //indica la fecha actual

export default function Header() {
    return (
        <ComponentContainer>
            <HeaderText>Notas   </HeaderText>
            <HeaderList>{today}</HeaderList>
        </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-family:"Poppins";
  font-size: 30px;
`;

const HeaderList = styled.Text`
  color: white;
  font-size: 20px;
  font-family:"Poppins";
  margin-right: 20px;
`;