import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { rhythm } from 'utils/typography'

const style = {
  p: {
    marginTop: rhythm(0.25),
    marginBottom: rhythm(0.25),
    // fontSize: '17.5px',
    lineHeight: '22px'
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
    backgroundColor: 'gray'
  },
  resumeItemWrapper: {
    marginTop: rhythm(.5),
    marginBottom: rhythm(.5)
  },
  headerItemSmall: {
    fontSize: '15px',
    lineHeight: '19px'
  },
  title: {
    fontSize: '15px',
    lineHeight: '19px',
    fontWeight: 'bold'
  },
  ul: {
    marginBottom: rhythm(.5)
  },
  li: {
    lineHeight: '22px',
    marginBottom: rhythm(.5)
  },
  left: {
    display: 'inline-block',
    width: '55%'
  },
  middle: {
    display: 'inline-block',
    width: '25%',
    textAlign: 'center'
  },
  right: {
    display: 'inline-block',
    width: '20%',
    textAlign: 'right'
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
        <div style={style.resumeItemWrapper}>
          <p style={style.p}>
            Responsible for leading development of two highly leveraged products for our enterprise users:
          </p>
          <ul style={style.ul}>
            <li style={style.li}>
              The Airware Cloud Frontend implements all workflows and UI for job creation, data processing and analysis of the imagery, data products and geospatial data that
              our cloud has to handle for our customers
            </li>
            <li style={style.li}>
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
        <div style={style.resumeItemWrapper}>
          <p style={style.p}>
            Fourth employee of a Japanese industrial robotics startup. Created the web interface for a large-scale industrial robotics platform used by clients such as Canon,
            Honda, and a half-dozen other Japanese companies.
          </p>
          <ul style={style.ul}>
            <li style={style.li}>
              Conceptualized and implemented workflows for users to program and optimize industrial robots
            </li>
            <li style={style.li}>
              Wrote complex frontend code, including all customer facing UI, a real-time environment state streamer, a scenegraph-based WebGL viewer and more
            </li>
            <li style={style.li}>
              Created infrastructure tools to rapidly develop / build / deploy a large scale Backbone app
            </li>
            <li style={style.li}>
              Designed, developed and supported major features on an extremely tight schedule with a small team
            </li>
            <li style={style.li}>
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
        <div style={style.resumeItemWrapper}>
          <p style={style.p}>
            Designed, constructed and programmed an experimental X-ray optic production facility.
          </p>
          <ul style={style.ul}>
            <li style={style.li}>
              Wrote software to simplify fabrication of X-ray optics in multiple production scenarios
            </li>
            <li style={style.li}>
              Designed sample manipulation hardware and high strength vacuum chamber mount using CAD
            </li>
            <li style={style.li}>
              Saved time and lowered costs by developing more efficient shutter controller used on all chambers
            </li>
            <li style={style.li}>
              Worked closely with physicists, component vendors, machinists, etc. to fulfill requirements
            </li>
            <li style={style.li}>
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
        <div style={style.resumeItemWrapper}>
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
        <div style={style.resumeItemWrapper}>
          <ul style={style.ul}>
            <li style={style.li}>
              Led a team of students to design a simulator for an intra-wing robot to operate inside an aircraft
            </li>
            <li style={style.li}>
              Worked with Boeing to fulfill requirements for assembly and maintenance roles of operation
            </li>
            <li style={style.li}>
              Implemented robot client / server to distribute computation effectively and allow collaborative robot use
            </li>
            <li style={style.li}>
              Created joystick controls and 3D interface to enable easy user / robot interaction
            </li>
            <li style={style.li}>
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
        <div style={style.resumeItemWrapper}>
          <ul style={style.ul}>
            <li style={style.li}>
              Designed and implemented web crawler / scraper to analyze financial news sources and gauge market sentiment
            </li>
            <li style={style.li}>
              Assisted in implementation / training of classifier using Python Natural Language Toolkit
            </li>
            <li style={style.li}>
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
        <div style={style.resumeItemWrapper}>
          <p style={style.p}>
            Javascript, Python, C++, MATLAB, LabVIEW. Seasoned Linux user. Familiar with industry standard development tools, e.g. version control and design patterns.
          </p>
          <p style={style.p}>
            Concerned with best practices (DRY, etc.). Effective technical writing and documentation skills.
          </p>
        </div>
        )
      }, {
        name: 'Web Technologies',
        description: (
        <div style={style.resumeItemWrapper}>
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
        <div style={style.resumeItemWrapper}>
          <p style={style.p}>
            Experience with Solidworks. Virtually designed and/or simulated multiple FIRST robots, a Battlebot and vacuum chambers at Harvard-Smithsonian Center for Astrophysics.
          </p>
        </div>
        )

      }, {
        name: 'Embedded Control',
        description: (
        <div style={style.resumeItemWrapper}>
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
                 <hr style={style.hr} />
                 {section.list.map((listItem) => {
                    return (
                      <div key={listItem.name}>
                        <div>
                          <div style={style.left}>
                            <h4 style={style.h4}>{listItem.name}</h4>
                          </div>
                          <div style={style.middle}>
                            <div style={style.headerItemSmall}>
                              {listItem.where}
                            </div>
                          </div>
                          <div style={style.right}>
                            <div style={style.headerItemSmall}>
                              {listItem.start}
                              {listItem.end ? ' - ' + listItem.end : null}
                            </div>
                          </div>
                        </div>
                        {listItem.title
                           ? <div style={style.title}>
                               {listItem.title}
                             </div>
                           : null}
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
