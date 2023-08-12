import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "TASHA",
  lastName: "ELVIS",
  bithday: "18.09.1996",
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
      { name: "Hardware development", value: "80" },
      { name: "Autocard software", value: "80" },
      { name: "Arduino", value: "90" },
      { name: "House Electrification", value: "80" },
      { name: "solar panels installation", value: "80" },
      { name: "Leadership skills", value: "90" },
      { name: "Robotics", value: "80" },
      { name: "people management", value: "80" },
      { name: "Teaching experience", value: "90" },
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
      year: "2020 - Running",
      company: "Mountain University Buea | Lecturer",
      deg: "Lecturing Electrical power sytem and Circuit analysis",
    },
    {
      year: "2020 - Running",
      company: "JCI Buea Summit | President",
      deg: "We are you active citizens all over the world. Living,communicating,taking action and creating impact in our communities.",
    },
    {
      year: "2020 - Running",
      company: "Model Initiative of Africa (MIA) | National Supervisor",
      deg: "Youth-led organization committed in bringing contribution and experience towards strengthening and addressing particular issues slowing the socioeconomic in Africa and Cameroon.",
    },
    {
      year: "2020 - 2021",
      company:
        "Mogi Global Leadership School Graduate Center | Country Program Director",
      deg: "",
    },
    {
      year: "2019 - Running",
      company: "Summit Tech Ltd | Founder/CEO",
      deg: "Technological company made of Ideal Engineers with the aim of improving Technology in Africa",
    },
    {
      year: "2019 - 2021",
      company: "Faculty of Engineering and Technology | Faculty President",
      deg: "The Faculty of engineering and Technology Students Association (FETSA)",
    },
    {
      year: "2019 - 2020",
      company: "United Nation Student Association (UNSA) | Financial Director",
      deg: "Promoting the Sustainable Development goals and the United Nation and Al's increasing the ambassador of United nation in schools",
    },
    {
      year: "2019 - 2020",
      company: "Dangote Cement Cameroon | Intern",
      deg: "Intern under electrical engineering department.Electrical installation,automatic control systems and AC machines.",
    },
    {
      year: "2018 - Running",
      company:
        "Center of Excellence And Career Orientation | National Cordinator",
      deg: "National center for Career orientation and scholarship opportunities",
    },
    {
      year: "2018 - Running",
      company: "Greenpoint Africa | Team Lead",
      deg: "Enhancing and Formation of Youths for a better Africa",
    },
    {
      year: "2018 - Running",
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
    "img/partners/heroes.jpeg",
    "img/partners/natex.jpg",
    "img/partners/peace.jpeg",
    "img/partners/sta.jpg",
    "img/partners/summittech.jpeg",
    "img/partners/dip.jpeg",
    "img/partners/gwc.png",
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
                  My name is <span>Tasha Elvis.</span> Self-
                  motivated,Enthusiasticsupervisorexperiencedinprovi ding
                  encouragement and direction to current andfuture students
                  working toward humanitarianobjectives. Committed to providing
                  compassionate support while capitalizing on networking
                  opportunities.Catalyst for change through mobilizing support
                  toachieve youth initiatives.Motivated to learn, grow
                  andexcelinTechnology
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
