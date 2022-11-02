import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const ButtonEditar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="small"
        startIcon={<EditOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Editar
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Recado para editar"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Recado para editar
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="error"
            variant="contained"
            startIcon={<CloseIcon />}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => console.log("Salvou")}
            autoFocus
            color="success"
            variant="contained"
            startIcon={<CheckCircleOutlineIcon />}
          >
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ButtonEditar;
