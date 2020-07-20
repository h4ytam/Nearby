import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StorefrontIcon from "@material-ui/icons/Storefront";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  shops: {
    flexGrow: 1,
  },
  favorites: {
    flexGrow: 2,
  },
}));
export const NavBar = ({ logout, token }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  if (!token) {
    return <Redirect to="/login" />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/">
              {" "}
              <StorefrontIcon />
            </Link>
          </Typography>

          <Typography variant="h5" className={classes.favorites}>
            <Link to="/preferredShop">
              {" "}
              <FavoriteIcon />
            </Link>
          </Typography>

          <div>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
            >
              <MenuItem>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
