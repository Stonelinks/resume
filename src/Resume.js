import React, { Component } from "react"

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaDribbble
} from "react-icons/fa"

import Page from "./Page"
import Header from "./Header"
import Section from "./Section"
import SectionHeading from "./SectionHeading"

class Resume extends Component {
  render() {
    return (
      <Page>
        <Header
          name={"Lucas Doyle"}
          email={"lucas.p.doyle@gmail.com"}
          cellphoneNumber={"603-998-3565"}
          pdfLink={"http://stonelinks.github.io/resume/lucas_doyle_resume.pdf"}
          websiteAddress={"http://stonelinks.org/luke/"}
          addressLineOne={"737 Hyde Street Apt. 401"}
          addressLineTwo={"San Francisco, CA 94109"}
          socialNetworks={[
            { address: "https://github.com/Stonelinks", Icon: FaGithub },
            { address: "https://twitter.com/#!/Stonelinks", Icon: FaTwitter },
            {
              address: "http://www.linkedin.com/pub/lucas-doyle/25/550/169",
              Icon: FaLinkedin
            },
            {
              address: "https://www.youtube.com/c/LukeDoyle0",
              Icon: FaYoutube
            },
            { address: "https://dribbble.com/Stonelinks", Icon: FaDribbble }
          ]}
        />

        <SectionHeading name={"Professional"}>
          <Section
            name={"Airware"}
            where={"San Francisco, CA"}
            start={"2014"}
            end={"2018"}
            title={"Senior Staff Software Engineer"}
            techStack={
              "Javascript (react, redux, babel, webpack, leaflet, THREE.js, react-native, node-webkit), Python, some Swift 3 / iOS, PHP (symfony), golang"
            }
          >
            <div>
              <p>
                Developed core technologies for an enterprise commercial drone
                analytics platform. Transformed raw drone imagery into
                survey-grade data products for the insurance and mining /
                quarrying industries.
              </p>

              <p>
                <b>Cloud front-end:</b> built fundamental workflows to upload,
                process and analyze large drone surveys. Developed mapping / GIS
                focused UI: authored internal react / redux / leaflet map
                framework, added support for user-defined coordinate systems,
                implemented ground control point management, built tools to
                annotate, measure and compare layers. Also built many
                enterprise-focused features like user management, permissions
                and SSO / authentication.
              </p>

              <p>
                <b>Mobile:</b> helped bootstrap Airware's first mobile app for
                drone operators to fly, capture and upload drone data to the
                cloud. Leveraged existing team skills and code reuse with a
                react-native / iOS approach for the app. Implemented key
                features like geofence editing and status indicators for
                on-device photogrammetry.
              </p>

              <p>
                <b>Desktop:</b> built Config Manager to configure Airware's
                autopilot hardware to fly fixed-wing and multirotor drones.
              </p>

              <p>
                <b>Leadership:</b> engaged in engineering leadership and product
                lifecycle. Help define requirements, run meetings and generally
                move things forward. Serve as a manager and help plan quarters /
                hire people on an as-needed basis. Architected and completed a
                few large scale refactors and migrations, including a Backbone
                to react migration as well as a product merger after acquiring a
                French company.
              </p>
            </div>
          </Section>
          <Section
            name={"MUJIN Inc."}
            where={"Tokyo, Japan"}
            start={"2012"}
            end={"2014"}
            title={"Software Engineer"}
            techStack={
              "Javascript (Backbone / Marionette, WebGL, websockets), Python (django)"
            }
          >
            <div>
              <p>
                Employee number four at a Japanese industrial / manufacturing
                robotics startup straight out of college. Created the web
                interface for an industrial arm planning system used by clients
                such as Canon, Honda, and a half-dozen other Japanese companies.
              </p>
              <ul>
                <li>
                  Defined and implemented workflows to program and optimize
                  industrial robots. Wrote all customer facing UI. Highlights
                  include a scenegraph-based WebGL viewer and a real-time
                  environment state streamer for our binpicking system.
                </li>
                <li>
                  Honed communication skills by working with a highly
                  international team and living in Japan for two years.
                </li>
              </ul>
            </div>
          </Section>
          <Section
            name={"Harvard-Smithsonian Center for Astrophysics"}
            link={"http://stonelinks.org/projects/amf"}
            where={"Cambridge, MA"}
            start={"2009"}
            end={"2012"}
            title={"Automations Programmer / Engineer"}
            techStack={
              "Python (flask), LabVIEW, Javascript, Solidworks, Arduino"
            }
          >
            <div>
              <p>
                Worked on an experimental X-ray optic production facility on a
                summer internship / part time basis.
              </p>
              <ul>
                <li>
                  Wrote software to fabricate optics in multiple production
                  scenarios (different deposition strategies, optic geometries,
                  vacuum chamber configurations, etc.)
                </li>
                <li>
                  Completed mechanical and electrical design of vacuum chamber
                  hardware. Used CAD to produce drawings for machinists and
                  coordinated work with external component vendors. Saved costs
                  by developing efficient shutter controllers using Arduinos.
                </li>
              </ul>
            </div>
          </Section>
          <Section
            name={"Anybots Inc."}
            link={"http://stonelinks.org/projects/anybots"}
            where={"Mountain View, CA"}
            start={"2011"}
            title={"Robotics Intern"}
            techStack={"Python, Javascript"}
          >
            <div>
              <p>
                Authored log aggregation and analysis tools for a fleet of >130
                telepresence robots for internal staff.
              </p>
              <p>
                Implemented forehead screen UI to display internal robot state
                and answer calls made to the robot.
              </p>
            </div>
          </Section>
        </SectionHeading>
        <SectionHeading name={"Education"}>
          <Section
            name={"Rensselaer Polytechnic Institute"}
            where={"Troy, NY"}
            start={"2008"}
            end={"2012"}
          >
            <p>B.S., Computer and Systems Engineering</p>
          </Section>
          <Section
            name={"Gilford High School"}
            where={"Gilford, NH"}
            start={"2004"}
            end={"2008"}
          />
        </SectionHeading>
        <SectionHeading name={"Projects and Open Source"}>
          <Section
            name={"Boeing Robotic Wingbox"}
            link={"http://stonelinks.org/projects/boeing"}
            where={"Troy, NY"}
            start={"2012"}
            title={"Team Leader and Programmer"}
            techStack={"Python (pyQT), C++ (OpenRAVE, boost::asio, OpenCV)"}
          >
            <div>
              <ul>
                <li>
                  Leader of a Boeing-sponsored team of students to simulate an
                  intra-wing robot to operate inside an aircraft and conduct
                  common inspection and assembly tasks.
                </li>
                <li>
                  Wrote C++ server and python client to control robot hardware,
                  enable collaboration, recognize object locations with OpenCV,
                  plan collisions-free trajectories through internal wing
                  structures with OpenRAVE.
                </li>
              </ul>
            </div>
          </Section>
          <Section
            name={"DaBuzz Market Sentiment Analyzer"}
            link={"http://stonelinks.org/projects/dabuzz"}
            where={"Troy, NY"}
            start={"2012"}
            title={"Team Member"}
            techStack={"Python (django, nltk)"}
          >
            <div>
              <ul>
                <li>
                  Designed and implemented web crawler / scraper to analyze
                  financial news sources and gauge market sentiment
                </li>
                <li>
                  Gave presentations and poster sessions to the RPI Community
                  about DaBuzz and the Rensselaer Center for Open Source
                  Software
                </li>
              </ul>
            </div>
          </Section>
        </SectionHeading>
        <SectionHeading name={"Skills"}>
          <Section name={"Software Development"}>
            <div>
              <p>
                Experience writing both modern and "old-school" Javascript for
                front-end, back-end and mobile (via react-native). Experience
                with Python and node for backend / tooling. Experience with
                javascript tooling for build and unit testing. Familiarity with
                Swift / iOS, PHP, C++.
              </p>
              <p>
                Familiar with industry standard tools like git, JIRA, github,
                CI, Docker, etc. Pragmatic follower of agile best practices.
                Effective technical writing and documentation skills.
              </p>
            </div>
          </Section>
          <Section name={"Embedded Control"}>
            <div>
              <p>
                Authored control software for autonomous and semi-autonomous
                boats, blimps, cars and robots. Programmed for multiple
                microcontrollers (Intel 8051, Arduino, ARM).
              </p>
            </div>
          </Section>
          <Section name={"Computer Aided Design (CAD)"}>
            <div>
              <p>
                Experience with Solidworks. Virtually designed / simulated
                multiple FIRST robots, a Battlebot and vacuum chambers at
                Harvard-Smithsonian Center for Astrophysics.
              </p>
            </div>
          </Section>
        </SectionHeading>
      </Page>
    )
  }
}

export default Resume
