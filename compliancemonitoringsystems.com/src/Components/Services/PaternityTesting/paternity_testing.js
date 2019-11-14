import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/services_paternity_testing.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";

class PaternityTesting extends Component {
  componentDidMount() {
    fns.autoScroll();
  }

  render() {
    let divSpace = 30;
    return (
      <div>
        <h1 style={{ textAlign: "left" }}>Paternity Testing</h1>
        <img alt={""} src={Img} style={{ width: "100%" }} />
        <ServicesNav />
        <p>
          Paternity testing removes uncertainty. Statistics show 1 out of 3 men
          tested are not the father of a child they care for. With NX1 Advanced
          DNA Processing, offered only at Alliance DNA, you work with an
          internationally-accredited DNA laboratory to receive the answers you
          need at the speed you deserve. The NX1process uses rapid extraction
          techniques, forensic-level analysis, and custom reporting to deliver a
          NEXT-DAY RESULT with zero rush fees*.
        </p>
        <ul style={{ marginTop: "-50px" }}>
          <li>Extremely confidential</li>
          <li> 100% accuracy guarantee</li>
          <li>Next business day reuslts with ZERO RUSH FEES*</li>
          <li>Nationally and internationally accredited facility</li>
          <li>AABB and ISO accredited laboratory</li>
          <li>24-marker standard for the highest level of conclusiveness</li>
        </ul>
        <div
          style={{ marginTop: `${divSpace}px`, marginBottom: `${divSpace}px` }}
        >
          <t>
            *Processing time begins once the sample and completed paperwork
            reach the lab. Shipping time is not included in this calculation.
          </t>
        </div>
        <div
          style={{ marginTop: `${divSpace}px`, marginBottom: `${divSpace}px` }}
        >
          <t>
            Questions regarding paternity during and after pregnancy are common.
            Seeking answers and resolving your concerns has physical, emotional
            and finacial benefits for both you and the child. The American
            pregnancy association recommends paternity testing from a laboratory
            accredited by the AABB.
          </t>
        </div>
        <div
          style={{ marginTop: `${divSpace}px`, marginBottom: `${divSpace}px` }}
        >
          <t>
            The AABB Relationship Testing Accreditation Program is based on
            standards and provides for the assessment and accreditation of
            laboratories performing relationship testing.
          </t>
        </div>
        <div
          style={{ marginTop: `${divSpace}px`, marginBottom: `${divSpace}px` }}
        >
          <t>
            If you are pregnant and not married, most states have laws that
            require an Acknowledgement of Paternity (AOP) for to be completed at
            the hospital immediately after the birth to legally establish who
            the father is.
          </t>
        </div>
        <div
          style={{ marginTop: `${divSpace}px`, marginBottom: `${divSpace}px` }}
        >
          <t>
            After the AOP is signed, couples have a limted amount of time,
            depending on the state, to request DNA Paternity rtest to amend the
            AOP. This form is filed with the Bureau fo Vital Statisitcs and is a
            legal binding document.
          </t>
        </div>
        <div
          style={{ marginTop: `${divSpace}px`, marginBottom: `${divSpace}px` }}
        >
          <t>
            If the time allowed for amnding this form expires, the father listed
            as the AOP and the birth certificate could be held legally
            responsible for the child, even if he is not the biological father.
          </t>
        </div>
        <div
          style={{ marginTop: `${divSpace}px`, marginBottom: `${divSpace}px` }}
        >
          <t>
            {`Some state require and unmarried couple to have a paternity test to
            list father's name on the birht certificate. If the mother is
            married to someone other than the father of the child, the husband
            can be presumed to be the father of the child, the husband can be
            presumed to be the father and listed on the birth certificate as the
            legal father, unless otherwise disputed by a paternity test.`}
          </t>
        </div>
        {/*
        <Link to={"/paternity_testing"}>
          <Button>
            <div
              class="glyphicon glyphicon-hand-right"
              style={{ marginRight: "10px", float: "left" }}
            />
            <div style={{ float: "left" }}>Facts and Questions</div>
          </Button>
        </Link>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PaternityTesting);
