import React, { Component } from "react";

export default class Users extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header">
          <h1>Users </h1>
        </section>
        <p>HI Azran</p>
      </div>
    );
  }
}
