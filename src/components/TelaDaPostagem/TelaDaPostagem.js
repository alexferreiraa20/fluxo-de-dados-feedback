import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{props.tituloImagem}</TitleHeader>
      <Image src={props.imagem} />
      <Description>{props.descricaoImagem}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
