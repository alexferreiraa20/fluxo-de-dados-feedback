import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  

  function onChangeNome (e) {
    props.setNome(e.target.value)
  }

  function onChangeFotoPerfil (e){
    props.setFotoPerfil(e.target.value)
  }
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.nome} onChange={onChangeNome} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.fotoPerfil} onChange={onChangeFotoPerfil} />
        </StyledLabel>
        <SendButton onClick={props.login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
