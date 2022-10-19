import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [pageFlow, setPageFlow] = useState(1);
  const [nome, setNome] = useState("")
  const [fotoPerfil, setFotoPerfil] = useState("")
  const [fotoPerfilUsuario, setFotoPerfilUsuario] = useState("")
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [tituloImagem, setTituloImagem] = useState("")
  const [imagem, setImagem] = useState("")
  const [descricaoImagem, setDescricaoImagem] = useState("")


  let infoUsuario = {nomeUsuario, fotoPerfilUsuario}

  const login = (event) =>{
    setPageFlow(2);
    setNomeUsuario(nome)
    setFotoPerfilUsuario(fotoPerfil)
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
          infoUsuarioNome = {infoUsuario.nomeUsuario}
          infoUsuarioFoto = {infoUsuario.fotoPerfilUsuario}
          />
          {pageFlow === 1 ? (
            <FormularioLogin 
            nome={nome}
            setPageFlow={setPageFlow} 
            setNome={setNome}
            setPerfil = {fotoPerfil}
            setFotoPerfil={setFotoPerfil}
            login={login}
            />
          ) : (
            <FormularioPostagem 
            tituloImagem={tituloImagem}
            setTituloImagem={setTituloImagem}
            imagem={imagem}
            setImagem={setImagem}
            descricaoImagem={descricaoImagem}
            setDescricaoImagem={setDescricaoImagem}
            />
          )}
        </aside>
        <TelaDaPostagem 
         tituloImagem={tituloImagem}
         setTituloImagem={setTituloImagem}
         imagem={imagem}
         setImagem={setImagem}
         descricaoImagem={descricaoImagem}
         setDescricaoImagem={setDescricaoImagem}
        />
      </Container>
    </>
  );
}

export default App;
