import React, { Component } from "react";

import "./css/AdminLTE.css";
import "./css/AdminLTE.min.css";
import "./css/adminlte.css.map";
import "./css/adminlte.min.css.map";
import "./css/alt/AdminLTE-bootstrap-social.css";
import "./css/alt/AdminLTE-fullcalendar.css";
import "./css/alt/AdminLTE-bootstrap-social.min.css";
import "./css/alt/AdminLTE-fullcalendar.min.css";
import "./css/alt/AdminLTE-select2.css";
import "./css/alt/AdminLTE-select2.min.css";
import "./css/alt/AdminLTE-without-plugins.css";
import "./css/alt/AdminLTE-without-plugins.min.css";
import "./css/skins/_all-skins.css";
import "./css/skins/_all-skins.min.css";
import "./css/skins/skin-black-light.css";
import "./css/skins/skin-black-light.min.css";
import "./css/skins/skin-black.css";
import "./css/skins/skin-black.min.css";
import "./css/skins/skin-blue-light.css";
import "./css/skins/skin-blue-light.min.css";
import "./css/skins/skin-blue.css";
import "./css/skins/skin-blue.min.css";
import "./css/skins/skin-green-light.css";
import "./css/skins/skin-green-light.min.css";
import "./css/skins/skin-green.css";
import "./css/skins/skin-green.min.css";
import "./css/skins/skin-purple-light.css";
import "./css/skins/skin-purple-light.min.css";
import "./css/skins/skin-purple.css";
import "./css/skins/skin-purple.min.css";
import "./css/skins/skin-red-light.css";
import "./css/skins/skin-red-light.min.css";
import "./css/skins/skin-red.css";
import "./css/skins/skin-red.min.css";
import "./css/skins/skin-yellow-light.css";
import "./css/skins/skin-yellow-light.min.css";
import "./css/skins/skin-yellow.css";
import "./css/skins/skin-yellow.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header className="main-header">
            <a href="index2.html" className="logo">
              {
                // mini logo for sidebar mini 50x50 pixels
              }
              <span className="logo-mini">
                <b>A</b>
                LT
              </span>
              {
                //logo for regular state and mobile devices
              }
              <span className="logo-lg">
                <b>Admin</b>
                LTE
              </span>
            </a>
            {
              // Header Navbar: style can be found in header.less
            }
            <nav className="navbar navbar-static-top">
              {
                // Sidebar toggle button
              }
              <a
                href="#"
                className="sidebar-toggle"
                data-toggle="push-menu"
                role="button"
              >
                <span className="sr-only">Toggle navigation</span>
              </a>
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  {
                    // Messages: style can be found in dropdown.less
                  }
                  <li className="dropdown messages-menu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-envelope-o" />
                      <span className="label label-success">4</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 4 messages</li>
                      <li>
                        {
                          // inner menu: contains the actual data
                        }
                        <ul className="menu">
                          <li>
                            {
                              // start message
                            }
                            <a href="#">
                              <div className="pull-left">
                                <img
                                  src={require("./img/user2-160x160.jpg")}
                                  className="img-circle"
                                  alt="User Image"
                                />
                              </div>
                              <h4>
                                Support Team
                                <small>
                                  <i className="fa fa-clock-o" /> 5 mins
                                </small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          {
                            // end message
                          }
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img
                                  src={require("./img/user3-128x128.jpg")}
                                  className="img-circle"
                                  alt="User Image"
                                />
                              </div>
                              <h4>
                                AdminLTE Design Team
                                <small>
                                  <i className="fa fa-clock-o" /> 2 hours
                                </small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img
                                  src={require("./img/user4-128x128.jpg")}
                                  className="img-circle"
                                  alt="User Image"
                                />
                              </div>
                              <h4>
                                Developers
                                <small>
                                  <i className="fa fa-clock-o" /> Today
                                </small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img
                                  src={require("./img/user3-128x128.jpg")}
                                  className="img-circle"
                                  alt="User Image"
                                />
                              </div>
                              <h4>
                                Sales Department
                                <small>
                                  <i className="fa fa-clock-o" /> Yesterday
                                </small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img
                                  src={require("./img/user4-128x128.jpg")}
                                  className="img-circle"
                                  alt="User Image"
                                />
                              </div>
                              <h4>
                                Reviewers
                                <small>
                                  <i className="fa fa-clock-o" /> 2 days
                                </small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer">
                        <a href="#">See All Messages</a>
                      </li>
                    </ul>
                  </li>
                  {
                    // Notifications: style can be found in dropdown.less
                  }
                  <li className="dropdown notifications-menu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-bell-o" />
                      <span className="label label-warning">10</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 10 notifications</li>
                      <li>
                        {
                          // inner menu: contains the actual data
                        }
                        <ul className="menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-aqua" /> 5 new
                              members joined today
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-warning text-yellow" /> Very
                              long description here that may not fit into the
                              page and may cause design problems
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-red" /> 5 new
                              members joined
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart text-green" />{" "}
                              25 sales made
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-user text-red" /> You changed
                              your username
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer">
                        <a href="#">View all</a>
                      </li>
                    </ul>
                  </li>
                  {
                    // Tasks: style can be found in dropdown.less
                  }
                  <li className="dropdown tasks-menu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fa fa-flag-o" />
                      <span className="label label-danger">9</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 9 tasks</li>
                      <li>
                        {
                          // inner menu: contains the actual data
                        }
                        <ul className="menu">
                          <li>
                            {
                              // Task item
                            }
                            <a href="#">
                              <h3>
                                Design some buttons
                                <small className="pull-right">20%</small>
                              </h3>
                              <div className="progress xs">
                                <div
                                  className="progress-bar progress-bar-aqua"
                                  style={{ width: "20%" }}
                                  role="progressbar"
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="sr-only">20% Complete</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          {
                            // end task item
                          }
                          <li>
                            {
                              // Task item
                            }
                            <a href="#">
                              <h3>
                                Create a nice theme
                                <small className="pull-right">40%</small>
                              </h3>
                              <div className="progress xs">
                                <div
                                  className="progress-bar progress-bar-green"
                                  style={{ width: "40%" }}
                                  role="progressbar"
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="sr-only">40% Complete</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          {
                            // end task item
                          }
                          <li>
                            {
                              // Task item
                            }
                            <a href="#">
                              <h3>
                                Some task I need to do
                                <small className="pull-right">60%</small>
                              </h3>
                              <div className="progress xs">
                                <div
                                  className="progress-bar progress-bar-red"
                                  style={{ width: "60%" }}
                                  role="progressbar"
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="sr-only">60% Complete</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          {
                            // end task item
                          }
                          <li>
                            {
                              // Task item
                            }
                            <a href="#">
                              <h3>
                                Make beautiful transitions
                                <small className="pull-right">80%</small>
                              </h3>
                              <div className="progress xs">
                                <div
                                  className="progress-bar progress-bar-yellow"
                                  style={{ width: "80%" }}
                                  role="progressbar"
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="sr-only">80% Complete</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          {
                            // end task item
                          }
                        </ul>
                      </li>
                      <li className="footer">
                        <a href="#">View all tasks</a>
                      </li>
                    </ul>
                  </li>
                  {
                    // User Account: style can be found in dropdown.less
                  }
                  <li className="dropdown user user-menu">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <img
                        src={require("./img/user2-160x160.jpg")}
                        className="user-image"
                        alt="User Image"
                      />
                      <span className="hidden-xs">Alexander Pierce</span>
                    </a>
                    <ul className="dropdown-menu">
                      {
                        // User image
                      }
                      <li className="user-header">
                        <img
                          src={require("./img/user2-160x160.jpg")}
                          className="img-circle"
                          alt="User Image"
                        />

                        <p>
                          Alexander Pierce - Web Developer
                          <small>Member since Nov. 2012</small>
                        </p>
                      </li>
                      {
                        // Menu Body
                      }
                      <li className="user-body">
                        <div className="row">
                          <div className="col-xs-4 text-center">
                            <a href="#">Followers</a>
                          </div>
                          <div className="col-xs-4 text-center">
                            <a href="#">Sales</a>
                          </div>
                          <div className="col-xs-4 text-center">
                            <a href="#">Friends</a>
                          </div>
                        </div>
                        {
                          // /.row
                        }
                      </li>
                      {
                        // Menu Footer
                      }
                      <li className="user-footer">
                        <div className="pull-left">
                          <a href="#" className="btn btn-default btn-flat">
                            Profile
                          </a>
                        </div>
                        <div className="pull-right">
                          <a href="#" className="btn btn-default btn-flat">
                            Sign out
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {
                    // Control Sidebar Toggle Button
                  }
                  <li>
                    <a href="#" data-toggle="control-sidebar">
                      <i className="fa fa-gears" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {
            // Left side column. contains the logo and sidebar
          }
          <aside className="main-sidebar">
            {
              // sidebar: style can be found in sidebar.less
            }
            <section className="sidebar">
              {
                // Sidebar user panel
              }
              <div className="user-panel">
                <div className="pull-left image">
                  <img
                    src={require("./img/user2-160x160.jpg")}
                    className="img-circle"
                    alt="User Image"
                  />
                </div>
                <div className="pull-left info">
                  <p>Alexander Pierce</p>
                  <a href="#">
                    <i className="fa fa-circle text-success" /> Online
                  </a>
                </div>
              </div>
              {
                // search form
              }
              <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                  <input
                    type="text"
                    name="q"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      name="search"
                      id="search-btn"
                      className="btn btn-flat"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
              {
                // /.search form   } { // sidebar menu: : style can be found insidebar.less
              }
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li className="active treeview">
                  <a href="#">
                    <i className="fa fa-dashboard" /> <span>Dashboard</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className="active">
                      <a href="index.html">
                        <i className="fa fa-circle-o" /> Dashboard v1
                      </a>
                    </li>
                    <li>
                      <a href="index2.html">
                        <i className="fa fa-circle-o" /> Dashboard v2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-files-o" />
                    <span>Layout Options</span>
                    <span className="pull-right-container">
                      <span className="label label-primary pull-right">4</span>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="pages/layout/top-nav.html">
                        <i className="fa fa-circle-o" /> Top Navigation
                      </a>
                    </li>
                    <li>
                      <a href="pages/layout/boxed.html">
                        <i className="fa fa-circle-o" /> Boxed
                      </a>
                    </li>
                    <li>
                      <a href="pages/layout/fixed.html">
                        <i className="fa fa-circle-o" /> Fixed
                      </a>
                    </li>
                    <li>
                      <a href="pages/layout/collapsed-sidebar.html">
                        <i className="fa fa-circle-o" /> Collapsed Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="pages/widgets.html">
                    <i className="fa fa-th" /> <span>Widgets</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-green">new</small>
                    </span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-pie-chart" />
                    <span>Charts</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="pages/charts/chartjs.html">
                        <i className="fa fa-circle-o" /> ChartJS
                      </a>
                    </li>
                    <li>
                      <a href="pages/charts/morris.html">
                        <i className="fa fa-circle-o" /> Morris
                      </a>
                    </li>
                    <li>
                      <a href="pages/charts/flot.html">
                        <i className="fa fa-circle-o" /> Flot
                      </a>
                    </li>
                    <li>
                      <a href="pages/charts/inline.html">
                        <i className="fa fa-circle-o" /> Inline charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-laptop" />
                    <span>UI Elements</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="pages/UI/general.html">
                        <i className="fa fa-circle-o" /> General
                      </a>
                    </li>
                    <li>
                      <a href="pages/UI/icons.html">
                        <i className="fa fa-circle-o" /> Icons
                      </a>
                    </li>
                    <li>
                      <a href="pages/UI/buttons.html">
                        <i className="fa fa-circle-o" /> Buttons
                      </a>
                    </li>
                    <li>
                      <a href="pages/UI/sliders.html">
                        <i className="fa fa-circle-o" /> Sliders
                      </a>
                    </li>
                    <li>
                      <a href="pages/UI/timeline.html">
                        <i className="fa fa-circle-o" /> Timeline
                      </a>
                    </li>
                    <li>
                      <a href="pages/UI/modals.html">
                        <i className="fa fa-circle-o" /> Modals
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-edit" /> <span>Forms</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="pages/forms/general.html">
                        <i className="fa fa-circle-o" /> General Elements
                      </a>
                    </li>
                    <li>
                      <a href="pages/forms/advanced.html">
                        <i className="fa fa-circle-o" /> Advanced Elements
                      </a>
                    </li>
                    <li>
                      <a href="pages/forms/editors.html">
                        <i className="fa fa-circle-o" /> Editors
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-table" /> <span>Tables</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="pages/tables/simple.html">
                        <i className="fa fa-circle-o" /> Simple tables
                      </a>
                    </li>
                    <li>
                      <a href="pages/tables/data.html">
                        <i className="fa fa-circle-o" /> Data tables
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="pages/calendar.html">
                    <i className="fa fa-calendar" /> <span>Calendar</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-red">3</small>
                      <small className="label pull-right bg-blue">17</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="pages/mailbox/mailbox.html">
                    <i className="fa fa-envelope" /> <span>Mailbox</span>
                    <span className="pull-right-container">
                      <small className="label pull-right bg-yellow">12</small>
                      <small className="label pull-right bg-green">16</small>
                      <small className="label pull-right bg-red">5</small>
                    </span>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-folder" /> <span>Examples</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="pages/examples/invoice.html">
                        <i className="fa fa-circle-o" /> Invoice
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/profile.html">
                        <i className="fa fa-circle-o" /> Profile
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/login.html">
                        <i className="fa fa-circle-o" /> Login
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/register.html">
                        <i className="fa fa-circle-o" /> Register
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/lockscreen.html">
                        <i className="fa fa-circle-o" /> Lockscreen
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/404.html">
                        <i className="fa fa-circle-o" /> 404 Error
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/500.html">
                        <i className="fa fa-circle-o" /> 500 Error
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/blank.html">
                        <i className="fa fa-circle-o" /> Blank Page
                      </a>
                    </li>
                    <li>
                      <a href="pages/examples/pace.html">
                        <i className="fa fa-circle-o" /> Pace Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="fa fa-share" /> <span>Multilevel</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level One
                      </a>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level One
                        <span className="pull-right-container">
                          <i className="fa fa-angle-left pull-right" />
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-circle-o" /> Level Two
                          </a>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="fa fa-circle-o" /> Level Two
                            <span className="pull-right-container">
                              <i className="fa fa-angle-left pull-right" />
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-circle-o" /> Level Three
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-circle-o" /> Level Three
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level One
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https:{ //adminlte.io/docs">
                    <i className="fa fa-book" /> <span>Documentation</span>
                  </a>
                </li>
                <li className="header">LABELS</li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-red" />{" "}
                    <span>Important</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-yellow" />{" "}
                    <span>Warning</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-aqua" />{" "}
                    <span>Information</span>
                  </a>
                </li>
              </ul>
            </section>
            {
              // /.sidebar
            }
          </aside>
          {
            // Content Wrapper. Contains page content
          }
          <div className="content-wrapper">
            {
              // Content Header (Page header)
            }
            <section className="content-header">
              <h1>
                Dashboard
                <small>Control panel</small>
              </h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fa fa-dashboard" /> Home
                  </a>
                </li>
                <li className="active">Dashboard</li>
              </ol>
            </section>
            {
              // Main content
            }
            <section className="content">
              {
                // Small boxes (Stat box)
              }
              <div className="row">
                <div className="col-lg-3 col-xs-6">
                  {
                    // small box
                  }
                  <div className="small-box bg-aqua">
                    <div className="inner">
                      <h3>150</h3>

                      <p>New Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fa fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {
                  // ./col
                }
                <div className="col-lg-3 col-xs-6">
                  {
                    // small box
                  }
                  <div className="small-box bg-green">
                    <div className="inner">
                      <h3>
                        53
                        <sup style={{ fontSize: "20px" }}>%</sup>
                      </h3>

                      <p>Bounce Rate</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fa fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                // ./col
                <div className="col-lg-3 col-xs-6">
                  {
                    // small box
                  }
                  <div className="small-box bg-yellow">
                    <div className="inner">
                      <h3>44</h3>

                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fa fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                // ./col
                <div className="col-lg-3 col-xs-6">
                  {
                    // small box
                  }
                  <div className="small-box bg-red">
                    <div className="inner">
                      <h3>65</h3>

                      <p>Unique Visitors</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fa fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {
                  // ./col
                }
              </div>
              {
                // /.row   } { // Main row
              }
              <div className="row">
                {
                  // Left col
                }
                <section className="col-lg-7 connectedSortable">
                  {
                    // Custom tabs (Charts with tabs)
                  }
                  <div className="nav-tabs-custom">
                    {
                      // Tabs within a box
                    }
                    <ul className="nav nav-tabs pull-right">
                      <li className="active">
                        <a href="#revenue-chart" data-toggle="tab">
                          Area
                        </a>
                      </li>
                      <li>
                        <a href="#sales-chart" data-toggle="tab">
                          Donut
                        </a>
                      </li>
                      <li className="pull-left header">
                        <i className="fa fa-inbox" /> Sales
                      </li>
                    </ul>
                    <div className="tab-content no-padding">
                      {
                        // Morris chart - Sales
                      }
                      <div
                        className="chart tab-pane active"
                        id="revenue-chart"
                        style={{ position: "relative", height: "300px" }}
                      />
                      <div
                        className="chart tab-pane"
                        id="sales-chart"
                        style={{ position: "relative", height: "300px" }}
                      />
                    </div>
                  </div>
                  {
                    // /.nav-tabs-custom   } { // Chat box
                  }
                  <div className="box box-success">
                    <div className="box-header">
                      <i className="fa fa-comments-o" />

                      <h3 className="box-title">Chat</h3>

                      <div
                        className="box-tools pull-right"
                        data-toggle="tooltip"
                        title="Status"
                      >
                        <div className="btn-group" data-toggle="btn-toggle">
                          <button
                            type="button"
                            className="btn btn-default btn-sm active"
                          >
                            <i className="fa fa-square text-green" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-sm"
                          >
                            <i className="fa fa-square text-red" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="box-body chat" id="chat-box">
                      {
                        // chat item
                      }
                      <div className="item">
                        <img
                          src={require("./img/user4-128x128.jpg")}
                          alt="user image"
                          className="online"
                        />
                        <p className="message">
                          <a href="#" className="name">
                            <small className="text-muted pull-right">
                              <i className="fa fa-clock-o" /> 2:15
                            </small>
                            Mike Doe
                          </a>
                          I would like to meet you to discuss the latest news
                          about the arrival of the new theme. They say it is
                          going to be one the best themes on the market
                        </p>
                        <div className="attachment">
                          <h4>Attachments:</h4>

                          <p className="filename">Theme-thumbnail-image.jpg</p>

                          <div className="pull-right">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm btn-flat"
                            >
                              Open
                            </button>
                          </div>
                        </div>
                        {
                          // /.attachment
                        }
                      </div>
                      {
                        // /.item
                      }
                      {
                        // chat item
                      }
                      <div className="item">
                        <img
                          src={require("./img/user3-128x128.jpg")}
                          alt="user image"
                          className="offline"
                        />

                        <p className="message">
                          <a href="#" className="name">
                            <small className="text-muted pull-right">
                              <i className="fa fa-clock-o" /> 5:15
                            </small>
                            Alexander Pierce
                          </a>
                          I would like to meet you to discuss the latest news
                          about the arrival of the new theme. They say it is
                          going to be one the best themes on the market
                        </p>
                      </div>
                      {
                        // /.item
                      }
                      {
                        // chat item
                      }
                      <div className="item">
                        <img
                          src={require("./img/user2-160x160.jpg")}
                          alt="user image"
                          className="offline"
                        />

                        <p className="message">
                          <a href="#" className="name">
                            <small className="text-muted pull-right">
                              <i className="fa fa-clock-o" /> 5:30
                            </small>
                            Susan Doe
                          </a>
                          I would like to meet you to discuss the latest news
                          about the arrival of the new theme. They say it is
                          going to be one the best themes on the market
                        </p>
                      </div>
                      {
                        // /.item
                      }
                    </div>
                    {
                      // /.chat
                    }
                    <div className="box-footer">
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Type message..."
                        />

                        <div className="input-group-btn">
                          <button type="button" className="btn btn-success">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {
                    // /.box (chat box)
                  }{" "}
                  {
                    // TO DO List
                  }
                  <div className="box box-primary">
                    <div className="box-header">
                      <i className="ion ion-clipboard" />

                      <h3 className="box-title">To Do List</h3>

                      <div className="box-tools pull-right">
                        <ul className="pagination pagination-sm inline">
                          <li>
                            <a href="#">&laquo;</a>
                          </li>
                          <li>
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">&raquo;</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {
                      // /.box-header
                    }
                    <div className="box-body">
                      {
                        // See dist/js/pages/dashboard.js to activate the todoList plugin
                      }
                      <ul className="todo-list">
                        <li>
                          {
                            // drag handle
                          }
                          <span className="handle">
                            <i className="fa fa-ellipsis-v" />
                            <i className="fa fa-ellipsis-v" />
                          </span>
                          {
                            // checkbox
                          }
                          <input type="checkbox" value="" />
                          {
                            // todo text
                          }
                          <span className="text">Design a nice theme</span>
                          {
                            // Emphasis label
                          }
                          <small className="label label-danger">
                            <i className="fa fa-clock-o" /> 2 mins
                          </small>
                          {
                            // General tools such as edit or delete
                          }
                          <div className="tools">
                            <i className="fa fa-edit" />
                            <i className="fa fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fa fa-ellipsis-v" />
                            <i className="fa fa-ellipsis-v" />
                          </span>
                          <input type="checkbox" value="" />
                          <span className="text">
                            Make the theme responsive
                          </span>
                          <small className="label label-info">
                            <i className="fa fa-clock-o" /> 4 hours
                          </small>
                          <div className="tools">
                            <i className="fa fa-edit" />
                            <i className="fa fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fa fa-ellipsis-v" />
                            <i className="fa fa-ellipsis-v" />
                          </span>
                          <input type="checkbox" value="" />
                          <span className="text">
                            Let theme shine like a star
                          </span>
                          <small className="label label-warning">
                            <i className="fa fa-clock-o" /> 1 day
                          </small>
                          <div className="tools">
                            <i className="fa fa-edit" />
                            <i className="fa fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fa fa-ellipsis-v" />
                            <i className="fa fa-ellipsis-v" />
                          </span>
                          <input type="checkbox" value="" />
                          <span className="text">
                            Let theme shine like a star
                          </span>
                          <small className="label label-success">
                            <i className="fa fa-clock-o" /> 3 days
                          </small>
                          <div className="tools">
                            <i className="fa fa-edit" />
                            <i className="fa fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fa fa-ellipsis-v" />
                            <i className="fa fa-ellipsis-v" />
                          </span>
                          <input type="checkbox" value="" />
                          <span className="text">
                            Check your messages and notifications
                          </span>
                          <small className="label label-primary">
                            <i className="fa fa-clock-o" /> 1 week
                          </small>
                          <div className="tools">
                            <i className="fa fa-edit" />
                            <i className="fa fa-trash-o" />
                          </div>
                        </li>
                        <li>
                          <span className="handle">
                            <i className="fa fa-ellipsis-v" />
                            <i className="fa fa-ellipsis-v" />
                          </span>
                          <input type="checkbox" value="" />
                          <span className="text">
                            Let theme shine like a star
                          </span>
                          <small className="label label-default">
                            <i className="fa fa-clock-o" /> 1 month
                          </small>
                          <div className="tools">
                            <i className="fa fa-edit" />
                            <i className="fa fa-trash-o" />
                          </div>
                        </li>
                      </ul>
                    </div>
                    {
                      // /.box-body
                    }
                    <div className="box-footer clearfix no-border">
                      <button
                        type="button"
                        className="btn btn-default pull-right"
                      >
                        <i className="fa fa-plus" /> Add item
                      </button>
                    </div>
                  </div>
                  {
                    // /.box   } { // quick email widget
                  }
                  <div className="box box-info">
                    <div className="box-header">
                      <i className="fa fa-envelope" />
                      <h3 className="box-title">Quick Email</h3>
                      {
                        // tools box
                      }
                      <div className="pull-right box-tools">
                        <button
                          type="button"
                          className="btn btn-info btn-sm"
                          data-widget="remove"
                          data-toggle="tooltip"
                          title="Remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </div>
                      {
                        // /. tools
                      }
                    </div>
                    <div className="box-body">
                      <form action="#" method="post">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="emailto"
                            placeholder="Email to:"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Subject"
                          />
                        </div>
                        <div>
                          <textarea
                            className="textarea"
                            placeholder="Message"
                            style={{
                              width: "100%",
                              height: "125px",
                              fontSize: "14px",
                              lineHeight: "18px",
                              border: "1px",
                              solid: "#dddddd",
                              padding: "10px"
                            }}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="box-footer clearfix">
                      <button
                        type="button"
                        className="pull-right btn btn-default"
                        id="sendEmail"
                      >
                        Send
                        <i className="fa fa-arrow-circle-right" />
                      </button>
                    </div>
                  </div>
                </section>
                {/* Left col  
                  right col (We are only adding the ID to make the widgets sortable)
               
                 */}
                <section className="col-lg-5 connectedSortable">
                  {
                    // Map box
                  }
                  <div className="box box-solid bg-light-blue-gradient">
                    <div className="box-header">
                      {
                        // tools box
                      }
                      <div className="pull-right box-tools">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm daterange pull-right"
                          data-toggle="tooltip"
                          title="Date range"
                        >
                          <i className="fa fa-calendar" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm pull-right"
                          data-widget="collapse"
                          data-toggle="tooltip"
                          title="Collapse"
                          style={{ marginRight: "5px" }}
                        >
                          <i className="fa fa-minus" />
                        </button>
                      </div>
                      {
                        // /. tools
                      }
                      <i className="fa fa-map-marker" />
                      <h3 className="box-title">Visitors</h3>
                    </div>
                    <div className="box-body">
                      <div
                        id="world-map"
                        style={{ height: "250px", width: "100%" }}
                      />
                    </div>
                    {
                      // /.box-body
                    }
                    <div className="box-footer no-border">
                      <div className="row">
                        <div
                          className="col-xs-4 text-center"
                          style={{ borderRight: "1px", solid: "#f4f4f4" }}
                        >
                          <div id="sparkline-1" />
                          <div className="knob-label">Visitors</div>
                        </div>
                        {
                          // ./col
                        }
                        <div
                          className="col-xs-4 text-center"
                          style={{ borderRight: "1px", solid: "#f4f4f4" }}
                        >
                          <div id="sparkline-2" />
                          <div className="knob-label">Online</div>
                        </div>
                        {
                          // ./col
                        }
                        <div className="col-xs-4 text-center">
                          <div id="sparkline-3" />
                          <div className="knob-label">Exists</div>
                        </div>
                        {
                          // ./col
                        }
                      </div>
                      {
                        // /.row
                      }
                    </div>
                  </div>
                  {
                    // /.box
                  }{" "}
                  {
                    // solid sales graph
                  }
                  <div className="box box-solid bg-teal-gradient">
                    <div className="box-header">
                      <i className="fa fa-th" />

                      <h3 className="box-title">Sales Graph</h3>

                      <div className="box-tools pull-right">
                        <button
                          type="button"
                          className="btn bg-teal btn-sm"
                          data-widget="collapse"
                        >
                          <i className="fa fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn bg-teal btn-sm"
                          data-widget="remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="box-body border-radius-none">
                      <div
                        className="chart"
                        id="line-chart"
                        style={{ height: "250px" }}
                      />
                    </div>
                    {
                      // /.box-body
                    }
                    <div className="box-footer no-border">
                      <div className="row">
                        <div
                          className="col-xs-4 text-center"
                          style={{ borderRight: "1px", solid: "#f4f4f4" }}
                        >
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            value="20"
                            data-width="60"
                            data-height="60"
                            data-fgColor="#39CCCC"
                          />

                          <div className="knob-label">Mail-Orders</div>
                        </div>
                        {
                          // ./col
                        }
                        <div
                          className="col-xs-4 text-center"
                          style={{ borderRight: "1px", solid: "#f4f4f4" }}
                        >
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            value="50"
                            data-width="60"
                            data-height="60"
                            data-fgColor="#39CCCC"
                          />

                          <div className="knob-label">Online</div>
                        </div>
                        {
                          // ./col
                        }
                        <div className="col-xs-4 text-center">
                          <input
                            type="text"
                            className="knob"
                            data-readonly="true"
                            value="30"
                            data-width="60"
                            data-height="60"
                            data-fgColor="#39CCCC"
                          />

                          <div className="knob-label">In-Store</div>
                        </div>
                        {
                          // ./col
                        }
                      </div>
                      {
                        // /.row
                      }
                    </div>
                    {
                      // /.box-footer
                    }
                  </div>
                  {
                    // /.box
                  }{" "}
                  {
                    // Calendar
                  }
                  <div className="box box-solid bg-green-gradient">
                    <div className="box-header">
                      <i className="fa fa-calendar" />
                      <h3 className="box-title">Calendar</h3>
                      {
                        // tools box
                      }
                      <div className="pull-right box-tools">
                        {
                          // button with a dropdown
                        }
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-success btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <i className="fa fa-bars" />
                          </button>
                          <ul className="dropdown-menu pull-right" role="menu">
                            <li>
                              <a href="#">Add new event</a>
                            </li>
                            <li>
                              <a href="#">Clear events</a>
                            </li>
                            <li className="divider" />
                            <li>
                              <a href="#">View calendar</a>
                            </li>
                          </ul>
                        </div>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-widget="collapse"
                        >
                          <i className="fa fa-minus" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-sm"
                          data-widget="remove"
                        >
                          <i className="fa fa-times" />
                        </button>
                      </div>
                      {
                        // /. tools
                      }
                    </div>
                    {
                      // /.box-header
                    }
                    <div className="box-body no-padding">
                      {
                        //The calendar
                      }
                      <div id="calendar" style={{ width: "100%" }} />
                    </div>
                    {
                      // /.box-body
                    }
                    <div className="box-footer text-black">
                      <div className="row">
                        <div className="col-sm-6">
                          {
                            // Progress bars
                          }
                          <div className="clearfix">
                            <span className="pull-left">Task #1</span>
                            <small className="pull-right">90%</small>
                          </div>
                          <div className="progress xs">
                            <div
                              className="progress-bar progress-bar-green"
                              style={{ width: "90%" }}
                            />
                          </div>
                          <div className="clearfix">
                            <span className="pull-left">Task #2</span>
                            <small className="pull-right">70%</small>
                          </div>
                          <div className="progress xs">
                            <div
                              className="progress-bar progress-bar-green"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                        {
                          // /.col
                        }
                        <div className="col-sm-6">
                          <div className="clearfix">
                            <span className="pull-left">Task #3</span>
                            <small className="pull-right">60%</small>
                          </div>
                          <div className="progress xs">
                            <div
                              className="progress-bar progress-bar-green"
                              style={{ width: "60%" }}
                            />
                          </div>

                          <div className="clearfix">
                            <span className="pull-left">Task #4</span>
                            <small className="pull-right">40%</small>
                          </div>
                          <div className="progress xs">
                            <div
                              className="progress-bar progress-bar-green"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </div>
                        {
                          // /.col
                        }
                      </div>
                      {
                        // /.row
                      }
                    </div>
                  </div>
                  {
                    // /.box
                  }
                </section>
                {/*
               right col 
               */}
              </div>
              {
                // /.row (main row)
              }
            </section>
            {
              // /.content
            }
          </div>
          {
            // /.content-wrapper
          }
          <footer className="main-footer">
            <div className="pull-right hidden-xs">
              <b>Version</b> 2.4.0
            </div>
            <strong>
              Copyright &copy; 2014-2016{" "}
              <a href="https:{ //adminlte.io">Almsaeed Studio</a>.
            </strong>{" "}
            All rights reserved.
          </footer>
          {
            // Control Sidebar
          }
          <aside className="control-sidebar control-sidebar-dark">
            {
              // Create the tabs
            }
            <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
              <li>
                <a href="#control-sidebar-home-tab" data-toggle="tab">
                  <i className="fa fa-home" />
                </a>
              </li>
              <li>
                <a href="#control-sidebar-settings-tab" data-toggle="tab">
                  <i className="fa fa-gears" />
                </a>
              </li>
            </ul>
            {
              // Tab panes
            }
            <div className="tab-content">
              {
                // Home tab content
              }
              <div className="tab-pane" id="control-sidebar-home-tab">
                <h3 className="control-sidebar-heading">Recent Activity</h3>
                <ul className="control-sidebar-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-birthday-cake bg-red" />

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">
                          Langdon's Birthday
                        </h4>

                        <p>Will be 23 on April 24th</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-user bg-yellow" />

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">
                          Frodo Updated His Profile
                        </h4>

                        <p>New phone +1(800)555-1234</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-envelope-o bg-light-blue" />

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">
                          Nora Joined Mailing List
                        </h4>

                        <p>nora@example.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-file-code-o bg-green" />

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">
                          Cron Job 254 Executed
                        </h4>

                        <p>Execution time 5 seconds</p>
                      </div>
                    </a>
                  </li>
                </ul>
                {
                  // /.control-sidebar-menu
                }
                <h3 className="control-sidebar-heading">Tasks Progress</h3>
                <ul className="control-sidebar-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Custom Template Design
                        <span className="label label-danger pull-right">
                          70%
                        </span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-danger"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Update Resume
                        <span className="label label-success pull-right">
                          95%
                        </span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-success"
                          style={{ width: "95%" }}
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Laravel Integration
                        <span className="label label-warning pull-right">
                          50%
                        </span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-warning"
                          style={{ width: "50%" }}
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <h4 className="control-sidebar-subheading">
                        Back End Framework
                        <span className="label label-primary pull-right">
                          68%
                        </span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div
                          className="progress-bar progress-bar-primary"
                          style={{ width: "68%" }}
                        />
                      </div>
                    </a>
                  </li>
                </ul>
                {
                  // /.control-sidebar-menu
                }
              </div>
              {
                // /.tab-pane
              }{" "}
              {
                // Stats tab content
              }
              <div className="tab-pane" id="control-sidebar-stats-tab">
                Stats Tab Content
              </div>
              {
                // /.tab-pane
              }{" "}
              {
                // Settings tab content
              }
              <div className="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                  <h3 className="control-sidebar-heading">General Settings</h3>
                  <div className="form-group">
                    <label className="control-sidebar-subheading">
                      Report panel usage
                      <input type="checkbox" className="pull-right" checked />
                    </label>

                    <p>Some information about this general settings option</p>
                  </div>
                  {
                    // /.form-group
                  }
                  <div className="form-group">
                    <label className="control-sidebar-subheading">
                      Allow mail redirect
                      <input type="checkbox" className="pull-right" checked />
                    </label>

                    <p>Other sets of options are available</p>
                  </div>
                  {
                    // /.form-group
                  }
                  <div className="form-group">
                    <label className="control-sidebar-subheading">
                      Expose author name in posts
                      <input type="checkbox" className="pull-right" checked />
                    </label>

                    <p>Allow the user to show his name in blog posts</p>
                  </div>
                  {
                    // /.form-group
                  }
                  <h3 className="control-sidebar-heading">Chat Settings</h3>
                  <div className="form-group">
                    <label className="control-sidebar-subheading">
                      Show me as online
                      <input type="checkbox" className="pull-right" checked />
                    </label>
                  </div>
                  {
                    // /.form-group
                  }
                  <div className="form-group">
                    <label className="control-sidebar-subheading">
                      Turn off notifications
                      <input type="checkbox" className="pull-right" />
                    </label>
                  </div>
                  {
                    // /.form-group
                  }
                  <div className="form-group">
                    <label className="control-sidebar-subheading">
                      Delete chat history
                      <a
                        href="javascript:void(0)"
                        className="text-red pull-right"
                      >
                        <i className="fa fa-trash-o" />
                      </a>
                    </label>
                  </div>
                  {
                    // /.form-group
                  }
                </form>
              </div>
              {
                // /.tab-pane
              }
            </div>
          </aside>
          {
            // /.control-sidebar
          }{" "}
          {
            // Add the sidebar's background. This div must be placed immediately after the control sidebar
          }
          <div className="control-sidebar-bg" />
        </div>
        {
          // ./wrapper
        }{" "}
        {
          // jQuery 3
        }
        <script src="bower_components/jquery/dist/jquery.min.js" />
        {
          // jQuery UI 1.11.4
        }
        <script src="bower_components/jquery-ui/jquery-ui.min.js" />
        {
          // Resolve conflict in jQuery UI tooltip with Bootstrap tooltip
        }
        <script>$.widget.bridge('uibutton', $.ui.button);</script>
        {
          // Bootstrap 3.3.7
        }
        <script src="bower_components/bootstrap/dist/js/bootstrap.min.js" />
        {
          // Morris.js charts
        }
        <script src="bower_components/raphael/raphael.min.js" />
        <script src="bower_components/morris.js/morris.min.js" />
        {
          // Sparkline
        }
        <script src="bower_components/jquery-sparkline/dist/jquery.sparkline.min.js" />
        {
          // jvectormap
        }
        <script src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" />
        <script src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js" />
        {
          // jQuery Knob Chart
        }
        <script src="bower_components/jquery-knob/dist/jquery.knob.min.js" />
        {
          // daterangepicker
        }
        <script src="bower_components/moment/min/moment.min.js" />
        <script src="bower_components/bootstrap-daterangepicker/daterangepicker.js" />
        {
          // datepicker
        }
        <script src="bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js" />
        {
          // Bootstrap WYSIHTML5
        }
        <script src="plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" />
        {
          // Slimscroll
        }
        <script src="bower_components/jquery-slimscroll/jquery.slimscroll.min.js" />
        {
          // FastClick
        }
        <script src="bower_components/fastclick/lib/fastclick.js" />
        {
          // AdminLTE App
        }
        <script src="dist/js/adminlte.min.js" />
        {
          // AdminLTE dashboard demo (This is only for demo purposes)
        }
        <script src="dist/js/pages/dashboard.js" />
        {
          // AdminLTE for demo purposes
        }
        <script src="dist/js/demo.js" />
      </div>
    );
  }
}

export default App;
