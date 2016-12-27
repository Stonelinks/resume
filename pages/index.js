import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { rhythm } from 'utils/typography'

import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

const style = {
  p: {
    marginBottom: rhythm(0.5)
  },
  h3: {
    marginBottom: rhythm(0.25)
  },
  h4: {
    marginBottom: rhythm(0.25)
  }
}

const resume = [
  {
    name: 'Professional',
    list: [
      {
        name: 'Airware',
        where: 'San Francisco, CA',
        start: '2014',
        end: 'Present',
        title: 'Software Engineer',
        description: (
        <div>
          <p style={style.p}>
            Responsible for leading development of two highly leveraged products for our enterprise users:
          </p>
          <ul>
            <li>
              The Airware Cloud Frontend implements all workflows and UI for job creation, data processing and analysis of the imagery, data products and geospatial data that
              our cloud has to handle for our customers
            </li>
            <li>
              The Aircraft Configuration Manager, a desktop application built with web technologies designed for novices to provision, configure and update any aircraft to fly
              with Airware's autopilot and avionics hardware
            </li>
          </ul>
          <p style={style.p}>
            Fully engaged in agile methodology and engineering leadership. Work closely with non-engineering teams including Product, Quality, Design and Documentation.
          </p>
        </div>
        )
      }, {
        name: 'MUJIN Inc.',
        where: 'Bunkyo-ku, Tokyo, Japan',
        start: '2012',
        end: '2014',
        title: 'Software Engineer',
        description: (
        <div>
          <p style={style.p}>
            Fourth employee of a Japanese industrial robotics startup. Created the web interface for a large-scale industrial robotics platform used by clients such as Canon,
            Honda, and a half-dozen other Japanese companies.
          </p>
          <ul>
            <li>
              Conceptualized and implemented workflows for users to program and optimize industrial robots
            </li>
            <li>
              Wrote complex frontend code, including all customer facing UI, a real-time environment state streamer, a scenegraph-based WebGL viewer and more
            </li>
            <li>
              Created infrastructure tools to rapidly develop / build / deploy a large scale Backbone app
            </li>
            <li>
              Designed, developed and supported major features on an extremely tight schedule with a small team
            </li>
            <li>
              Honed communication skills by working with a highly international team and living in Japan
            </li>
          </ul>
        </div>
        )
      }, {
        name: 'Harvard-Smithsonian Center for Astrophysics',
        link: 'http://stonelinks.org/projects/amf/index.html',
        where: 'Cambridge, MA',
        start: '2009',
        end: '2012',
        title: 'Automations Programmer / Engineer',
        description: (
        <div>
          <p style={style.p}>
            Designed, constructed and programmed an experimental X-ray optic production facility.
          </p>
          <ul>
            <li>
              Wrote software to simplify fabrication of X-ray optics in multiple production scenarios
            </li>
            <li>
              Designed sample manipulation hardware and high strength vacuum chamber mount using CAD
            </li>
            <li>
              Saved time and lowered costs by developing more efficient shutter controller used on all chambers
            </li>
            <li>
              Worked closely with physicists, component vendors, machinists, etc. to fulfill requirements
            </li>
            <li>
              Supervised a high school student to characterize optic substrates with a high precision 3D profilemeter
            </li>
          </ul>
        </div>
        )
      }, {
        name: 'Anybots Inc.',
        link: 'http://stonelinks.org/projects/anybots/index.html',
        where: 'Mountain View, CA',
        start: '2011',
        title: 'Robotics Intern',
        description: (
        <div>
          <p style={style.p}>
            Authored tools to statistically track, analyze and prioritize events from thousands of logs for a fleet of >130 telepresence robots. Cross referenced events with
            customer information and known bugs to preemptively dispatch engineering and support teams.
          </p>
          <p style={style.p}>
            Implemented forehead touchscreen UI to display internal robot device status / connectivity, as well as a call screen to allow users to answer or deny calls made
            to their robot.
          </p>
        </div>
        )
      }
    ]
  }, {
    name: 'Education',
    list: [
      {
        name: 'Rensselaer Polytechnic Institute',
        where: 'Troy, NY',
        start: '2008',
        end: '2012',
        description: <p style={style.p}>
                       B.S., Computer and Systems Engineering
                     </p>
      }, {
        name: 'Gilford High School',
        where: 'Gilford, NH',
        start: '2004',
        end: '2008'
      }
    ]
  },
  {
    name: 'Projects and Open Source',
    list: [
      {
        name: 'Boeing Robotic Wingbox',
        link: 'http://stonelinks.org/projects/boeing/index.html',
        where: 'Troy, NY',
        start: '2012',
        title: 'Team Leader and Lead Programmer',
        description: (
        <div>
          <ul>
            <li>
              Led a team of students to design a simulator for an intra-wing robot to operate inside an aircraft
            </li>
            <li>
              Worked with Boeing to fulfill requirements for assembly and maintenance roles of operation
            </li>
            <li>
              Implemented robot client / server to distribute computation effectively and allow collaborative robot use
            </li>
            <li>
              Created joystick controls and 3D interface to enable easy user / robot interaction
            </li>
            <li>
              Wrote concurrent server in C++ to control robot hardware, recognize object locations with OpenCV, plan trajectories to avoid collisions
            </li>
          </ul>
        </div>
        )
      }, {
        name: 'DaBuzz Market Sentiment Analyzer',
        link: 'http://stonelinks.org/projects/dabuzz/index.html',
        where: 'Troy, NY',
        start: '2012',
        title: 'Team Member',
        description: (
        <div>
          <ul>
            <li>
              Designed and implemented web crawler / scraper to analyze financial news sources and gauge market sentiment
            </li>
            <li>
              Assisted in implementation / training of classifier using Python Natural Language Toolkit
            </li>
            <li>
              Gave presentations and poster sessions to the RPI Community about DaBuzz and the Rensselaer Center for Open Source Software
            </li>
          </ul>
        </div>
        )
      }
    ]
  },
  {
    name: 'Skills',
    list: [
      {
        name: 'Software Development',
        description: (
        <div>
          Javascript, Python, C++, MATLAB, LabVIEW. Seasoned Linux user. Familiar with industry standard development tools, e.g. version control and design patterns. Concerned
          with best practices (DRY, etc.). Effective technical writing and documentation skills.
        </div>
        )
      }, {
        name: 'Web Technologies',
        description: (
        <div>
          <p style={style.p}>
            Strong web development experience, particularly on frontend but comfortable with the full stack. Host own website Amazon EC2/aws. Very seasoned Javascript developer,
            both on frontend and backend with Node. Familiar with CSS3/HTML5, Marionette/Backbone, React/Redux, Django, Flask, Wordpress core, various Google APIs. Proficient
            with relational and non-relational databases.
          </p>
        </div>
        )

      }, {
        name: 'Computer Aided Design',
        description: (
        <div>
          <p style={style.p}>
            Experience with Solidworks. Virtually designed and/or simulated multiple FIRST robots, a Battlebot and vacuum chambers at Harvard-Smithsonian Center for Astrophysics.
          </p>
        </div>
        )

      }, {
        name: 'Embedded Control',
        description: (
        <div>
          <p style={style.p}>
            Authored control software for autonomous and semi-autonomous boats, blimps, cars and robots. Programmed for multiple microcontrollers (Intel 8051, Arduino, ARM).
            Regularly build own servers and computers.
          </p>
        </div>
        )
      }
    ]
  }
]

class Resume extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.name} Resume`}>
        <div>
          {resume.map((section) => {
             return (
               <div key={section.name}>
                 <h3 style={style.h3}>{section.name}</h3>
                 {section.list.map((listItem) => {
                    return (
                      <div key={listItem.name}>
                        <h4 style={style.h4}>{listItem.name}</h4>
                        {listItem.description}
                      </div>
                    )
                  })}
               </div>
             )
           })}
        </div>
      </DocumentTitle>
    )
  }
}

Resume.propTypes = {
  route: React.PropTypes.object
}

export default Resume
