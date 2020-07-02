import React from "react";
import { NavBar } from "../NavBar";
import { connect } from "react-redux";
import { logout } from "../../Actions/authActions";

function AllShops(props) {
  console.log(props);

  return (
    <div>
      <NavBar
        logout={props.logout}
        isAuthenticated={props.isAuthenticated}
      ></NavBar>
      <p>Home</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors,
});

export default connect(mapStateToProps, { logout })(AllShops);
