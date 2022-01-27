import React from 'react';
import { AppBar, Button } from "@material-ui/core";

export default function DenseAppBar() {
  return (
      <AppBar position="static">
            <Button color="success" variant="contained" onClick={() => window.location.reload(false)} align="right" >Refresh</Button>
      </AppBar>

  );
}