import React, { Component } from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const wrapper = {
  position: "absolute",
  left: "50%",
  top: "38%",
  transform: "translate(-50% , -50%)",
};
const Inputs = {
  width: " 270px",
  marginTop: "14px",
};
const signUpBtn = {
  margin: "10px 89px 0 0",
};

class Signup extends Component {
  render() {
    return (
      <div style={wrapper}>
        <h1>Sign Up</h1>
        <Container>
          <Grid item xs={12}>
            <TextField id="standard-basic" label="Email" style={Inputs} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={Inputs}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Button variant="contained" color="primary" style={signUpBtn}>
            Sign up
          </Button>
          <Link to="/login">Return Login</Link>
        </Container>
      </div>
    );
  }
}

export default Signup;
