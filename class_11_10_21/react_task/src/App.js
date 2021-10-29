import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LeftSideBar from "./sidebar/leftsidebar";
import Users from "./users/users";
import User from "./user/user";
import CreateUser from "./user/createUser";
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Switch>
        <Route path="/home">
          <div className="row">
            <div className="col-2">
              <LeftSideBar />
            </div>
            <div className="col-10">
              <Route path="/home/users" exact component={Users}>
              </Route>
              <Route path="/home/users/:userId" exact component={User}>
              </Route>
              <Route path="/home/create" exact component={CreateUser}> 
              </Route>
              <Redirect to="/home/users"/>
            </div>
          </div>
        </Route>        
        <Route path="/" exact>
          <Redirect to="/home/users"/>
        </Route>
        <Route path="**"  render={()=>{return <h1>Not Found</h1>}}/>
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;
