import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import LoginPage from "./pages/login/login.component";
import React from "react";
import { auth } from "./firebase/firebase.utils";



class App extends React.Component {
constructor(){
super();

this.state={
  currentUser:null
}


}

unSubscribeFromAuth=null;


componentDidMount(){
 this.unSubscribeFromAuth=auth.onAuthStateChanged(user =>{
    this.setState({currentUser:user})
    console.log(this.state.currentUser.bc.displayName);
  })
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}


  render() {
    return (
      <div>
        <Header user={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/login" component={LoginPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
