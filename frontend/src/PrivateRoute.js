import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Auth/Login";

class PrivateRoute extends Component {
  render() {
    const { component, isAuthenticated, ...restProps } = this.props;
    const Comp = component;

    return (
      <Route
        {...restProps}
        render={() => (isAuthenticated ? <Comp /> : <Login />)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
