import React from "react";
import { Switch, Route } from "react-router-dom";
import RootDirectory from "./components/MainDirectory";
// import { PATH_ROUTES } from "./routes/Routes";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={RootDirectory} />
    </Switch>
  );
};

export default App;
