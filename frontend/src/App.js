import {Route, Switch} from "react-router-dom";
import {Typography} from "@mui/material";
import Layout from "./components/UI/Layout/Layout";
import Main from "./containers/Main/Main";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import NewEvent from "./containers/NewEvent/NewEvent";
import AddFriend from "./containers/AddFriend/AddFriend";
import Friends from "./containers/Friends/Friends";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/new_event" component={NewEvent}/>
      <Route path="/add_friend" component={AddFriend}/>
      <Route path="/friends" component={Friends}/>
      <Route path="*" render={() => <Typography variant="h1" textAlign="center">Not found!</Typography>}/>
    </Switch>
  </Layout>
);

export default App;
