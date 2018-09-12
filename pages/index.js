import React from "react"
import { config } from "config"
import { rhythm } from "utils/typography"

const styles = {
  p: {
    marginTop: rhythm(0.25),
    marginBottom: rhythm(0.25),
    fontSize: "15px",
    lineHeight: "19px"
  },
  techStack: {
    color: "#939393",
    marginTop: rhythm(0.25),
    marginBottom: rhythm(0.25),
    fontSize: "15px",
    lineHeight: "19px"
  },
  h3: {
    marginTop: rhythm(1),
    marginBottom: rhythm(0.25)
  },
  h4: {
    marginTop: rhythm(0.5),
    marginBottom: 0
  },
  hr: {
    marginBottom: rhythm(0.5),
    backgroundColor: "gray"
  },
  resumeItemWrapper: {
    marginTop: rhythm(0.5),
    marginBottom: rhythm(0.5)
  },
  headerItemSmall: {
    fontSize: "15px",
    lineHeight: "19px"
  },
  title: {
    fontSize: "15px",
    lineHeight: "19px",
    fontWeight: "bold"
  },
  ul: {
    marginBottom: rhythm(0.5)
  },
  li: {
    fontSize: "15px",
    lineHeight: "19px",
    marginBottom: rhythm(0.25)
  },
  left: {
    display: "inline-block",
    width: "55%"
  },
  middle: {
    display: "inline-block",
    width: "25%",
    textAlign: "center"
  },
  right: {
    display: "inline-block",
    width: "20%",
    textAlign: "right"
  },
  externalLink: {
    display: "inline-block",
    fontSize: "20px",
    lineHeight: "20px",
    // position: "relative",
    // bottom: "-2px",
    marginLeft: "4px"
    // marginRight: "4px"
  }
}

const resume = [
  {
    name: "Professional",
    list: [
      {
        name: "Airware",
        where: "San Francisco, CA",
        start: "2014",
        end: "Present",
        title: "Staff Software Engineer",
        description: (
          <div>
            <p style={styles.p}>
              Lead front-end development of core technologies for enterprise /
              commercial drone users.
            </p>
            <p style={styles.p}>
              <b>Cloud Front-end:</b> responsible for job creation workflows,
              flight planning, data processing / analysis. significant mapping /
              geospatial experience creating UI for viewing, annotating and
              measuring drone imagery, spatial data and other drone-derived data
              products.
            </p>
            <p style={styles.p}>
              <b>Configuration Manager:</b> desktop application built with web
              technologies designed for novices to provision, configure and
              update any aircraft to fly with Airware's autopilot and avionics
              hardware.
            </p>
            <p style={styles.p}>
              Fully engaged in engineering leadership, have planned quarters and
              managed teams on an as-needed basis within a startup environment
              with a technically complex product. Work closely with Product,
              Quality, Design and Support teams.
            </p>
          </div>
        ),
        techStack:
          "React, Redux, ES6, Babel, Webpack, Leaflet, Mocha, Karma, Sinon, Enzyme, Backbone, Marionette, node-webkit (nw.js), some Python and Golang"
      },
      {
        name: "MUJIN Inc.",
        where: "Bunkyo-ku, Tokyo, Japan",
        start: "2012",
        end: "2014",
        title: "Software Engineer",
        description: (
          <div>
            <p style={styles.p}>
              Moved to Japan straight out of college to be the fourth employee
              of an industrial / manufacturing robotics startup. Created the web
              interface to MUJIN's robotics planning platform used by clients
              such as Canon, Honda, and a half-dozen other Japanese companies.
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Conceptualized, designed and implemented workflows for users to
                program and optimize their industrial robots. Wrote all customer
                facing UI.
              </li>
              <li style={styles.li}>
                Designed, developed and supported major features on an extremely
                tight schedule with a small team. Highlights include a
                scenegraph-based WebGL viewer and a real-time environment state
                streamer for our binpicking system.
              </li>
              <li style={styles.li}>
                Honed communication skills by working with a highly
                international team and living in Japan.
              </li>
            </ul>
          </div>
        ),
        techStack:
          "Backbone, Marionette, Grunt, Python, django, webgl, websockets"
      },
      {
        name: "Harvard-Smithsonian Center for Astrophysics",
        link: "http://stonelinks.org/projects/amf",
        where: "Cambridge, MA",
        start: "2009",
        end: "2012",
        title: "Automations Programmer / Engineer",
        description: (
          <div>
            <p style={styles.p}>
              Designed, constructed and programmed an experimental X-ray optic
              production facility
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Wrote software to simplify fabrication of X-ray optics in
                multiple production scenarios (different deposition strategies,
                optic geometries, vacuum chamber configurations, etc.)
              </li>
              <li style={styles.li}>
                Designed and built sample manipulation hardware and high
                strength vacuum chamber mount using Solidworks, CAD and working
                with component vendors and machinists
              </li>
              <li style={styles.li}>
                Saved time and lowered costs by developing efficient shutter
                controllers for all chambers using Arduinos
              </li>
              <li style={styles.li}>
                Worked closely with physicists and astrophysicists to fulfill
                requirements
              </li>
              <li style={styles.li}>
                Supervised a high school student to characterize optic
                substrates with a high precision 3D profilemeter
              </li>
            </ul>
          </div>
        ),
        techStack: "Python, LabVIEW, Javascript, Solidworks, Arduino"
      },
      {
        name: "Anybots Inc.",
        link: "http://stonelinks.org/projects/anybots",
        where: "Mountain View, CA",
        start: "2011",
        title: "Robotics Intern",
        description: (
          <div>
            <p style={styles.p}>
              Authored analytics and reporting tools to track, analyze and
              prioritize events from thousands of logs for a fleet of >130
              telepresence robots. Cross referenced events with customer
              information and known bugs to preemptively dispatch engineering
              and support teams.
            </p>
            <p style={styles.p}>
              Implemented forehead touchscreen UI to display internal robot
              device status / connectivity, as well as a call screen to allow
              users to answer or deny calls made to their robot.
            </p>
          </div>
        ),
        techStack: "Python, Javascript, custom internal tools"
      }
    ]
  },
  {
    name: "Education",
    list: [
      {
        name: "Rensselaer Polytechnic Institute",
        where: "Troy, NY",
        start: "2008",
        end: "2012",
        description: (
          <p style={styles.p}>B.S., Computer and Systems Engineering</p>
        )
      },
      {
        name: "Gilford High School",
        where: "Gilford, NH",
        start: "2004",
        end: "2008"
      }
    ]
  },
  {
    name: "Projects and Open Source",
    list: [
      {
        name: "Boeing Robotic Wingbox",
        link: "http://stonelinks.org/projects/boeing",
        where: "Troy, NY",
        start: "2012",
        title: "Team Leader and Lead Programmer",
        description: (
          <div>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Led a team of students to design a simulator for an intra-wing
                robot to operate inside an aircraft
              </li>
              <li style={styles.li}>
                Worked with Boeing to fulfill requirements for assembly and
                maintenance roles of operation
              </li>
              <li style={styles.li}>
                Implemented robot client / server to distribute computation
                effectively and allow collaborative robot use
              </li>
              <li style={styles.li}>
                Created joystick controls and 3D interface to enable easy user /
                robot interaction
              </li>
              <li style={styles.li}>
                Wrote concurrent server in C++ to control robot hardware,
                recognize object locations with OpenCV, plan trajectories to
                avoid collisions
              </li>
            </ul>
          </div>
        )
      },
      {
        name: "DaBuzz Market Sentiment Analyzer",
        link: "http://stonelinks.org/projects/dabuzz",
        where: "Troy, NY",
        start: "2012",
        title: "Team Member",
        description: (
          <div>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Designed and implemented web crawler / scraper to analyze
                financial news sources and gauge market sentiment
              </li>
              <li style={styles.li}>
                Assisted in implementation / training of classifier using Python
                Natural Language Toolkit
              </li>
              <li style={styles.li}>
                Gave presentations and poster sessions to the RPI Community
                about DaBuzz and the Rensselaer Center for Open Source Software
              </li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    name: "Skills",
    list: [
      {
        name: "Software Development",
        description: (
          <div>
            <p style={styles.p}>
              Extensive experience writing Javascript for browser and server,
              Python, LabVIEW. Familiarity with Swift, Golang, C++, PHP,
              Seasoned Linux user. Familiar with industry standard development
              tools, e.g. version control (git) and design patterns (MVC, MVVM,
              ).
            </p>
            <p style={styles.p}>
              Concerned with best practices (DRY, etc.). Effective technical
              writing and documentation skills.
            </p>
          </div>
        )
      },
      {
        name: "Web Technologies",
        description: (
          <div>
            <p style={styles.p}>
              Strong web development experience, particularly on frontend but
              comfortable with the full stack. Host own website Amazon EC2/aws.
              Very seasoned Javascript developer, both on frontend and backend
              with Node. Familiar with CSS3/HTML5, Marionette/Backbone,
              React/Redux, Django, Flask, Wordpress core, various Google APIs.
              Proficient with relational and non-relational databases.
            </p>
          </div>
        )
      },
      {
        name: "Computer Aided Design",
        description: (
          <div>
            <p style={styles.p}>
              Experience with Solidworks. Virtually designed and/or simulated
              multiple FIRST robots, a Battlebot and vacuum chambers at
              Harvard-Smithsonian Center for Astrophysics.
            </p>
          </div>
        )
      },
      {
        name: "Embedded Control",
        description: (
          <div>
            <p style={styles.p}>
              Authored control software for autonomous and semi-autonomous
              boats, blimps, cars and robots. Programmed for multiple
              microcontrollers (Intel 8051, Arduino, ARM). Regularly build own
              servers and computers.
            </p>
          </div>
        )
      }
    ]
  }
]

class Resume extends React.Component {
  render() {
    return (
      <div>
        {resume.map(section => {
          return (
            <div key={section.name}>
              <h3 style={styles.h3}>{section.name}</h3>
              <hr style={styles.hr} />
              {section.list.map(listItem => {
                return (
                  <div key={listItem.name}>
                    <div>
                      <div style={styles.left}>
                        <h4 style={styles.h4}>
                          {listItem.name}
                          {listItem.link && (
                            <a
                              href={listItem.link}
                              target="blank_"
                              style={styles.externalLink}
                            >
                              <div className={`fa fa-external-link`} />
                            </a>
                          )}
                        </h4>
                      </div>
                      <div style={styles.middle}>
                        <div style={styles.headerItemSmall}>
                          {listItem.where}
                        </div>
                      </div>
                      <div style={styles.right}>
                        <div style={styles.headerItemSmall}>
                          {listItem.start}
                          {listItem.end && " - " + listItem.end}
                        </div>
                      </div>
                    </div>
                    {listItem.title && (
                      <div style={styles.title}>{listItem.title}</div>
                    )}
                    <div style={styles.resumeItemWrapper}>
                      {listItem.description}
                      {listItem.techStack && (
                        <p style={styles.techStack}>
                          <b>Tech stack:</b>
                          {` ${listItem.techStack}`}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

Resume.propTypes = {
  route: React.PropTypes.object
}

export default Resume
