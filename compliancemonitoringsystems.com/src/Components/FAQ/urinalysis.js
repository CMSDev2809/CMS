import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Img from "../Services/Urinalysis/img/services_urinalysis2.png";
import { Button } from "react-bootstrap";
import Config from "../../config";

class Urinalysis extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <img alt={""} src={Img} style={{ width: "100%" }} />
          <h1 style={{ margin: "50px" }}>Urinalysis Questions and Answers</h1>
          <p3>{`What is drug testing?`}</p3>
          <p2>
            {`Drug testing is the evaluation of a urine, blood or other type of biological sample to
              determine if the subject has been using the drug or drugs in question. There are many
              circumstances that may lead to drug testing:`}
            <ul>
              <li>
                Pre-employment or random, work-related drug testing to identify
                on-the-job drug abuse
              </li>
              <li>Drug testing for college or professional athletes</li>
              <li>
                Post-accident drug testing - a vehicular or on-the-job accident
                which may have involved human error and resulted in casualties
                or property damage
              </li>
              <li>
                {`Safety-related - if an employee's job could lead to safety issues
              if judgement or physical ability were impaired`}
              </li>
            </ul>
          </p2>
          <p2>{`Drug testing is often done when applying for employment, especially for positions that may involve federal transportation, airline industries, railways, and other workplaces where public safety is of the utmost importance. However, workplace drug testing is now common in general for many U.S. employers to lessen the impact from drug abuse and lower productivity in the workplace. The Surgeon General reported that alcohol and drug abuse, including tobacco costs the economy $524 billion per year. billion per year. In 1997, it was reported that 5.4 percent of all workers tested positive for illicit drug Many companies may also offer employee-assistance programs to support substance-abuse treatment.
              Workplace drug screening is primarily limited to drugs with the potential for abuse, including some prescription drugs, and alcohol. Prescription drug abuse has been reported as a growing problem in the U.S. Sports drug testing may be required for college-level and professional athletes.
              Pre-employment workplace drug testing usually requires that the applicant give a urine sample, but may also infrequently require blood, saliva, sweat, or hair. In certain jobs, especially those that require a high level of safety, employees may be subject to random drug screening, as well. Random drug screening may be used in instances of workplace accidents, and if the employer has suspicion that the employee is abusing drugs. Random drug testing may occur without cause for suspicion depending upon company policy.`}</p2>
          <p3>{`How long can drugs be detected in the body with a drug test?`}</p3>
          <p2>{`Many variables may affect the amount of time that a drug remains detectable in the urine or other biological samples, including a drug's half-life, the subject's state of hydration and fluid balance, frequency of use, route of administration, cut-off concentration used by the testing lab to detect the drug, and many other variables. Each person and circumstance is different, and the best way to avoid detection of an abusable drug is to not use the drug.
              General guidelines are available for detection times. Many drugs stay in the system from 2 to 4 days, although chronic use of marijuana can stay in the system for 3 to 4 weeks or even longer after the last use. Drugs with a long half-life, such as diazepam, may also stay in the system for a prolonged period of time`}</p2>
          <p3>{`How long does it take get drug testing results?`}</p3>
          <p2>{`Our lab is located in Flagstaff Arizona. In most cases we can get test results back in 24-48 hours for negative results, up to 72+ hours for positive results.`}</p2>
          <p3>{`What do we test for?`}</p3>
          <p2>{`We can do a onetime quick test that has results instantly and test for Amphetamines, Barbiturates, Buprenorphine, Benzodiazepines, Cocaine, Methamphetamines, Methadone, Opiates, Oxycodone, Phencyclidine (PCP), and THC.
              Or we can send the urine off to the lab. The lab has 3 different test types to select from. Standard Drug test: Amphetamine/Methamphetamine, Cocaine, Benzodiazepine, Opiates, THC, Specific gravity and creatinine. Extended test: In addition to standard add Methadone, Oxycodone, and Buprenorphine. May also request to have specific drugs such as K2(spice), Kratom, Bath Salts etc. ETG/ETS test: Tests for the metabolite(s) of alcohol.`}</p2>
          <p3>{`How far does it go back?`}</p3>
          <p2>
            {`Urine testing detection periods will vary greatly for drug to drug. The table below will cover the common drugs and detection time.
                Substance Detection Time:`}
          </p2>
          <p2>
            <div style={{ display: "inline_block" }}>
              <div style={{ display: "inline-block", marginLeft: "10px" }}>
                <div style={{ marginLeft: "-10px" }}>
                  <b>Substance</b>
                </div>
                <div>Amphetamines</div>
                <div>Barbituates</div>
                <div>Cannabinoids (THC, Marijuana)</div>
                <div>Cocaine</div>
                <div>Benzodiazepines</div>
                <div>Methamphetamines</div>
                <div>Opiates</div>
                <div>Phencyclidine (PCP)</div>
              </div>
              <div style={{ display: "inline-block", marginLeft: "150px" }}>
                <div style={{ marginLeft: "-10px" }}>
                  <b>Detection Window</b>
                </div>
                <div>1-3 days</div>
                <div>1-6 Weeks</div>
                <div>5-60 days</div>
                <div>1-4 days</div>
                <div>3-7 days</div>
                <div>1-3 days</div>
                <div>1-4 days</div>
                <div>2-8 days</div>
              </div>
            </div>
          </p2>
          <p3>{`Do medications interfere?`}</p3>
          <p2>{`There are some prescriptions that contain the same drugs that are commonly
              found "on the street". There is no easy way to distinguish between the two
              forms of the drug. However, the problem is not as big as it would seem as
              long as it is reviewed by a medical review officer (MRO).`}</p2>
          <p3>{`What if I’m in a room with someone who is using drugs?`}</p3>
          <p2>{`Since it takes multiple uses to test positive, and metabolites are checked,
              it is pretty much impossible to test positive from passive exposure on a limited basis.`}</p2>
          <p3>{`How long can EtG be detected in urine?`}</p3>
          <p2>{`Traditional laboratory methods detect the actual alcohol in the body, which reflects current
              use within the past few hours (depending on how much is consumed). The presence of EtG in urine
              indicates that ethanol was ingested within the previous 3 to 4 days, or approximately 80 hours
              after ethanol is eliminated from the body. Therefore, EtG is a more accurate indicator of the
              recent injection of alcohol than measuring for the presence of ethanol itself.`}</p2>
          <p3>{`How accurate and reliable is the EtG test?`}</p3>
          <p2>{`EtG is a direct metabolite of alcohol (ethanol), and its detection in urine is highly specific,
              similar to testing for other drugs. Add to this, our lab utilizes the most sophisticated,
              sensitive, and specific equipment and technology available, GC/MS or LC/MS/MS, to screen, confirm, and
              quantitate EtG. This methodology provides highly accurate results. A in the case with any laboratory
              test, it is also very important to obtain clinical correlation.`}</p2>
          <p3>{`Can residual EtG be detected in the urine of long-term alcoholics who abstain?`}</p3>
          <p2>{`Studies indicate that alcoholics in abstinence have no detectable levels of EtG in their urine
              after approximately 80 hours of detoxification.`}</p2>
          <p3>{`What about urine alcohol produced by fermentation?`}</p3>
          <p2>{`EtG is only detected in urine when alcohol is consumed. This is important since it is possible
              to have alcohol in urine without drinking. Alcohol in urine without drinking is due to the
              production of ethanol in vitro. Ethanol in vitro is spontaneously produced in the bladder or
              the specimen container itself, due to fermentation of urine samples containing sugars (diabetes)
              and yeast or bacteria. Since the ethanol produced is not metabolized by the liver, EtG will
              not be produced and will therefore not be detected in a urine containing alcohol as a result
              of fermentation.`}</p2>
          <p3>{`Will the use of incidental alcohol, such as mouthwash and Over-the-Counter (OTC) cough syrups
                trigger a positive result?`}</p3>
          <p2>{`Tests show that "incidental exposure" to the chronic use of food product (vanilla extract),
              hygiene products, mouthwash, or OTC medications (cough syrups) can produce EtG concentrations
              in excess of 100 ng/mL. However, if measurable ethanol is detected (greater than .04 gm%) in the
              urine, and EtG is also detected in excess of 250 ng/mL, then this is very strong evidence that
              beverage alcohol was consumed. Most alcohol abstinence programs require an agreement to avoid
              all products containing alcohol, including: mouthwash, Nyquil, OTC medications, etc. Consumption
              of these products could produce a positive test for alcohol and/or EtG and would thus violate
              this agreement.`}</p2>
          <Link to={"/services"}>
            <Button>
              <div
                class="glyphicon glyphicon-hand-right"
                style={{ marginRight: "10px", float: "left" }}
              />
              <div style={{ float: "left" }}>Services</div>
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Urinalysis);
