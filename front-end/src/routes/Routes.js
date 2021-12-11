import { Route, Switch } from "react-router";
import Garden from "../pages/Home";
import Login from "../pages/Login";
import NotFound from '../pages/NotFound/index';
import Stats from "../pages/Stats";

export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Garden}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/stats" exact component={Stats}/>
            <Route component={NotFound}/>
        </Switch>
    );
}