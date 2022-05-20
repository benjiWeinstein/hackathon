import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Discussion } from "./Components/Community Page/Discussion";
import { About } from "./Components/Community Page/About";
import { FactoryNew } from "./Components/Home Page/Home";
import { Chat } from "./Components/Community Page/Chat";
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
            <Route  path={"/discussion"}>
                <Discussion></Discussion>
            </Route>
            <Route path={"/discussion/:id"} children={<Discussion/>}></Route>
            <Route path={"/about/:id"} children={<About/>}></Route>
            <Route path={"/chat/:id"} children={<Chat/>}></Route>



        </Switch>
    </Router>
);}