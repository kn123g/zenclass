import { NavLink } from "react-router-dom";
import undraw_rocket from "../shared/img/undraw_rocket.svg";
// import ScriptTag from "react-script-tag";
import { useEffect } from "react";
// require("../shared/js/sb-admin-2.min.js");
export default function SideBar() {
  useEffect(() => {
    let timer = setInterval(() => {
      let script = document.createElement("script");
      script.src = "/vendor/jquery/jquery.min.js";
      script.async = true;
      document.getElementById("accordionSidebar").appendChild(script);
      script = document.createElement("script");
      script.src = "/vendor/bootstrap/js/bootstrap.bundle.min.js";
      script.async = true;
      document.getElementById("accordionSidebar").appendChild(script);
      script = document.createElement("script");
      script.src = "/vendor/jquery-easing/jquery.easing.min.js";
      script.async = true;
      document.getElementById("accordionSidebar").appendChild(script);
      script = document.createElement("script");
      script.src = "/js/sb-admin-2.min.js";
      script.async = true;
      document.getElementById("accordionSidebar").appendChild(script);
      return () => {
        // script = null;
      };
    }, 1000);
    setTimeout(() => clearInterval(timer), 1000);
  }, []);
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <NavLink
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/home"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </NavLink>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/home/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item active">
        <a
          href="#!"
          className="nav-link"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse show"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <NavLink to="/home/buttons" className="collapse-item active">
              Buttons
            </NavLink>
            <NavLink to="/home/cards" className="collapse-item">
              Cards
            </NavLink>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <a
          href="#!"
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <NavLink to="colors" className="collapse-item">
              Colors
            </NavLink>
            <NavLink to="borders" className="collapse-item">
              Borders
            </NavLink>
            <NavLink to="animations" className="collapse-item">
              Animations
            </NavLink>
            <NavLink to="other" className="collapse-item">
              Other
            </NavLink>
          </div>
        </div>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Addons</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a
          href="#!"
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <NavLink to="/login" className="collapse-item">
              Login
            </NavLink>
            <NavLink to="/register" className="collapse-item">
              Register
            </NavLink>
            <NavLink to="/forgotpassword" className="collapse-item">
              Forgot Password
            </NavLink>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <NavLink to="/home/404" className="collapse-item">
              404 Page
            </NavLink>
            <NavLink to="/home/blank" className="collapse-item">
              Blank Page
            </NavLink>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <NavLink to="/home/charts" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <NavLink to="/home/tables" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

      {/* <!-- Sidebar Message --> */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src={undraw_rocket}
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
          target="_blank"
          rel="noreferrer" 
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
}
