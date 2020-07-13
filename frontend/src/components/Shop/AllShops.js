import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar";
import { connect } from "react-redux";
import { logout } from "../../Actions/authActions";
import { loadAllShops } from "../../Actions/shopActions";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
function AllShops({ loadAllShops, token, logout, shops }) {
  // console.log(props);
  useEffect(() => {
    loadAllShops();
  }, []);
  const card = {
    width: " 400px",
    height: "380px",
    marginTop: "20px",
  };
  const cardImg = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: "180px",
    marginTop: "12px",
  };
  const cardFlex = {
    display: "flex",
    flexWrap: "wrap",
    height: "400px",
    justifyContent: "space-between",
  };
  return (
    <div>
      <NavBar logout={logout} token={token}></NavBar>
      <Container>
        <div style={cardFlex}>
          {shops.map((shop) => (
            <Card style={card}>
              <CardActionArea>
                <CardMedia style={cardImg} component="img" image={shop.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {shop.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {shop.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Like
                </Button>
                <Button size="small" variant="contained" color="secondary">
                  Dislike
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors,
  token: state.auth.token,
  shops: state.shop.shops,
});

export default connect(mapStateToProps, { logout, loadAllShops })(AllShops);
