import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "./App.css";
import rootReducer from "./Reducers/index";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import PreferredShop from "./components/Shop/PreferredShop";

function App() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route
              exact
              path="/preferredShop"
              component={PreferredShop}
            ></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
