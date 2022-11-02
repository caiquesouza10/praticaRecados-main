import React, {useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";

interface InputProps {
  id: string;
  type?: string;
  label: Label;
  meuOnChange: (value: string, key: Label) => void;
  value: string;
  fullWidth?: boolean;
  focused?: boolean;
  error?: boolean
  required?: boolean;
}

export type Label = 'Nome' | 'E-mail' | 'Senha' | 'Repete Senha';

const Input: React.FC<InputProps> = ({ id, type, label, meuOnChange, value, fullWidth, focused, required, error }) => {
  
  return (
    <>
      <TextField
        type={type}
        required={required}
        id={id}
        label={label}
        variant="standard"
        onChange={(ev) => meuOnChange(ev.target.value, label)}
        fullWidth={fullWidth} 
        focused={focused}
        error={error} 
        InputLabelProps={{ sx: { color: "white" } }}
        inputProps={{ sx: { color: "white" } }}
        value={value}
      />
    </>
  );
};

export default Input;