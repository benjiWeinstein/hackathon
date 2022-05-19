import { Factory1 } from "./Components/Factory1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { JoinCommunity } from "./Components/Join";
import { FactoryNew } from "./Components/try";
// import { useEffect } from "react";


export default function App() {
    // useEffect(() => {
    //     // document.body.style.zoom = "70%";q

    //   }, []);
document.body.style.backgroundColor = '#f5f5f5';
document.body.style.margin = '0';
return(
    <Router>
        <Switch>
            <Route exact path={"/"}>
                <FactoryNew/>
            </Route>
            <Route path={"/join/:id"} children={<JoinCommunity/>}>
                {/* <JoinCommunity></JoinCommunity> */}
            </Route>

        </Switch>
    </Router>
);}