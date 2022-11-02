import Grid from "@mui/material/Grid";
import Input, { Label } from "../../Shared/components/inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import Background from "../../Shared/components/background/Background";
import { Button, Typography } from "@mui/material";
import Buttons from "../../Shared/components/botoes/Buttons";
import styled from "styled-components";
import { useState, useEffect } from "react";
import React from "react";

const CardLog = styled.div`
  width: 50%;
  background: #2b2b2b;
  padding: 3%;
  -webkit-box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 26px 0px rgba(0, 0, 0, 0.75);
  color: white;

  Link {
    text-decoration: none;
  }
`;

interface User {
  email: string;
  senha: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('') // retorna uma lista de valores [0, 1]
  const [senha, setSenha] = useState('')
  const [usuarios, setUsuarios] = useState<User[]>(JSON.parse(localStorage.getItem('usuarios') ?? '[]'));



                    //VERIFICA SE TEM USUARIO LOGADO
  // const [usuarioLogado, setUsuarioLogado] = useState<User | null>(null);
  // useEffect(() => {
  //   let usuario = localStorage.getItem('usuarioLogado')
  //   usuario ? setUsuarioLogado(JSON.parse(usuario)) : setUsuarioLogado(null)
  // }, [])
  // useEffect(() => {
  //   if(usuarioLogado){
  //     navigate('/home')
  //   }
  // }, [navigate, usuarioLogado])



  useEffect(() => {

    console.log('USUARIOS', usuarios)
    
  }, [usuarios]);


  const handleChange = (value: string, key: Label) => {
    switch(key){
      case 'E-mail': 
        setEmail(value);
      break;

      case 'Senha':
        setSenha(value);
      break;

      default:
      break
    }
  }

  const handleClickLogin = () => {
    const user: User = {
      email: email,
      senha: senha,
    }

    console.log('user', user)

    const usuarioLogando = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

    if(!usuarioLogando){
      alert('Este usuario não existe!')
      return
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogando));
    navigate('/home')
  }

  const handleClickCadastro = () => {
    navigate('/cadastro');
  }
  
  return (
    <Background>
      <CardLog>
        <h1>Logar</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input 
              id="standard-input" 
              label="E-mail"
              fullWidth
              focused
              required
              meuOnChange={handleChange}
              value={email}
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              id="standard-password-input"
              label="Senha"
              type="password"
              fullWidth
              focused
              meuOnChange={handleChange}
              value={senha}
            />
          </Grid>

          <Grid item xs={12}>
            <Buttons
              tipoBotao="button"
              onClick={handleClickLogin}
            >
              Logar
            </Buttons>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleClickCadastro}>
              Cadastre-se
            </Button>
          </Grid>
        </Grid>
      </CardLog>
    </Background>
  );
}


