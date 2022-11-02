import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardComp from "../../Shared/components/card/Card";

const sessionUser = sessionStorage.getItem("loggedUser") || "usuário";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const listaDeRecados = [
  {
    titulo: "Estudar",
    texto: "Material UI",
  },
  {
    titulo: "Estudar",
    texto: "useState"
  },
  {
    titulo: "Mercado",
    texto: "Comprar leite",
  },
  {
    titulo: "Livros",
    texto: "Ler Drácula e Sherlock"
  }
]

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link to="/">Home</Link>
      <Typography gutterBottom variant="h2">
        Bem vindo a página, {sessionUser}
      </Typography>
      <Grid container spacing={2}>
        {listaDeRecados.map((item) => (
          <Grid item xs={3}>
            <CardComp
              titulo={item.titulo}
              texto={item.texto}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
