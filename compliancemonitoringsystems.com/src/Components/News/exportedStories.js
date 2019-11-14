import React from "react";
import Story from "../Story/story";
import Img1 from "./img/img_kpax.png";
import Img2 from "./img/img_kpax2.png";
import Img3 from "./img/Drug-Larson-C.png";
import Img4 from "./img/img_nbc.png";

const Stories = [
  {
    date: "06/22/2016",
    img: Img1,
    paraVid: "https://www.youtube.com/embed/bqOMC3XdRyM",
    title:
      "Lab tech company aiding jail diversion efforts in Missoula (Part 1)",
    paraPreview: `CMS is a company contracted with the Missoula County District Court to use a battery of electronic monitoring devices to and testing capabilities in their Missoula office to keep clients accountable.`,
    creditText: "Kpax - Missoula, MT"
  },
  {
    date: "06/23/2016",
    img: Img2,
    paraVid: "https://www.youtube.com/embed/ZFOqw-PCdAs",
    title: "Missoula company works to help addicts (Part 2)",
    paraPreview: `MISSOULA -
      Jails filled to the max and dwindling foster care options continue to plague many Montana counties. But one Missoula service bucks the trend by keeping non-violent drug offenders in the community, working -- and with their families.`,
    creditText: "Kpax - Missoula, MT"
  },
  {
    date: "07/12/2017",
    img: Img3,
    title: "Drug courts offer addicts a path to get clean",
    paraPreview: `According to a 2017 report from the Montana Supreme Court Administrator’s Office, 71 percent of adult drug court participants did not re-offend in the three years following their completion of the program. Data show graduates are more likely to get jobs and keep their families intact; they’re better equipped to lead productive, positive lives. `,
    creditText: "Valley Journal - Ronan, MT",
    articleLink:
      "http://www.valleyjournal.net/Article/17972/Drug-courts-offer-addicts-a-path-to-get-clean"
  },
  {
    date: "11/06/2017",
    img: Img4,
    title: "Ankle monitors contribute to offenders getting back on track",
    paraPreview: `Compliance monitoring systems has multiple ways to track offenders. The most common is a breathalyzer. They also use an ankle bracelet, which tracks your sweat every 30 minutes, and if you are violent or may be a flight risk you could be issued a GPS monitoring system.`,
    creditText: "NBC - Montana",
    articleLink:
      "http://nbcmontana.com/news/local/ankle-monitors-contribute-to-offenders-getting-back-on-track"
  }
];

export default Stories;
