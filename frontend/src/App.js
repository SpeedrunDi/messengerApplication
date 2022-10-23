import {Route, Switch} from "react-router-dom";
import {Typography} from "@mui/material";
import Layout from "./components/UI/Layout/Layout";
import Main from "./containers/Main/Main";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="*" render={() => <Typography variant="h1" textAlign="center">Not found!</Typography>}/>
    </Switch>
  </Layout>
);

export default App;
