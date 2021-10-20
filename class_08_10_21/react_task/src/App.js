import "./App.css";
import "./shared/vendor/fontawesome-free/css/all.min.css";
import "./shared/css/sb-admin-2.min.css";
// import ScriptTag from "react-script-tag";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  // NavLink,
} from "react-router-dom";
import Sidebar from "./sideBar/sideBar";
import TopBar from "./topBar/topBar";
import Footer from "./footer/footer";
import ScrollTop from "./scrolltop/scrolltop";
import Dashboard from "./dashboard/dashboard";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/forgotpassword/forgotpassword";
import Blank from "./pages/blank/blank";
import NotFound from "./pages/notfound/notfound";
import Button from "./components/button/button";
import Cards from "./components/cards/cards";
import Colors from "./utilities/colors/colors";
import Borders from "./utilities/borders/borders";
import Animation from "./utilities/animation/animation";
import Other from "./utilities/other/other";
import Charts from "./charts/charts";
import Tables from "./tables/tables";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <TopBar />
                <Switch>
                  <Route path="/home/dashboard" exact>
                    <Dashboard />
                  </Route>
                  <Route path="/home/buttons" exact>
                    <Button />
                  </Route>
                  <Route path="/home/cards" exact>
                    <Cards />
                  </Route>
                  <Route path="/home/colors" exact>
                    <Colors/>
                  </Route>
                  <Route path="/home/borders" exact>
                    <Borders/>
                  </Route>
                  <Route path="/home/animations" exact>
                    <Animation/>
                  </Route>
                  <Route path="/home/other" exact>
                    <Other/>
                  </Route>
                  <Route path="/home/404" exact>
                    <NotFound />
                  </Route>
                  <Route path="/home/blank" exact>
                    <Blank />
                  </Route>
                  <Route path="/home/charts" exact>
                    <Charts/>
                  </Route>
                  <Route path="/home/tables" exact>
                    <Tables/>
                  </Route>
                  <Redirect to="/home/dashboard" />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
          <ScrollTop />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/logout" exact>
          logout
        </Route>
        <Route path="/forgotpassword" exact>
          <ForgotPassword />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/404" exact>
          404
        </Route>
        <Route path="/blank" exact>
          <Blank />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
