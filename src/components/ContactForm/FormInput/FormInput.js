import { Grid, TextField } from "@material-ui/core";
import React from "react";

const FormInput = ({ id, label, value, children }) => {
  return (
    <Grid item xs={12}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id={id}
        label={label}
        value={value}
      />
      {children}
    </Grid>
  );
};

export default FormInput;
