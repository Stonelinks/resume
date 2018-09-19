import React, { Component } from "react"

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaDribbble,
  FaExternalLinkAlt
} from "react-icons/fa"

import Page from "./Page"
import Header from "./Header"
import Section from "./Section"
import SectionHeading from "./SectionHeading"
import ExternalLink from "./ExternalLink"

import Styles from "./Styles"

const styles = Styles.Create({
  iconStyle: {
    marginLeft: Styles.vars.spacing.xs,
    marginRight: Styles.vars.spacing.xs,
    marginBottom: "-2px"
  }
})

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
            {
              address: "https://linkedin.com/in/stonelinks/",
              Icon: FaLinkedin
            },
            { address: "https://youtube.com/c/LukeDoyle0", Icon: FaYoutube },
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
                <b>Cloud front-end:</b> Built fundamental workflows to upload,
                process and analyze large drone surveys. Developed mapping /
                GIS-focused UI: authored internal react / redux / leaflet map
                framework; added support for user-defined coordinate systems;
                implemented ground control point management (GCP); built tools
                to annotate, measure and compare layers. Also built many
                enterprise-focused features like user management, permissions
                and SSO / authentication.
              </p>

              <p>
                <b>Mobile:</b> Helped bootstrap Airware's first mobile app for
                drone operators to fly, capture and upload drone data to the
                cloud. Leveraged team skills and code reuse with a react-native
                / iOS approach for the app. Implemented key features like
                geofence editing and status indicators for on-device
                photogrammetry.
              </p>

              <p>
                <b>Desktop:</b> Built an app to configure Airware's autopilot
                hardware to fly fixed-wing and multirotor drones.
              </p>

              <p>
                <b>Leadership:</b> Engaged in engineering leadership and product
                lifecycle. Helped define requirements, led feature development
                and ran meetings. Architected and completed several large scale
                refactors and migrations, including a Backbone to react
                migration as well as a product merger after acquiring a French
                company. Served as a manager on an as-needed basis; helped plan
                quarters and hired engineers.
              </p>
            </div>
          </Section>
          <Section
            name={"MUJIN Inc."}
            where={"Bunkyō-ku, Tokyo, Japan"}
            start={"2012"}
            end={"2014"}
            title={"Software Engineer"}
            techStack={
              "Javascript (Backbone / Marionette, WebGL, websockets), Python (django)"
            }
          >
            <div>
              <p>
                Fourth employee at a Japanese industrial / manufacturing
                robotics startup straight out of college. Created web interface
                for an industrial arm planning system used by Canon, Honda and
                several Japanese system integrators.
              </p>
              <ul>
                <li>
                  Defined and implemented workflows to program and optimize
                  industrial robots. Wrote all customer-facing UI, including a
                  scenegraph-based WebGL viewer and a real-time environment
                  state streamer for a binpicking system.
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
                  scenarios such as different deposition strategies, optic
                  geometries, vacuum chamber configurations.
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
              <ul>
                <li>
                  Authored log aggregation and analysis tools for a fleet of
                  >130 telepresence robots.
                </li>
                <li>
                  Implemented forehead screen UI to display internal robot state
                  and answer calls made to the robot.
                </li>
              </ul>
            </div>
          </Section>
        </SectionHeading>
        <SectionHeading name={"Education"}>
          <Section
            name={"Rensselaer Polytechnic Institute"}
            title={"B.S., Computer and Systems Engineering"}
            where={"Troy, NY"}
            start={"2008"}
            end={"2012"}
          >
            <div>
              <p>
                <b>
                  {"Boeing Robotic Wingbox"}
                  <ExternalLink href={"http://stonelinks.org/projects/boeing"}>
                    <FaExternalLinkAlt style={styles.iconStyle} />
                  </ExternalLink>:{" "}
                </b>
                Simulated an intra-wing robot to operate inside an aircraft and
                conduct inspection and assembly tasks.
              </p>
              <p>
                <b>
                  {"DaBuzz Market Sentiment Analyzer"}
                  <ExternalLink href={"http://stonelinks.org/projects/dabuzz"}>
                    <FaExternalLinkAlt style={styles.iconStyle} />
                  </ExternalLink>:{" "}
                </b>
                Designed and implemented web crawler / scraper to analyze
                financial news sources and gauge market sentiment. Gave
                presentations about DaBuzz and the Rensselaer Center for Open
                Source Software.
              </p>
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
                Experience with Solidworks. Virtually designed and simulated
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
