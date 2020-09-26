import { Grid, TextField } from "@material-ui/core";
import React from "react";

const FormInput = ({ id, label, value, children , required, type}) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        required={required}
        fullWidth
        id={id}
        label={label}
        value={value}
        type={type}
      />
      {children}
    </Grid>
  );
};

export default FormInput;
