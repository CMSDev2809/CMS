module.exports = {
	headerHTML: `<div style="padding: 20px;">
    <center style="margin-bottom: 20px;">
      <img src="http://192.163.204.58/images/img2.png" style="width: 75px;float: left;margin-right: -75px;margin-left: 15px;" >
      <h1 style="font-size: 15px;">Compliance Monitoring Systems, LLC</h1>
      <h2 style="font-size: 8px;">2809 Great Northern Loop, Suite 200</h2>
      <h2 style="font-size: 8px;">Missoula, Montana 59808</h2>
      <h2 style="font-size: 8px;">(406) 529-1789</h2>
      <h2 style="font-size: 8px;">Fax: (888) 855-7964</h2>
    </center>
    <div style="margin-top: 40px">
      <h1 style="font-size: 15px;display: inline-flex;text-decoration: underline;">Offender Information</h1>
      <h2 style="font-size: 10px;display: inline-flex;position: absolute;left: 37.5%;top: 150px;">&ptb& Pretrial</h2>
      <h2 style="font-size: 10px;display: inline-flex;position: absolute;left: 50%;top: 150px;">&sb& Supervision</h2>
      <h2 style="font-size: 10px;display: inline-flex;position: absolute;left: 65%;top: 150px;">&ot& Other</h2>
      <h2 style="font-size: 10px;display: inline-flex;position: absolute;left: 77.5%;top: 150px;">&date&</h2>
    </div>
    <div style="margin-top: 20px; position: relative;">
      <h2 style="font-size: 9px">Name: &name&</h2>
      <h2 style="font-size: 9px;">Agency: &ct&</h2>
      <h2 style="font-size: 9px; width: 50%;">Charges: &charges&</h2>
      <h2 style="font-size: 9px;">Case Worker: &csewrk&</h2>
      <h2 style="font-size: 9px;">To Enroll By: &teb&</h2>
      <h2 style="font-size: 9px;">Address: &address&</h2>
      <div style="position: absolute; left: 50%; top: calc(0% - 10px);">
        <h2 style="font-size: 9px;">Program Length/Completion Date: &cd&</h2>
        <h2 style="font-size: 9px;">Case Number: &cn&</h2>
        <h2 style="font-size: 9px;">Phone Number: &pn&</h2>
        <h2 style="font-size: 9px;">Judge: &jd&</h2>
        <h2 style="font-size: 9px;">Probation Officer: &proboff&</h2>
        <h2 style="font-size: 9px;">Agency Location (county): &county&</h2>
      </div>
    </div>
    <h2 style="font-size: 9px;display: inline-flex;">Violations Reported To: &rt&</h2>
    <span style="display: block; width: 100%; border-top: 3px solid; margin-top: 20px; margin-bottom: 20px" />
    <center><h1 style="font-size: 15px;">&type&</h1></center>`,
	alternateHeaderHTML: `<div style="padding: 20px;">
        <center style="margin-bottom: 20px;">
          <h1 style="margin: -2px;font-size: 17px;">Community Supervision Services</h1>
          <h2 style="margin: -2px;font-size: 10px;">2809 Great Northern Loop, Suite 200</h2>
          <h2 style="margin: -2px;font-size: 10px;">Missoula, Montana 59808</h2>
          <h2 style="margin: -2px;font-size: 10px;">(406) 529-1789</h2>
          <h2 style="margin: -2px;font-size: 10px;">Fax: (888) 855-7964</h2>
        </center>
        <div>
          <h1 style="font-size: 15px;display: inline-flex;text-decoration: underline;">Offender Information</h1>
          <h2 style="font-size: 12px;display: inline-flex;position: absolute;left: 32.5%;top: 107.5px;">&ptb& Pretrial</h2>
          <h2 style="font-size: 12px;display: inline-flex;position: absolute;left: 45%;top: 107.5px;">&sb& Supervision</h2>
          <h2 style="font-size: 12px;display: inline-flex;position: absolute;left: 60%;top: 107.5px;">&ot& Other</h2>
          <h2 style="font-size: 12px;display: inline-flex;position: absolute;left: 72.5%;top: 110px;">&date&</h2>
        </div>
        <div style="margin-top: 20px; position: relative;">
          <h2 style="font-size: 12px">Name: &name&</h2>
          <h2 style="font-size: 12px;">Agency: &ct&</h2>
          <h2 style="font-size: 12px; width: 50%;">Charges: &charges&</h2>
          <h2 style="font-size: 12px;">Case Worker: &csewrk&</h2>
          <h2 style="font-size: 12px;">To Enroll By: &teb&</h2>
          <h2 style="font-size: 12px;">Address: &address&</h2>
          <div style="position: absolute; left: 50%; top: calc(0% - 10px);">
            <h2 style="font-size: 12px;">Program Length/Completion Date: &cd&</h2>
            <h2 style="font-size: 12px;">Case Number: &cn&</h2>
            <h2 style="font-size: 12px;">Phone Number: &pn&</h2>
            <h2 style="font-size: 12px;">Judge: &jd&</h2>
            <h2 style="font-size: 12px;">Probation Officer: &proboff&</h2>
            <h2 style="font-size: 12px;">Agency Location (county): &county&</h2>
          </div>
        </div>
        <h2 style="font-size: 12px;display: inline-flex;">Violations Reported To: &rt&</h2>
        <span style="display: block; width: 100%; border-top: 3px solid; margin-top: 20px; margin-bottom: 20px" />
        <center><h1 style="font-size: 15px;">&type&</h1></center>`,
	supervisionServices: `
     <div style="margin-top: 30px">
     <h2 style="font-size: 8px;">&cmsd& Alcohol monitoring - CMS Discretion</h2>
       <h2 style="font-size: 8px;">&247& 24/7 SCRAM Alcohol Monitoring $300/mo ($50 Install fee) Continuous Alcohol Monitoring 48 tests/day</h2>
       <h2 style="font-size: 8px;">&sha& SCRAM Alcohol Monitoring w/ House Arrest $300/mo ($50 Install fee) landline OR Ethernet capability</h2>
       <h2 style="font-size: 8px;">&srb& SCRAM Remote Breath: $210/mo ($50 Install Fee) Frequency: &freq&x/day</h2>
       <h2 style="font-size: 8px;">&ha& House Arrest – $10/day ($50 Install fee) cellular/Ethernet/landline/GPS Satellite</h2>
       <h2 style="font-size: 8px;">Movement allowed for House Arrest: &ham1& NONE-Lockdown OR &ham2& Work &ham3& Treatment</h2>
       <h2 style="font-size: 8px;">&apt1& Medical Appt &apt2& Legal Appt &apt3& Religious Functions &apt4& All &apt5& Other &other&</h2>
       <h2 style="font-size: 8px;margin-left: 75px;">All House Arrest Movement verified by CMS</h2>
       <h2 style="font-size: 8px;">&gpsa& GPS Bracelet Tracking (active) $390/mo ($50 Install fee) This GPS rate pertains to immediate response to strap and exclusion zone violations, clients with victims are at this rate Order with restrictions is needed</h2>
       <h2 style="font-size: 8px;">&gpsp& GPS Bracelet Tracking (passive) $300/mo ($50 Install fee) This GPS rate is for tracking purposes only and violations will be submitted within one (1) business day. Order with restrictions is required</h2>
       <h2 style="font-size: 8px;">&phmc& PharmChem Drug Patch (2-14 days) Cocaine, Opiates, Amphetamines/Methamphetamine, PCP, THC -$70/patch ($50 Install fee)</h2>
       <h2 style="font-size: 8px;">&hfdt& Hair Follicle Drug Testing - $95 for std. / $130 for extended</h2>
       <h2 style="font-size: 8px;">&ssua& Urinalysis drug testing &uaC& x / &wm&</h2>
     </div>
 `,
	services247: `
    <div style="margin-top: 30px">
      <h2 style="font-size: 8px;">&dp& Drug Patch</h2>
      <h2 style="font-size: 8px;">&ua& Urinalysis drug testing &uaC& x / &wm&</h2>
      <h2 style="font-size: 8px;">&tdb& 24/7 Acohol Monitoring - SCRAM CAM or Twice Daily Breathalyzer</h2>
    </div>
`,
	comments: `
    <div style="margin-top: 30px;">
      <h2 style="font-size: 12px;">Comments</h2>
      <h3 style="font-size: 8px; font-weight: normal;">&cmts&</h3>
      <h2 style="font-size: 6px;margin-top: 15px;"><i>Individual pricing may vary by location</i></h2>
    </div>
  </div>
`,
};
