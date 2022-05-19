import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { JoinCommunity } from "./Components/Community Page/join";
import { FactoryNew } from "./Components/Home Page/Home";
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
            </Route>

        </Switch>
    </Router>
);}