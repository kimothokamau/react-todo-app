import React from "react"
import { useRouteMatch } from "react-router-dom"


const About = (props) => {
  console.log(useRouteMatch())
  return <div>hello from about page</div>
}
export default About