import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import Posts from "./screens/Posts/Posts";
import PostCreate from "./screens/PostCreate/PostCreate";
import PostEdit from "./screens/PostEdit/PostEdit";
import PostDetail from "./screens/PostDetail/PostDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <div className="left">
          <Route exact path="/posts" component={Posts} />

          <Route exact path="/add-post" component={PostCreate} />
        </div>
        <div className="right">
          <Route exact path="/posts/:id/edit" component={PostEdit} />
          <Route exact path="/posts/:id" component={PostDetail} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
