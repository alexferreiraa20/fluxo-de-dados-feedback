import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  
  const onChangeTituloImagem = (event) => {
    props.setTituloImagem(event.target.value)
  }

  const onChangeImagem = (event) =>{
    props.setImagem(event.target.value)
  }

  const onChangeDescricaoImagem = (event) =>{
    props.setDescricaoImagem(event.target.value)
  }
  
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.tituloImagem} onChange={onChangeTituloImagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={onChangeImagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricaoImagem} onChange={onChangeDescricaoImagem}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
