import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Form from "./components/Form"
import Redirect from "./components/Redirect"
import "./style.scss";

class App extends React.Component {
  render () {
    return (         
      <Router>       
        <Switch>
          <Route path="/redirect">
            <Redirect />
          </Route>
          <Route path="/">
            <Header/>
            <div className="container">
            <Form/> 
            </div> 
          </Route>
        </Switch>           
      </Router>          
    )
  }
}

export default App;


