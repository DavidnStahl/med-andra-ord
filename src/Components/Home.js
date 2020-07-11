import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  return (
    <Grid container justify="center" direction="column" alignItems="center" spacing={10} style={{ minHeight: "100vh" }}>
      <Grid item>
        <Typography color="textPrimary" variant="h4">
          Med Andra Ord
        </Typography>
      </Grid>

      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            history.push("/GameSettings");
          }}
        >
          Börja spela
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
