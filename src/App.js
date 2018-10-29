import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import CarFeatures from "./components/pages/CarFeatures";
import FreeDeliveryLocations from "./components/pages/FreeDeliveryLocations";
import Cars from "./components/pages/Cars";
import Bookings from "./components/pages/Bookings";
import BookingChanges from "./components/pages/BookingChanges";
import Coupons from "./components/pages/Coupons";
import Transactions from "./components/pages/Transactions";
import EmailList from "./components/pages/EmailList";
import Email from "./components/pages/Email";
import Campaigns from "./components/pages/Campaigns";
import RegestrationPromotion from "./components/pages/RegestrationPromotion";
import Promotions from "./components/pages/Promotions";
import ParkingLots from "./components/pages/ParkingLots";
import CarEditLogs from "./components/pages/CarEditLogs";
import Tiers from "./components/pages/Tiers";
import CarProtectionLevels from "./components/pages/CarProtectionLevels";
import CarInsurences from "./components/pages/CarInsurences";
import CreditCards from "./components/pages/CreditCards";
import ExtraCharges from "./components/pages/ExtraCharges";
import Referrals from "./components/pages/Referrals";
import ReferralCodes from "./components/pages/ReferralCodes";
import Configurations from "./components/pages/Configurations";
import TransactionRules from "./components/pages/TransactionRules";
import PaymentGateway from "./components/pages/PaymentGateway";
import CompanyTargets from "./components/pages/CompanyTargets";
import Admins from "./components/pages/Admins";
import Reports from "./components/pages/Reports";
import MessageBox from "./components/pages/MessageBox";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="wrapper">
            <Header />
            {/* <!-- Content Wrapper. Contains page content --> */}
            <div className="content-wrapper">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/CarFeatures" component={CarFeatures} />
                <Route
                  exact
                  path="/FreeDeliveryLocations"
                  component={FreeDeliveryLocations}
                />
                <Route exact path="/Cars" component={Cars} />
                <Route exact path="/Bookings" component={Bookings} />
                <Route
                  exact
                  path="/BookingChanges"
                  component={BookingChanges}
                />
                <Route exact path="/Coupons" component={Coupons} />
                <Route exact path="/Transactions" component={Transactions} />
                <Route exact path="/EmailList" component={EmailList} />
                <Route exact path="/Email" component={Email} />
                <Route exact path="/Campaigns" component={Campaigns} />
                <Route
                  exact
                  path="/RegestrationPromotion"
                  component={RegestrationPromotion}
                />
                <Route exact path="/Promotions" component={Promotions} />
                <Route exact path="/ParkingLots" component={ParkingLots} />
                <Route exact path="/CarEditLogs" component={CarEditLogs} />
                <Route exact path="/Tiers" component={Tiers} />
                <Route
                  exact
                  path="/CarProtectionLevels"
                  component={CarProtectionLevels}
                />
                <Route exact path="/CarInsurences" component={CarInsurences} />
                <Route exact path="/CreditCards" component={CreditCards} />
                <Route exact path="/ExtraCharges" component={ExtraCharges} />
                <Route exact path="/Referrals" component={Referrals} />
                <Route exact path="/ReferralCodes" component={ReferralCodes} />
                <Route
                  exact
                  path="/Configurations"
                  component={Configurations}
                />
                <Route
                  exact
                  path="/TransactionRules"
                  component={TransactionRules}
                />
                <Route
                  exact
                  path="/PaymentGateway"
                  component={PaymentGateway}
                />
                <Route
                  exact
                  path="/CompanyTargets"
                  component={CompanyTargets}
                />
                <Route exact path="/Admins" component={Admins} />
                <Route exact path="/Reports" component={Reports} />
                <Route exact path="/MessageBox" component={MessageBox} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
