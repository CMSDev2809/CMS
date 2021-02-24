import React, { Component } from "react";
import { connect } from "react-redux";
import ServicesNav from "../../ServicesNav/services_nav";
import Img from "./img/services_urinalysis2.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fns from "../../../fns";
import Config from "../../../config";

class Urinalysis extends Component {
	componentDidMount() {
		fns.autoScroll();
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: "left" }}>Urinalysis</h1>
				<img alt={""} src={Img} style={{ width: "100%" }} />
				<ServicesNav />
				<p>
					Compliance Monitoring Systems uses a drug testing management solution
					that supports evidence-based programs. Cordant Sentry™ is an ideal
					drug testing management system for the behavioral health and criminal
					justice industries. Our secure, HIPAA-compliant solution helps you
					manage your patient or clients’ drug testing schedules and everyday
					collections efficiently and easily.
					<br />
					<br />
					In 2019 CMS made the switch to use Cordant-Sentry's program to utilize
					the high complexity of GC/MS and LC/MS/MS to provide maximum accuracy
					and reliability.
					<br />
					<br />
					<h2>Real-Time Alerts and Notifications</h2>Unexpected drug test
					results trigger real-time alerts to designated staff, allowing for
					immediate intervention.
					<h2>Create or Automate Your Testing Protocols</h2>
					Easy automation to complex randomization schedules takes the guesswork
					out of testing patients or clients appropriately.
					<h2>Electronic Records Management</h2>
					Elimination of illegible writing and automatic population of
					demographic data saves time and improves record quality, while
					document storage allows quick and easy access to current and past
					results in a single location.
				</p>
				<t>
					CMS is able to provide these services in Western Montana Judicial
					System including Probation and Parole offices, local courts, treatment
					courts as well as child protective services. CMS also began providing
					services to the private sector in the form of pre-employment,
					reasonable suspicion and random urinalysis testing for local
					businesses.
				</t>
				<ul>
					<li>Amphetamine</li>
					<li>Barbiturates</li>
					<li>Benzodiazepines</li>
					<li>Cocaine</li>
					<li>Ethyl Glucuronide (EtG-Alcohol)</li>
					<li>K2 (Spice)</li>
					<li>Methadone</li>
					<li>Opiates</li>
					<li>Synthetic Opiates</li>
					<li>Diagnostic integrity through barcode sample identification</li>
					<li>And more...</li>
				</ul>
				<Link to={"/urinalysis"}>
					<Button>
						<div
							class="glyphicon glyphicon-hand-right"
							style={{ marginRight: "10px", float: "left" }}
						/>
						<div style={{ float: "left" }}>Facts and Questions</div>
					</Button>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Urinalysis);
