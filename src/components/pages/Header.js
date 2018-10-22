import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      {/* <!-- Main Header --> */}
      <header className="main-header">
        {/* <!-- Logo --> */}
        <a href="index2.html" className="logo">
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
                          <i className="fa fa-users text-aqua" /> 5 new members
                          joined today
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
            <li className="active">
              <Link to="/" className="nva-link">
                <i className="fa fa-dashboard" /> <span>DASHBOARD</span>
              </Link>
            </li>
            <li>
              <Link to="/Users" className="nva-link">
                <i className="fa fa-book" /> <span>USERS</span>
              </Link>
            </li>
            <li>
              <Link to="/CarFeatures" className="nva-link">
                <i className="fa fa-book" /> <span>CAR FEATURES</span>
              </Link>
            </li>
            <li>
              <Link to="/FreeDeliveryLocations" className="nva-link">
                <i className="fa fa-book" />{" "}
                <span>FEREE DELIVERY LOCATION</span>
              </Link>
            </li>
            <li>
              <Link to="/Cars" className="nva-link">
                <i className="fa fa-book" /> <span>CARS</span>
              </Link>
            </li>
            <li>
              <Link to="/Bookings" className="nva-link">
                <i className="fa fa-book" /> <span>BOOKINGS</span>
              </Link>
            </li>
            <li>
              <Link to="/BookingChanges" className="nva-link">
                <i className="fa fa-book" /> <span>BOOKINGS CHANGES</span>
              </Link>
            </li>
            <li>
              <Link to="/Coupons" className="nva-link">
                <i className="fa fa-book" /> <span>COUPONS</span>
              </Link>
            </li>
            <li>
              <Link to="/Transactions" className="nva-link">
                <i className="fa fa-book" /> <span>TRANSACTIONS</span>
              </Link>
            </li>
            <li>
              <Link to="/EmailList" className="nva-link">
                <i className="fa fa-book" /> <span>EMAIL LIST</span>
              </Link>
            </li>
            <li>
              <Link to="/Email" className="nva-link">
                <i className="fa fa-book" /> <span>EMAIL (sent)</span>
              </Link>
            </li>
            <li>
              <Link to="/Campaigns" className="nva-link">
                <i className="fa fa-book" /> <span>CAMPAIGNS</span>
              </Link>
            </li>
            <li>
              <Link to="/RegestrationPromotion" className="nva-link">
                <i className="fa fa-book" /> <span>REGESTRATION PROMOTION</span>
              </Link>
            </li>
            <li>
              <Link to="/Promotions" className="nva-link">
                <i className="fa fa-book" /> <span>PROMOTIONS</span>
              </Link>
            </li>
            <li>
              <Link to="/ParkingLots" className="nva-link">
                <i className="fa fa-book" /> <span>PARKING LOTS</span>
              </Link>
            </li>
            <li>
              <Link to="/FreeDeliveryLocations" className="nva-link">
                <i className="fa fa-book" />{" "}
                <span>FREE DELIVERY LOCATIONS</span>
              </Link>
            </li>
            <li>
              <Link to="/CarEditLogs" className="nva-link">
                <i className="fa fa-book" /> <span>CAR EDIT LOGS</span>
              </Link>
            </li>
            <li>
              <Link to="/Tiers" className="nva-link">
                <i className="fa fa-book" /> <span>TIERS</span>
              </Link>
            </li>
            <li>
              <Link to="/CarProtectionLevels" className="nva-link">
                <i className="fa fa-book" />
                <span>CAR PROTECTION LEVELS</span>
              </Link>
            </li>
            <li>
              <Link to="/CarInsurences" className="nva-link">
                <i className="fa fa-book" /> <span>CAR INSURANCES</span>
              </Link>
            </li>
            <li>
              <Link to="/CreditCards" className="nva-link">
                <i className="fa fa-book" /> <span>CREDIT CARDS</span>
              </Link>
            </li>
            <li>
              <Link to="/ExtraCharges" className="nva-link">
                <i className="fa fa-book" /> <span>EXTRA CHARGES</span>
              </Link>
            </li>
            <li>
              <Link to="/Referrals" className="nva-link">
                <i className="fa fa-book" />
                <span>REFERRALS</span>
              </Link>
            </li>
            <li>
              <Link to="/ReferralCodes" className="nva-link">
                <i className="fa fa-book" />
                <span>REFERRAL CODES</span>
              </Link>
            </li>
            <li>
              <Link to="/Configurations" className="nva-link">
                <i className="fa fa-book" />
                <span>CONFIGURATIONS</span>
              </Link>
            </li>
            <li>
              <Link to="/TransactionRules" className="nva-link">
                <i className="fa fa-book" />
                <span>TRANSACTION RULES</span>
              </Link>
            </li>
            <li>
              <Link to="/PaymentGateway" className="nva-link">
                <i className="fa fa-book" />
                <span>PAYMENT GATEWAY</span>
              </Link>
            </li>
            <li>
              <Link to="/CompanyTargets" className="nva-link">
                <i className="fa fa-book" />
                <span>COMPANY TARGETS</span>
              </Link>
            </li>
            <li className="header">LABELS</li>
            <li>
              <Link to="/Admins" className="nva-link">
                <i className="fa fa-circle-o text-red" />
                <span>ADMINS</span>
              </Link>
            </li>
            <li>
              <Link to="/Reports" className="nva-link">
                <i className="fa fa-circle-o text-green" />
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link to="/MessageBox" className="nva-link">
                <i className="fa fa-circle-o text-blue" />
                <span>Message Box</span>
              </Link>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
};
