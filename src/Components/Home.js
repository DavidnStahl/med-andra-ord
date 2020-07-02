import React from "react";
import { Button, Container } from "@material-ui/core";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Container>
        <h2>Välkommen till Med Andra Ord!</h2>
        <Button
          variant="contained"
          color="#4f5b66"
          onClick={() => {
            history.push("/GameSettings");
          }}
        >
          Börja spela
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default Home;
