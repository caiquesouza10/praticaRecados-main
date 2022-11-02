import React, { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ButtonExcluir: React.FC = () => {
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
        onClick={handleClickOpen}
        autoFocus
        variant="outlined"
        size="small"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Excluir
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que deseja realizar essa operação?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Recado a excluir
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
            onClick={() => console.log("Excluiu")}
            autoFocus
            color="success"
            variant="contained"
            startIcon={<CheckCircleOutlineIcon />}
          >
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ButtonExcluir;
