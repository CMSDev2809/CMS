import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
//import Recaptcha from "react-recaptcha";
const CAPTCHA_KEY = "6LcXSsAUAAAAAICzcfA5adl9d5nFgVOr4PuF0D5A";

export default (props) => (
	<div style={{ marginTop: "25px" }}>
		<ReCAPTCHA sitekey={CAPTCHA_KEY} onChange={(e) => props.callback(e)} />
	</div>
);
