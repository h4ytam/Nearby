import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Container, Grid } from "@material-ui/core";

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
const loginBtn = {
  margin: "10px 143px 0 0",
};

class Login extends Component {
  render() {
    return (
      // <Router>
      <div style={wrapper}>
        <h1>Login</h1>
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
          <Button variant="contained" color="primary" style={loginBtn}>
            Login
          </Button>

          <Link to="/signup">Sign up !!</Link>
        </Container>
      </div>
    );
  }
}

export default Login;
