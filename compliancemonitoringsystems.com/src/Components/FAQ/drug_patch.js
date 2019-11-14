import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Img from "../Services/DrugPatch/img/services_drug_patch2.png";
import { Button } from "react-bootstrap";
import Config from "../../config";

class DrugPatch extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Header />
          <img alt={""} src={Img} style={{ width: "100%" }} />
          <h1 style={{ margin: "50px" }}>Drug Patch Questions and Answers</h1>
          <p3
          >{`Will "passive" or inadvertent environmental exposure to a drug cause a positive test result?`}</p3>
          <p2
          >{`Yes. There were two court cases in Nevada where the PharmChek® Sweat Patch underwent challenges
              to the Daubert statute, and prevailed -- U.S. District Court, Las Vegas, NV, # CR-S-96-004-PMP,
              1/15/1999 and # CR 95-023-PMP, 5/31/1999. Daubert statute states that if evidence is to be
              presented as scientific knowledge, the following are to be present:`}</p2>
          <p3
          >{`Will the PharmChek® patch be positive if the target drug is not taken?`}</p3>
          <p2
          >{`This question has been studied directly, even though there is a strong theoretical reason not to
            believe in such possibility. The absorption pad of the patch is protected from the environment
            by a layer of film composed of polyurethane coated with adhesive. The polyurethane film is a
            "semi-permeable membrane” which allows the transfer of water vapor and gases. Initial studies
            involving this concern were conducted by applying drugs to the exterior of the patch and
            subsequently collecting and analyzing the absorption pad. No drugs were found in these experiments.
            Subsequent experiments have involved variations of these initial experiments and have
            incorporated such variations as wetting the absorbent pad with various solutions and buffers,
            varying the pH of the of the solution containing drugs that was applied to the exterior of
            the polyurethane membrane, and varying the temperature and time that the varying solutions
            are allowed to sit or incubate on the exterior of the polyurethane membrane.
            These studies have demonstrated that when both the inside and the outside of the patch were
            dry, no drug transfer could be noted. Under certain conditions, the outer polyurethane membrane
            can be altered and made permeable to the diffusion of applied drugs onto the absorption pad.
            However these conditions are not what one would realistically expect to encounter in real
            world situations.`}</p2>
          <p3
          >{`Will drugs other than the target drugs produce false positives?`}</p3>
          <p2
          >{`This question was addressed directly in clinical trials by applying patches to self- reported
              non-users. The drugs that were tested for were not found in patches from non-users. From this
              we conclude that any "normal" constituents of sweat do not produce positive results.
              In addition, while drugs may be present in the environment in certain situations and even possibly
              present on skin surfaces, none of these studies has demonstrated in realistic scenarios that the
              transfer of such environmental drugs into patches worn by those individuals present in these environments.`}</p2>
          <p3
          >{`Is the laboratory process subject to false-positive error?`}</p3>
          <p2
          >{`This is not directly addressed in studies - but was also not thought by FDA to be necessary.
              The testing procedure that was cleared by the FDA requires GCMS confirmation testing of initial
              immunoassay test positives. This is the same procedure required by SAMHSA (formerly NIDA) in the
              testing of urine samples. GCMS (and its successor LC/MS/MS) confirmation is scientifically
              capable of distinguishing the target drug from other drugs that might be present in sweat,
              preventing false positives.

              A second important point is that "parent" drugs, rather than just drug metabolites, are found
              in sweat after drug use. "Parent" drug is the same chemical compound that was taken by the
              drug user (example, heroin). Drug metabolites are "breakdown products" of the parent drug.
              Many drugs such as codeine and heroin produce the same metabolites in urine, so a urine test
              cannot reliably distinguish between them. Because sweat contains both the parent drug and the
              metabolites, the test can tell which drug has been taken.

              Clinical Reference Laboratory will be employing procedures substantially equivalent to those
              required by SAMHSA for urine testing. Years of experience with these procedures have demonstrated
              that there is a negligible problem with false positives. As an additional safeguard, Clinical
              Reference Laboratory utilizes blind quality assurance samples in the testing process.`}</p2>
          <p3>{`Detection Periods`}</p3>
          <p2
          >{`Detection periods for the PharmChek® sweat patch must be thought about in terms that are a bit
              different from urine testing. The PharmChek® patch is a collection device designed to retain
              evidence of drug use for an extended period of time. That means that drugs excreted through
              sweat because of drug use at any time during the wearing of the patch will be collected, retained,
              and detected during analysis. If a PharmChek® patch were worn for 7 days, for example, it might
              be positive because of drug use on Day 1 or on Day 6.`}</p2>
          <p3>{`
                How long does it take for drugs to be excreted through sweat after a single drug use?`}</p3>
          <p2>{`
              Clinical trial data from the administration of known amounts of drug show that essentially all
              of the drugs detectable with the patch are excreted over a period of about 2 - 3 days. This is
              quite similar to the elimination period for drugs in urine. The difference is that the PharmChek®
              patch is constantly sampling the sweat and retaining all evidence of drug use.`}</p2>
          <p3>{`
                How long after use must the PharmChek® patch be worn in order to produce a positive result?`}</p3>
          <p2>{`
              Data from clinical trials show that patches worn at least 24 hours after drug use can reliably
              test for that drug.`}</p2>
          <p3>{`Adulterants`}</p3>
          <p2
          >{`Solvents, such as chloroform or acetone, have been applied to the covering of the PharmChek®
              patch. They bubble and shrivel the PharmChek® patch covering and evidence of trying to tamper
              with these chemicals would be very easily noticed.

              In order to adulterate the PharmChek® patch a substance would have to penetrate the outside
              covering of the patch. The only feasible method that has been tried is to inject substances into
              the PharmChek® patch with a hypodermic needle. Part of the removal process for the patch includes
              holding the outside cover of the used PharmChek® patch to the light to see if there are signs of
              needle holes.`}</p2>
          <p3
          >{`How long can a person wear the PharmChek® Drugs of Abuse Patch?`}</p3>
          <p2
          >{`The skin has between 15 to 20 layers of skin cells. The top layer of cells is constantly being
              shed. The factor that determines how long a person can wear a PharmChek® patch is how long it
              takes for enough skin cells to be shed that the adhesive coating on the patch is completely
              covered with skin cells and can no longer stick to testing subject's body.

              This length of time varies between person-to-person and skin type to skin type. From our wear
              tests we have observed that most people can wear the patch for 7 to 10 days. The Michigan Pilot
              Study showed 87% of the people who wore the patch could wear it for 14 days. There is no known
              consistent health concerns associated with wearing the PharmChek® patch for periods longer
              than 14 days if the skin around and under the PharmChek® patch appears healthy and blemish-free.`}</p2>
          <p3>{`Is the sweat patch new technology?`}</p3>
          <p2
          >{`No. Drugs have been known and detected in sweat since the early 1970's. The principle challenge
              with respect to sweat testing has been the collection of sweat. The PharmChek Sweat Patch is a
              non-occlusive device that facilitates the collection of sweat.`}</p2>
          <p3
          >{`Are the testing procedures used for the analysis of sweat considered new technology?`}</p3>
          <p2
          >{`No. The testing procedures used for the analysis of sweat are the same well established procedures
              used for the analysis of urine specimen. Specimens are screened using an enzyme immunoassay
              technique. Positive specimens are confirmed using liquid chromatography/mass spectrometry/mass
              spectrometry (LC/MS/MS). Both procedures utilize certified calibrator and quality control materials.`}</p2>
          <p3
          >{`Have these procedures been submitted to and cleared by the Food and Drug Administration (FDA)?`}</p3>
          <p2
          >{`Yes. The FDA, through its procedures have cleared the PharmChek Sweat Patch as both a specimen
              collection device and as a scientifically valid procedure for the detection of drugs in sweat.`}</p2>
          <p3>{`Why is this different from hair testing?`}</p3>
          <p2
          >{`Hair testing is capable of detecting chronic drug use but has difficulty detecting occasional or
              recreational drug use.`}</p2>
          <p3
          >{`What does the sweat patch detect, and how does this differ from urine testing?`}</p3>
          <p2
          >{`Unlike urine testing that detects drug metabolites, sweat testing detects the parent or
              non-metabolized form of the drug. This is particularly important when testing for abused
              drugs such as heroin that can only be detected in urine for a short time period following
              use. Heroin is rapidly metabolized to 6-acetyl morphine then to morphine. Consumption of poppy
              seeds can also produce a positive morphine result, as can the use of a codeine based medication.
              Because the sweat patch can detect heroin, it can determine if a heroin user is attempting to
              mask the heroin use with either codeine or poppy seed use.`}</p2>
          <p3>{`How does the sweat patch work?`}</p3>
          <p2
          >{`The sweat patch comprises a white absorption pad, covered with a unique polyurethane
              dressing. The absorption pad of the patch is protected from the environment by a layer of film
              composed of polyurethane coated with adhesive. The polyurethane film is a "semipermeable membrane”
              which allows the transfer of water vapor and gases. Drugs excreted in sweat are trapped by this
              polyurethane dressing and retained on the white absorption pad.`}</p2>
          <p3
          >{`How does testing for drugs using the sweat patch differ from testing for drugs using urinalysis?`}</p3>
          <p2
          >{`Urinalysis for drugs represents a snapshot in time. Using urine testing, drugs such as amphetamines
              and cocaine are cleared from the body within 72 hours from a single drug use. Opiates will typically
              be cleared from the body within 72-96 hours following the last use. From a single use, marijuana
              will clear from the body within 96 hours. Long term heavy use may be detected for up to two weeks.
              Phencyclidine use may be detected for up to two weeks depending on history of use. The sweat patch,
              unlike urine testing, functions as a storage device. Therefore, drugs used 1-2 days before the
              patch is applied, while the patch is worn, and up to 24 hours prior to the removal of the patch
              will be detected and stored in the patch. Consequently, the sweat patch is a constant monitoring
              device, which provides the sweat patch with a longer detection window than urine testing.`}</p2>
          <p3
          >{`Is it possible to have a positive sweat patch result and a negative urine test? Why?`}</p3>
          <p2
          >{`Yes. As indicated above, the sweat patch is a storage device and represents a much longer detection
              window than does testing for drugs using urine. In addition, urine tests are subject to various
              forms of adulteration including but not limited to hydration, substitution and physical adulteration
              using products designed to affect the testing procedures.`}</p2>
          <p3
          >{`Is it possible to have a positive sweat patch result and a negative hair test? Why?`}</p3>
          <p2
          >{`Yes. It has been demonstrated that while hair testing may be able todetect chronic drug use, it
              cannot detect occasional drug use. In addition, there are a number of issues that have been raised
              by the scientific community relative to the detection of drugs in hair. These include but are not
              limited to: the procedures used to wash the hair for the removal of externally deposited drugs
              (potential for false positive results), the procedures used for the digestion and subsequent
              extraction of the drugs from the hair (potential for false negative results), differences based on
              the color of the hair (dark hair appears to incorporate drugs at a higher rate than light colored hair),
              and the removal of drugs from the hair by shampoos or other hair treatment products (relaxers, dyes or
              other chemical treatment). At present there is no consensus regarding what the appropriate testing
              levels should be in hair. There is considerable variation in these testing levels depending on which
              laboratory performs the testing.`}</p2>
          <p3>{`Is the sweat patch subject to adulteration?`}</p3>
          <p2
          >{`No, not in the same sense that urine specimens can be adulterated. The sweat patch is a tamper evident
              device. The adhesive material used on the sweat patch penetrates the upper layer epithelial layer of the
              skin. When the sweat patch is removed, these epithelial skin cells adhere to the adhesive and will prevent
              the re-application of the sweat patch. While there have been attempts to adulterate the absorption pad by
              introducing common chemicals used to adulterate urine test (bleach) these attempts are very obvious.
              Based on the physical properties of the polyurethane covering as noted above, these chemicals will be trapped
              under this polyurethane covering, and in one case the bleach resulted in a second-degree chemical burn.
              In addition, attempts to adulterate the sweat patch will typically result in a visible discoloration of the
              white absorption pad and/or discoloration or deformation of the polyurethane covering, and should be
              noted on the chain of custody document.`}</p2>
          <p3>{`Is the sweat patch subject to substitution?`}</p3>
          <p2
          >{`No. Each sweat patch has a unique identifier number imprinted above the absorption pad on the
              release liner. This number is recorded on the chain of custody document and must be verified
              when the individual reports back to have the sweat patch removed.`}</p2>
          <p3
          >{`What are the most common means used to try and beat the sweat patch?`}</p3>
          <p2
          >{`A. Removal of the sweat patch sometime after application and re-attaching the patch using
              band-aids or other adhesives.

              B. Pealing back the upper portion of the sweat patch, removing the absorption pad, and replacing
              the absorption pad prior to reporting back for sweat patch removal. This usually results in an absorption
              pad that is wrinkled, folded, creased or otherwise deformed. When this procedure is used, one side,
              typically the top of the sweat patch is held in place using band-aids or other adhesives. In some instances,
              individuals have reported back to have the sweat patch removed and the absorption pad is absent,
              although the release liner is still present, indicating that the pad has been physically removed from the
              sweat patch.

              Therefore it is imperative that the protocols established for examining the sweat patch for signs
              of tampering be followed. While some roll-up of the outer edges of the sweat patch may occur in some
              instances, the areas immediately surrounding the absorption pad should be adhering to the skin and
              otherwise intact.

              It is normal for the Absorbent Pad to be slightly moist due to the collection of sweat. This
              moisture will facilitate the separation of the Absorbent Pad from the release liner. If the Absorbent
              Pad is very dry and does not easily separate from the release liner, the donor may have removed and
              re-applied the sweat patch. The Absorbent Pad from a worn patch will be soft and slightly discolored
              due to the absorption of sweat, body oils and skin debris. If the Absorbent Pad does not reflect these
              characteristics, the Sweat Patch and transparent covering must be closely examined for signs that the
              Sweat Patch may have been compromised.`}</p2>
          <p3>{`Can the sweat patch detect multiple drug uses?`}</p3>
          <p2
          >{`No. The sweat patch is a storage device. Consequently, multiple drug uses while wearing the patch
              will result in increased drug levels in the patch. However as these are accumulative, the patch
              cannot distinguish multiple instances of drug use.`}</p2>
          <p3
          >{`What effect does hydration or flushing have on the sweat patch results?`}</p3>
          <p2
          >{`None. Unlike urine specimens which can be diluted as a result of hydration/ flushing which may
              correspondingly dilute the concentration of drugs in the urine, the consumption of large amounts
              of fluids will not decrease the drug concentrations in the sweat patch. In fact, hydration may
              encourage sweat production, thus increasing the concentration of the drugs in sweat.`}</p2>
          <p3
          >{`How were the testing levels for the sweat patch determined?`}</p3>
          <p2
          >{`Scientifically using controlled dose studies in which known amounts of drugs were given to
              volunteers for all drugs with the exception of phencyclidine. Multiple sweat patches were
              applied, removed and tested from these volunteers and the data analyzed from these studies
              using a well-established scientific approach known as receiver operating characteristics.
              This approach examines the analytical data and is able to establish cutoff testing levels
              based on true positive; true negative; false positive; and false negative results. The
              testing levels submitted to, reviewed and subsequently and cleared by the FDA were established
              using this receiver operating characteristics approach. For example, the detection of
              amphetamine and methamphetamine, utilizing a 10ng/ml screening and confirmation cutoff has a
              true positive detection rate of 96%. This means that the testing done using these cutoff
              levels will correctly identify an individual that uses methamphetamine 96% of the time, but
              will miss 4% of the individuals that use methamphetamine.`}</p2>
          <p3
          >{`Has the PharmChek® Sweat Patch been accepted by the Courts?`}</p3>
          <p2
          >{`Yes. There have been many court cases, both at the Federal and local levels in which the results
              of the sweat patch have been challenged and where the sweat patch prevailed. Two cases of interest
              include: the U.S. Court of Appeals, 5th Circuit in June 2011 affirmed the reliability of the
              sweat patch and to test for drugs of abuse. Also, in June of 2006, sweat patch results were upheld
              by U.S. Court of Appeals, which was heard by the Honorable Judge Sandra Day O’Connor
              (former member of the U.S. Supreme Court).`}</p2>
          <p3>{`Is the sweat patch subject to contamination?`}</p3>
          <p2
          >{`The sweat patch can be contaminated either during the procedure of applying the sweat patch or
              during the removal of the sweat patch. If the area that the sweat patch is being applied to is
              not properly cleaned, and drugs present on the skin's surface were not removed during the cleaning
              process, the drugs left on the skin's surface can be deposited on the absorption pad. If there
              are sufficient quantities of the drug present on the skin, a positive test could result. In
              addition, if the individual applying the patch has drugs on their hands or gloves, and touches
              the absorption pad, those drugs may cause a positive test result. Similarly, if during the
              removal process of the sweat patch, if the individual that removes the absorption pad from the
              sweat patch has drugs on their hands, or on the disposable tweezers, and these drugs are
              deposited in sufficient quantity onto the absorption pad, a positive test may result.
              Subsequent experiments have involved variations of the initial experiments submitted to the
              FDA and have incorporated such variations as wetting the absorbent pad with various solutions
              and buffers, varying the pH of the of the solution containing drugs that was applied to the
              exterior of the polyurethane membrane, and varying the temperature and time that the varying
              solutions are allowed to sit or incubate on the exterior of the polyurethane membrane.
              These studies have demonstrated that when both the inside and the outside of the patch were
              dry, no drug transfer could be noted. Under certain conditions, the outer polyurethane membrane
              can be altered and made permeable to the diffusion of applied drugs onto the absorption pad.
              However these conditions are not what one would realistically expect to encounter in real
              world situations.`}</p2>
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

export default connect(mapStateToProps, mapDispatchToProps)(DrugPatch);
