import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, thead, tbody, Button } from "react-bootstrap";
import Img1 from "./img/homebutton_1.png";
import Img2 from "./img/homebutton_2.png";
import Img3 from "./img/homebutton_3.png";
import Img4 from "./img/homebutton_4.png";
import Img5 from "./img/homebutton_5.png";
import Img6 from "./img/homebutton_6.png";
import Img7 from "./img/homebutton_7.png";
import Config from "../../config";
import "./service_browser.css";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <img alt={""} src={this.props.img} />
            {this.props.desc}
          </td>
          <td>${this.props.price}</td>
          <td>
            <Button>Add to Cart</Button>
          </td>
        </tr>
      </tbody>
    );
  }
}

class ServiceBrowser extends Component {
  render() {
    return (
      <Table responsive className="table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <Card
          img={Img1}
          desc={"Scram Monitoring + Installation Fee (1 month)"}
          price={"350.00"}
        />
        <Card
          img={Img2}
          desc={"GPS Monitoring + Installation Fee (1 month)"}
          price={"350.00"}
        />
        <Card
          img={Img6}
          desc={"House Arrest Monitoring + Installation Fee (1 month)"}
          price={"465.00"}
        />
        <Card img={Img3} desc={"Urinalysis (Standard Panel)"} price={"20.00"} />
        <Card img={Img3} desc={"Urinalysis (Extended Panel)"} price={"35.00"} />
        <Card img={Img3} desc={"Urinalysis (EtG)"} price={"25.00"} />
        <Card
          img={Img3}
          desc={"Urinalysis (EtG + Standard Panel)"}
          price={"45.00"}
        />
        <Card img={Img3} desc={"Urinalysis (EtG + Extended)"} price={"60.00"} />
      </Table>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceBrowser);
