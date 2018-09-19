import React from "react"
import ReactDOM from "react-dom"
import ReactGA from "react-ga"

import Resume from "./Resume"
import registerServiceWorker from "./registerServiceWorker"

const GA_CODE = "UA-18750328-2"

ReactDOM.render(<Resume />, document.getElementById("root"))
registerServiceWorker()

ReactGA.initialize(GA_CODE)
ReactGA.ga("send", "pageview", {
  location: window.location.pathname,
  title: window.document.title,
  page: window.location.pathname
})
