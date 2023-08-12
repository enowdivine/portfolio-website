import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "TASHA",
  lastName: "ELVIS",
  bithday: "01.07.1990",
  address: "Molyko Buea, Cameroon",
  phn: "(+237) 673-504-684",
  email: "elvismbeuge@gmail.com",
  serviceLists: [
    "Home Automation",
    "Electrical Installation",
    "Security Camera Installation",
    "Electrical/Electronics Consultant",
    "Software Development",
  ],
  skills: {
    programming: [
      { name: "C", value: "80" },
      { name: "C++", value: "80" },
      { name: "Python", value: "90" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "French", value: "80" },
    ],
  },
  education: [
    {
      year: "2016 - 2019",
      unv: "Siantou University Institute | BTS",
      degree: "Mechanical Engineering",
    },
    {
      year: "2018 - 2021",
      unv: "University Of BUEA | B.eng",
      degree: "Electrical and Electronics Engineering",
    },
  ],
  working: [
    {
      year: "2018 - running",
      company: "Camerimun | Volunteer",
      deg: "Promoting the sustainable development goals of the United Nation",
    },
    {
      year: "2017 - 2018",
      company: "Metafrik | Intern",
      deg: "Mechanical Engineering department",
    },
    {
      year: "2016 - 2017",
      company: "Goodwill Consulting Ltd | Intern",
      deg: "Consulting Department",
    },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/Tasha.jpeg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>David Parker.</span> I am a graphic designer,
                  and {`I'm`} very passionate and dedicated to my work. With 20
                  years experience as a professional a graphic designer, I have
                  acquired the skills and knowledge.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
