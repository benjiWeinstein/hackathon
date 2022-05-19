import { Factory1 } from "./Components/Factory1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { JoinCommunity } from "./Components/Join";
import { JoinCommunity1 } from "./Components/screen3";


export default function App() {
document.body.style.backgroundColor = '#f5f5f5';
document.body.style.margin = '0';
return(
    <Router>
        <Switch>
            <Route exact path={"/"}>
                <Factory1 />
            </Route>
            <Route path={"/join"}>
                <JoinCommunity></JoinCommunity>
            </Route>
            <Route path={"/join1"}>
                <JoinCommunity1></JoinCommunity1>
            </Route>
        </Switch>
    </Router>
);}