import React, { Component } from "react";
import { Grid, Row, Col, Button, FormControl } from "react-bootstrap";
import Val from "./gridConfig";
import "./App.css";

class UserRow extends Component {
  state = {
    c1: this.props.username,
    c2: this.props.status,
    c3: this.props.expectedReturn,
    c4: this.props.comment,
    c5: this.props.phone,
    c6: this.props.workHours
  };

  async bttnClick() {
    const user = await fetch("/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.c1,
        status: !this.state.c2,
        expectedReturn: !this.state.c2 ? this.state.c3 : "",
        comment: !this.state.c2 ? this.state.c4 : "",
        phone: this.state.c5,
        workHours: this.state.c6
      })
    });
    if (user.ok) {
      if (!this.state.c2) {
        this.setState({ c2: !this.state.c2 });
      } else {
        this.setState({
          c2: !this.state.c2,
          c3: "",
          c4: ""
        });
      }
    }
  }

  render() {
    let bgColor = "";
    let buttonColor = "";
    if (this.state.c6.toLowerCase() === "installer") {
      bgColor = "rgba(215, 215, 215, 0.25)";
    } else if (this.state.c6.toLowerCase() === "irregular hours") {
      bgColor = "rgba(150, 0, 255, 0.25)";
    } else if (this.state.c2) {
      buttonColor = "rgb(0, 255, 255)";
      bgColor = "rgba(255, 0, 84, 0.25)";
    } else {
      bgColor = "rgba(0, 255, 102, 0.25)";
      buttonColor = "rgba(172, 172, 172, 1)";
    }
    return (
      <Row style={{ backgroundColor: bgColor }}>
        <Col xs={Val.c1.spacing} bsClass="col">
          {this.state.c1}
        </Col>
        <Col xs={Val.c2.spacing} bsClass="col">
          {this.state.c6.toLowerCase() === "installer" ||
          this.state.c6.toLowerCase() === "irregular hours" ? (
            <div />
          ) : (
            <Button
              style={{ backgroundColor: buttonColor }}
              onClick={() => this.bttnClick()}
            >
              {this.state.c2 ? "Check-In" : "Check-Out"}
            </Button>
          )}
        </Col>
        <Col xs={Val.c3.spacing} bsClass="col">
          <FormControl
            type="text"
            value={this.state.c3}
            placeholder="Enter text"
            onChange={e => {
              fetch("/toggle", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: this.state.c1,
                  status: this.state.c2,
                  expectedReturn: e.target.value,
                  comment: this.state.c4,
                  phone: this.state.c5,
                  workHours: this.state.c6
                })
              }).then(this.setState({ c3: e.target.value }));
            }}
          />
        </Col>
        <Col xs={Val.c4.spacing} bsClass="col">
          <FormControl
            type="text"
            value={this.state.c4}
            placeholder="Enter text"
            onChange={e => {
              fetch("/toggle", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: this.state.c1,
                  status: this.state.c2,
                  expectedReturn: this.state.c3,
                  comment: e.target.value,
                  phone: this.state.c5,
                  workHours: this.state.c6
                })
              }).then(this.setState({ c4: e.target.value }));
            }}
          />
        </Col>
        <Col xs={Val.c5.spacing} bsClass="col">
          <FormControl
            type="text"
            value={this.state.c5}
            placeholder="Enter text"
            onChange={e => {
              fetch("/toggle", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: this.state.c1,
                  status: this.state.c2,
                  expectedReturn: this.state.c3,
                  comment: this.state.c4,
                  phone: e.target.value,
                  workHours: this.state.c6
                })
              }).then(this.setState({ c5: e.target.value }));
            }}
          />
        </Col>
        <Col xs={Val.c6.spacing} bsClass="col">
          <FormControl
            type="text"
            value={this.state.c6}
            placeholder="Enter text"
            onChange={e => {
              fetch("/toggle", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username: this.state.c1,
                  status: this.state.c2,
                  expectedReturn: this.state.c3,
                  comment: this.state.c4,
                  phone: this.state.c5,
                  workHours: e.target.value
                })
              }).then(this.setState({ c6: e.target.value }));
            }}
          />
        </Col>
      </Row>
    );
  }
}

class App extends Component {
  state = {
    userDisplay: <div />,
    userList: {}
  };

  async getAllUsers() {
    const userList = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    this.setState({ userList });
    return userList;
  }

  async addAllUsers() {
    const userList = await this.getAllUsers();
    console.log(userList);
    return userList.map(element => {
      return (
        <UserRow
          username={element.username}
          status={element.status}
          phone={element.phone}
          comment={element.comment}
          expectedReturn={element.expectedReturn}
          workHours={element.workHours}
          time={time => this.setTime(time)}
        />
      );
    });
  }

  componentDidMount() {
    this.addAllUsers().then(userDisplay => this.setState({ userDisplay }));
    var socket = io.connect("http://localhost:3001");
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row xs={12} bsStyle="row" style={{ marginBottom: "15px" }}>
            <Col xs={Val.c1.spacing} bsClass="col">
              Name
            </Col>
            <Col xs={Val.c2.spacing} bsClass="col">
              Check In/Out
            </Col>
            <Col xs={Val.c3.spacing} bsClass="col">
              Expected Return
            </Col>
            <Col xs={Val.c4.spacing} bsClass="col">
              Comment
            </Col>
            <Col xs={Val.c5.spacing} bsClass="col">
              Phone
            </Col>
            <Col xs={Val.c6.spacing} bsClass="col">
              Work Hours
            </Col>
          </Row>
          {this.state.userDisplay}
        </Grid>
      </div>
    );
  }
}

export default App;
