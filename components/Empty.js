import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage
        source={require("../assets/note.png")}
      />
      <EmptyText>Agregar notas</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 35%;
`;

const EmptyImage = styled.Image`
  width: 85px;
  height: 85px;
  margin-top:35px;
`;

const EmptyText = styled.Text`
  color: white;
  font-family:"Poppins";
  margin-top: 30px;
  font-size: 20px;
`;
