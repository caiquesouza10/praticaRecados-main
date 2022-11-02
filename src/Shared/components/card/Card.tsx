import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import Checkbox from "../checkbox/Checkbox";
import { Grid } from "@mui/material";

import ButtonEditar from "../buttonEditar/ButtonEditar";
import ButtonExcluir from "../buttonExcluir/ButtonExcluir";

interface CardCompProps {
  titulo?: string;
  texto?: string;
  acao?: () => void;
  xs?: number;
  lg?: number;
}

const CardComp: React.FC<CardCompProps> = ({ titulo, texto, xs, lg, acao }) => {
  return (
    <Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Checkbox />
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {texto}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonEditar />
          <ButtonExcluir />
        </CardActions>
      </Card>
    </Grid>
  );
};
export default CardComp;
