import React from "react";
import { config } from "config";
import { rhythm } from "utils/typography";

import { CommonStyles } from "utils/styles";

const styles = {
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
  techStack: {
    color: "#939393",
    marginTop: rhythm(0.25),
    marginBottom: rhythm(0.25),
    fontSize: "15px",
    lineHeight: "19px"
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
  externalLink: {
    display: "inline-block",
    fontSize: "20px",
    lineHeight: "20px",
    // position: "relative",
    // bottom: "-2px",
    marginLeft: "4px"
    // marginRight: "4px"
  }
};

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
            <p style={CommonStyles.p}>
              Lead developer of core technologies for an enterprise commercial
              drone platform.
            </p>

            <p style={CommonStyles.p}>
              <b>Cloud Front-end:</b> large-scale file ingestion, processing and
              analysis of drone imagery. Wrote mapping / GIS tools: internal
              react / redux / leaflet map framework (which I'd like to open
              source someday), user-defined custom coordinate systems, ground
              control point (GCP) management. Features to view, annotate,
              measure and compare drone imagery. Built an experimental 3D
              viewer, javascript build / test tooling and many
              enterprise-focused features like user management, permissions, SSO
              / authentication, etc.
            </p>

            <p style={CommonStyles.p}>
              <b>Mobile:</b> helped bootstrap Airware's first mobile app for
              drone operators to fly, capture and upload drone data to the
              cloud. Leveraged existing team skills and code reuse with a
              react-native / iOS approach for the app. Implemented key features
              like geofence editing and status indicators for on-device
              photogrammetry.
            </p>

            <p style={CommonStyles.p}>
              <b>Configuration Manager:</b> desktop app built with web
              technologies to configure Airware's autopilot hardware for different fixed-wing and multirotor drones.
            </p>

            <p style={CommonStyles.p}>
              <b>Leadership:</b> fully engaged in engineering leadership and
              product lifecycle. Help define requirements, run meetings and
              generally move things forward. Serve as a manager and help plan
              quarters / hire people on an as-needed basis. Architected and
              completed a few large scale refactors and migrations, including a
              product merger after acquiring a French company.
            </p>
          </div>
        ),
        techStack:
          "Javascript, react, redux, babel, webpack, leaflet, react-native, THREE.js, node-webkit (nw.js), some Python, Golang and PHP"
      },
      {
        name: "MUJIN Inc.",
        where: "Bunkyo-ku, Tokyo, Japan",
        start: "2012",
        end: "2014",
        title: "Software Engineer",
        description: (
          <div>
            <p style={CommonStyles.p}>
              Fourth employee of a Japanese industrial / manufacturing robotics
              startup straight out of college. Created the web interface for a
              robotics planning system used by clients such as Canon, Honda, and
              a half-dozen other Japanese companies.
            </p>
            <ul style={CommonStyles.ul}>
              <li style={CommonStyles.li}>
                Defined and implemented workflows to program and optimize
                industrial robots. Wrote all customer facing UI. Highlights
                include a scenegraph-based WebGL viewer and a real-time
                environment state streamer for our binpicking system.
              </li>
              <li style={CommonStyles.li}>
                Honed communication skills by working with a highly
                international team and living in Japan for two years.
              </li>
            </ul>
          </div>
        ),
        techStack:
          "Javascript, Backbone / Marionette, Grunt, Python, django, WebGL, websockets"
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
            <p style={CommonStyles.p}>
              Assisted with design, construction and programming of an
              experimental X-ray optic production facility on a summer
              internship / part time basis.
            </p>
            <ul style={CommonStyles.ul}>
              <li style={CommonStyles.li}>
                Wrote software to fabricate optics in multiple production
                scenarios (different deposition strategies, optic geometries,
                vacuum chamber configurations, etc.)
              </li>
              <li style={CommonStyles.li}>
                Completed mechanical and electrical design of vacuum chamber
                hardware. Used CAD to produce drawings for machinists,
                coordinated work with external component vendors. Saved costs by
                developing efficient shutter controllers using Arduinos.
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
            <p style={CommonStyles.p}>
              Authored log aggregation and analysis tools for a fleet of >130
              telepresence robots for internal staff.
            </p>
            <p style={CommonStyles.p}>
              Implemented forehead touchscreen UI to display internal robot
              device status, as well as a call screen to allow users to answer
              calls made to their robot.
            </p>
          </div>
        ),
        techStack: "Python, Javascript"
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
          <p style={CommonStyles.p}>B.S., Computer and Systems Engineering</p>
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
            <ul style={CommonStyles.ul}>
              <li style={CommonStyles.li}>
                Leader of a Boeing-sponsored team of students to design a
                simulator for an intra-wing robot to operate inside an aircraft
                and conduct common inspection and assembly tasks.
              </li>
              <li style={CommonStyles.li}>
                Wrote concurrent server in C++ to control robot hardware, enable
                collaboration, recognize object locations with OpenCV, plan
                trajectories to avoid collisions with internal wing geometry.
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
            <ul style={CommonStyles.ul}>
              <li style={CommonStyles.li}>
                Designed and implemented web crawler / scraper to analyze
                financial news sources and gauge market sentiment
              </li>
              <li style={CommonStyles.li}>
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
            <p style={CommonStyles.p}>
              Experience writing both modern and "old-school" Javascript for
              front-end, back-end and mobile (react-native). Experience with
              python and node. Familiar with modern javascript tooling for build
              and testing. Experience Python user. Familiarity with Swift / iOS,
              C++, PHP. Familiar with industry standard tools, like git, JIRA,
              github, etc.
            </p>
            <p style={CommonStyles.p}>
              Pragmatic follower of agile best practices. Effective technical
              writing and documentation skills.
            </p>
          </div>
        )
      },
      {
        name: "Computer Aided Design (CAD)",
        description: (
          <div>
            <p style={CommonStyles.p}>
              Experience with Solidworks. Virtually designed / simulated
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
            <p style={CommonStyles.p}>
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
];

class Resume extends React.Component {
  render() {
    return (
      <div>
        {resume.map(section => {
          return (
            <div key={section.name}>
              <h3 style={CommonStyles.h3}>{section.name}</h3>
              <hr style={CommonStyles.hr} />
              {section.list.map(listItem => {
                return (
                  <div key={listItem.name}>
                    <div>
                      <div style={styles.left}>
                        <h4 style={CommonStyles.h4}>
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
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Resume;
