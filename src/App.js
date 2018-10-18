import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {/* <!-- Main Header --> */}
          <header className="main-header">
            {/* <!-- Logo --> */}
            <a href="index2.html" className="logo">
              {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
              <span className="logo-mini">
                <b>A</b>
                LT
              </span>
              {/* <!-- logo for regular state and mobile devices --> */}
              <span className="logo-lg">
                <b>RYDE</b>
                Admin
              </span>
            </a>

            {/* <!-- Header Navbar --> */}
            <nav className="navbar navbar-static-top" role="navigation">
              {/* <!-- Sidebar toggle button--> */}
              <a
                href="#"
                className="sidebar-toggle"
                data-toggle="push-menu"
                role="button"
              >
                <span className="sr-only">Toggle navigation</span>
              </a>
              {/* <!-- Navbar Right Menu --> */}
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  {/* <!-- Messages: style can be found in dropdown.less-->*/}
                  <li className="dropdown messages-menu">
                    {/* <!-- Menu toggle button --> */}
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
                        {/* <!-- inner menu: contains the messages --> */}
                        <ul className="menu">
                          <li>
                            {/* <!-- start message --> */}
                            <a href="#">
                              <div className="pull-left">
                                {/* <!-- User Image --> */}
                                <img
                                  src="dist/img/user2-160x160.jpg"
                                  className="img-circle"
                                  alt="User Image"
                                />
                              </div>
                              {/* <!-- Message title and timestamp --> */}
                              <h4>
                                Support Team
                                <small>
                                  <i className="fa fa-clock-o" /> 5 mins
                                </small>
                              </h4>
                              {/* <!-- The message --> */}
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          {/* <!-- end message --> */}
                        </ul>
                        {/* <!-- /.menu --> */}
                      </li>
                      <li className="footer">
                        <a href="#">See All Messages</a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- /.messages-menu --> */}

                  {/* <!-- Notifications Menu --> */}
                  <li className="dropdown notifications-menu">
                    {/* <!-- Menu toggle button --> */}
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
                        {/* <!-- Inner Menu: contains the notifications --> */}
                        <ul className="menu">
                          <li>
                            {/* <!-- start notification --> */}
                            <a href="#">
                              <i className="fa fa-users text-aqua" /> 5 new
                              members joined today
                            </a>
                          </li>
                          {/* <!-- end notification --> */}
                        </ul>
                      </li>
                      <li className="footer">
                        <a href="#">View all</a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Tasks Menu --> */}
                  <li className="dropdown tasks-menu">
                    {/* <!-- Menu Toggle Button --> */}
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
                        {/* <!-- Inner menu: contains the tasks --> */}
                        <ul className="menu">
                          <li>
                            {/* <!-- Task item --> */}
                            <a href="#">
                              {/* <!-- Task title and progress text --> */}
                              <h3>
                                Design some buttons
                                <small className="pull-right">20%</small>
                              </h3>
                              {/* <!-- The progressheaderheaderheader bar --> */}
                              <div className="progress xs">
                                {/* <!-- Change the css width attribute to simulate progress --> */}
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
                          {/* <!-- end task item --> */}
                        </ul>
                      </li>
                      <li className="footer">
                        <a href="#">View all tasks</a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- User Account Menu --> */}
                  <li className="dropdown user usedropdown-tr-menu">
                    {/* <!-- Menu Toggle Button --> */}
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {/* <!-- The user image in the navbar--> */}
                      <img
                        src="dist/img/user2-160x160.jpg"
                        className="user-image"
                      />
                      {/* <!-- hidden-xs hides the username on small devices so only the image appears. --> */}
                      <span className="hidden-xs">Alexander</span>
                    </a>
                    <ul className="dropdown-menu">
                      {/* <!-- The user image in the menu --> */}
                      <li className="user-header">
                        <img
                          src="dist/img/user2-160x160.jpg"
                          className="img-circle"
                          alt="User Image"
                        />

                        <p>
                          Alexander Pierce - Web Developer
                          <small>Member since Nov. 2012</small>
                        </p>
                      </li>
                      {/* <!-- Menu Body --> */}
                      <li className="user-body">
                        {/* <div className="row">
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
                        {/* <!-- /.row --> */}
                      </li>
                      {/* <!-- Menu Footer--> */}
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
                  {/* <!-- Control Sidebar Toggle Button --> */}
                  {/*<li>
                    <a href="#" data-toggle="control-sidebar">
                      <i className="fa fa-gears" />
                    </a>
                  </li>*/}
                </ul>
              </div>
            </nav>
          </header>
          {/* <!-- Left side column. contains the logo and sidebar --> */}
          <aside className="main-sidebar">
            {/* <!-- sidebar: style can be found in sidebar.less --> */}
            <section className="sidebar">
              {/* <!-- Sidebar user panel (optional) --> */}
              <div className="user-panel">
                <div className="pull-left image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle"
                    alt="User Image"
                  />
                </div>
                <div className="pull-left info">
                  <p>Alexander</p>
                  {/* <!-- Status --> */}
                  <a href="#">
                    <i className="fa fa-circle text-success" /> "Online"
                  </a>
                </div>
              </div>

              {/* <!-- search form (Optional) --> */}
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
              {/* <!-- /.search form --> */}

              {/* <!-- Sidebar Menu --> */}
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                {/* <!-- Optionally, you can add icons to the links --> */}
                <li className="active">
                  <a href="#">
                    <i className="fa fa-dashboard" /> <span>DASHBOARD</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>USERS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>CAR FEATURES</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />{" "}
                    <span>FEREE DELIVEYRY LOCATION</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>CARS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>BOOKINGS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>BOOKINGS CHANGES</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>COUPONS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>TRANSACTIONS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>EMAIL LIST</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>EMAIL (sent)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>CAMPAIGNS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />{" "}
                    <span>REGESTRATION PROMOTION</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>PROMOTIONS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>PARKING LOTS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />{" "}
                    <span>FREE DELIVERY LOCATIONS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>CAR EDIT LOGS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>TIERS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />
                    <span>CAR PROTECTION LEVELS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>CAR INSURANCES</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>CREDIT CARDS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" /> <span>EXTRA CHARGES</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />
                    <span>REFERRALS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />
                    <span>REFERRAL CODES</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />
                    <span>CONFIGURATIONS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />
                    <span>TRANSACTION RULES</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />
                    <span>PAYMENT GATEWAY</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-book" />
                    <span>COMPANY TARGETS</span>
                  </a>
                </li>
                <li className="header">LABELS</li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-red" />
                    <span>ADMINS</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-green" />
                    <span>Reports</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o text-blue" />
                    <span>Message Box</span>
                  </a>
                </li>
              </ul>
              {/* <!-- /.sidebar-menu --> */}
            </section>
            {/* <!-- /.sidebar --> */}
          </aside>

          {/* <!-- Content Wrapper. Contains page content --> */}
          <div className="content-wrapper">
            {/* <!-- Content Header (Page header) --> */}
            <section className="content-header">
              <h1>
                Page Header
                <small>Optional description</small>
              </h1>
              <ol className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fa fa-dashboard" /> Level
                  </a>
                </li>
                <li className="active">Here</li>
              </ol>
            </section>

            {/* <!-- Main content --> */}
            <section className="content container-fluid">
              {/* <!--------------------------
      | Your Page Content Here |
      --------------------------> */}
            </section>
            {/* <!-- /.content --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}

          {/* <!-- Main Footer --> */}
          <footer className="main-footer">
            {/* <!-- To the right --> */}
            <div className="pull-right hidden-xs">Anything you want</div>
            {/* <!-- Default to the left --> */}
            <strong>
              Copyright &copy; 2016 <a href="#">Company</a>.
            </strong>{" "}
            All rights reserved.
          </footer>

          {/* <!-- Control Sidebar --> */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* <!-- Create the tabs --> */}
            <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
              <li className="active">
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
            {/* <!-- Tab panes --> */}
            <div className="tab-content">
              {/* <!-- Home tab content --> */}
              <div className="tab-pane active" id="control-sidebar-home-tab">
                <h3 className="control-sidebar-heading">Recent Activity</h3>
                <ul className="control-sidebar-menu">
                  <li>
                    <a href="javascript:;">
                      <i className="menu-icon fa fa-birthday-cake bg-red" />

                      <div className="menu-info">
                        <h4 className="control-sidebar-subheading">
                          Langdon's Birthday
                        </h4>

                        <p>Will be 23 on April 24th</p>
                      </div>
                    </a>
                  </li>
                </ul>
                {/* <!-- /.control-sidebar-menu --> */}

                <h3 className="control-sidebar-heading">Tasks Progress</h3>
                <ul className="control-sidebar-menu">
                  <li>
                    <a href="javascript:;">
                      <h4 className="control-sidebar-subheading">
                        Custom Template Design
                        <span className="pull-right-container">
                          <span className="label label-danger pull-right">
                            70%
                          </span>
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
                </ul>
                {/* <!-- /.control-sidebar-menu --> */}
              </div>
              {/* <!-- /.tab-pane --> */}
              {/* <!-- Stats tab content --> */}
              <div className="tab-pane" id="control-sidebar-stats-tab">
                Stats Tab Content
              </div>
              {/* <!-- /.tab-pane --> */}
              {/* <!-- Settings tab content --> */}
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
                  {/* <!-- /.form-group --> */}
                </form>
              </div>
              {/* <!-- /.tab-pane --> */}
            </div>
          </aside>
          {/* <!-- /.control-sidebar --> */}
          {/* <!-- Add the sidebar's background. This div must be placed */}
          {/* immediately after the control sidebar --> */}
          <div className="control-sidebar-bg" />
        </div>
      </div>
    );
  }
}
export default App;
