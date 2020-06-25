import React, { useState } from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../Actions/authActions";

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
const errorMsg = {
  color: "#ffb3b3",
};
export const Signup = ({ register, errors, isAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/preferredShop" />;
  }

  return (
    <div style={wrapper}>
      <h1>Sign Up</h1>
      <Container>
        {errors.msg ? (
          <div className="error">
            <p style={errorMsg}>{errors.msg}</p>
          </div>
        ) : null}
        {errors.errors && errors.errors.length
          ? errors.errors.map((error) => (
              <div className="error" key={error.msg}>
                <p style={errorMsg}>{error.msg}</p>
              </div>
            ))
          : null}
        <form>
          <Grid item xs={12}>
            <TextField
              id="standard-basic"
              label="Email"
              style={Inputs}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={Inputs}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            style={signUpBtn}
            onClick={onSubmit}
          >
            Sign up
          </Button>
          <Link to="/">Return Login</Link>
        </form>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors,
});

export default connect(mapStateToProps, { register })(Signup);
