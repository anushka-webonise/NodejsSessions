//import logo from "./logo.svg";
import "./login.css";
import React, { Component, useState } from "react";
import { Route, Link, Switch, Redirect, useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard";
import UserInput from "./UserInput";
import SubmitButton from "./SubmitButton";
import parseSync from "@babel/core";
import Homepage from "../pages/homepage/Homepage.jsx";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disabled: true,
    };
    //console.log("constructor in Login.jsx");
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount in Login.jsx");
    setInterval(() => {
      this.setState({});
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate in Login.jsx");
    return true;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate in Login.jsx");
  }
  onEmailChange(email) {
    this.setState({ email: email }, () => {
      if (
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) &&
        this.state.password.length >= 8
      ) {
        this.setState({ disabled: false });
      } else this.setState({ disabled: true });
    });
  }

  onPasswordChange(password) {
    this.setState({ password: password }, () => {
      if (
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) &&
        this.state.password.length >= 8
      ) {
        this.setState({ disabled: false });
      } else this.setState({ disabled: true });
    });
  }

  onSubmitClick() {
    if (
      this.state.email == "anushka@gmail.com" &&
      this.state.password == "Qwerty123!"
    ) {
      alert(`Welcome ${this.state.email} and ${this.state.password} `);
      console.log(this.props);
      //props = state;
      //let history = useHistory();
      //this.props.history.push("/Homepage");
      //<Link to ="Homepage"></Link>
      //return <Redirect to="/Homepage" />;
    } else if (
      this.state.email == "anushka@gmail.com" &&
      this.state.password != "Qwerty123!"
    ) {
      alert("Wrong credentials");
      //console.log("wrong")
    }
  }

  render() {
    return (
      <>
        <UserInput
          value={this.state.email}
          placeholder="Enter email address"
          type="email"
          label="Email Address"
          onChange={this.onEmailChange}
        />
        <UserInput
          value={this.state.password}
          placeholder="Enter password"
          type="password"
          label="Password"
          onChange={this.onPasswordChange}
        />
        <SubmitButton
          title="Log In"
          disabled={this.state.disabled}
          onClick={this.onSubmitClick,
           <Redirect to="/Homepage" />}
        />
      </>
    );
  }
}
