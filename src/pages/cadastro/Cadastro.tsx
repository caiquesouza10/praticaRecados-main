import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Input, { Label } from "../../Shared/components/inputs/Input";
import Background from "../../Shared/components/background/Background";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CardSign = styled.div`
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

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

interface User {
  nome: string;
  email: string;
  senha: string;
  recados: [];
}

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repSenha, setRepSenha] = useState("");
  const [usuarios, setUsuarios] = useState<User[]>(
    JSON.parse(localStorage.getItem("usuarios") ?? "[]")
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const handleChange = (value: string, key: Label) => {
    switch (key) {
      case "Nome":
        setNome(value);
        break;

      case "E-mail":
        setEmail(value);
        break;

      case "Senha":
        setSenha(value);
        break;

      case "Repete Senha":
        setRepSenha(value);
        break;

      default:
        break;
    }
  };

  const handleClickCadastrar = () => {
    const novoUsuario: User = {
      nome: nome,
      email: email,
      senha: senha,
      recados: [],
    };

    const usuarioExistente = usuarios.find((usuario) => usuario.email === email);

    if(!nome || nome.length < 3){
      Swal.fire({
        title: "O nome precisa ter no minimo 3 digitos!!",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return;
    } 

    if(!email || !email.match(regexEmail)){
      Swal.fire({
        title: "E-mail preenchido incorretamente!!",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return;
    }

    if(senha !== repSenha){
      Swal.fire({
        title: "Por favor preencha as senhas corretamente!!",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return;
    }

    if (usuarioExistente) {
      Swal.fire({
        title: "Já existe esse usuário!!",
        icon: "warning",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
      return;
    }else{
      Swal.fire({
        title: "Sucesso!",
        text: "Muito bom",
        icon: "success",
        confirmButtonText: "Confirmar",
        timer: 3000,
      });
    }
    setUsuarios([...usuarios, novoUsuario]);
    limpaInputs();
  };

  const limpaInputs = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setRepSenha("");
  };

  const handleClickLogin = () => {
    navigate("/");
  };
  return (
    <>
      <Background>
        <CardSign>
          <h1>Cadastrar</h1>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                meuOnChange={handleChange}
                id="standard-name-input"
                label="Nome"
                fullWidth
                focused
                value={nome}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-email-input"
                label="E-mail"
                meuOnChange={handleChange}
                fullWidth
                focused
                value={email}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-password-input"
                label="Senha"
                type="password"
                meuOnChange={handleChange}
                fullWidth
                focused
                value={senha}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                id="standard-passwordRepeat-input"
                label="Repete Senha"
                type="password"
                meuOnChange={handleChange}
                fullWidth
                focused
                value={repSenha}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Button
                variant="contained"
                type="button"
                onClick={handleClickCadastrar}
                // disabled={ !nomeValido || !emailValido || !senhaValido }
              >
                Cadastrar
              </Button>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Button variant="contained" onClick={handleClickLogin}>
                Fazer Login
              </Button>
            </Grid>
          </Grid>
        </CardSign>
      </Background>
    </>
  );
}

export default Cadastro;

