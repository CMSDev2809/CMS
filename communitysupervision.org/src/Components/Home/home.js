import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ReactCarousel from "../ReactCarousel/react_carousel";
import TextPicBlock from "./TextPicBlock/text_pic_block";
import HorizontalEmpty from "../HorizontalEmpty/horizontal_empty";
import MicroServicesContainer from "../Services/MicroServicesContainer/micro_services_container";
import TransparentHeader from "../TransparentHeader/transparent_header";
import NewsCardContainer from "../NewsCardContainer/news_card_container";
import NewsCard from "../NewsCard/news_card";
import { setService } from "../../Actions/service";
import Fade from "react-reveal/Fade";
import "./home.css";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    this.props.setService("");
    return (
      <div className="home">
        <Header />
        <ReactCarousel />
        <Fade left delay={250}>
          <TextPicBlock
            icon={"fas fa-cubes"}
            layout={1}
            title={"Products and Services"}
            subTitle={"CSS modern solutions"}
            text={
              "Offering the most trusted programs with the most accurate products, CSS' ankle bracelet, drug patch and onsite drug testing programs are leading Montana's monitoring services. When the need to find the reliable testing and monitoring, turn to Community Supervision Services."
            }
            link={"/services"}
            linkText={"View Services"}
          />
          <TextPicBlock
            layout={3}
            title={"About Us"}
            subTitle={"Organization Details"}
            text={
              "Through continuous monitored alcohol abstinence and innovative drug testing, Community Supervision Services is committed to effectively partnering with the criminal justice system and community agencies to promote and assist in the maintenance of a sober, responsible and accountable community while providing a cost-effective alternative to incarceration"
            }
            link={"/about_us"}
            linkText={"About Us"}
            textColor={"rgb(230, 230, 230)"}
          />
          <TextPicBlock
            icon={"fas fa-atlas"}
            layout={2}
            title={"Contact Us"}
            subTitle={"Contact the CSS Team"}
            text={
              "Contact Community Supervision Services staff based on location throughout the state of Montana."
            }
            link={"/contact"}
            linkText={"Contact"}
          />
        </Fade>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setService: service => dispatch(setService(service))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
