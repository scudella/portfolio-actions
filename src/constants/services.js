import React from "react"
import { FaCode } from "react-icons/fa"
import { SiWebrtc } from "react-icons/si"
import { DiNodejsSmall, DiAsterisk } from "react-icons/di"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Web development with html, css, and javascript. Reactjs and gatsbyjs front-end applications with CMS content.`,
  },
  {
    id: 2,
    icon: <SiWebrtc className="service-icon" />,
    title: "WebRTC Applications",
    text: `WebRTC applications with front-end and backend development  .`,
  },
  {
    id: 3,
    icon: <DiNodejsSmall className="service-icon" />,
    title: "Back-end development",
    text: `Back-end development with Nodejs, Expressjs, MongoDB, and Mongoose.`,
  },
  {
    id: 4,
    icon: <DiAsterisk className="service-icon" />,
    title: "VoIP",
    text: `Real Time Communication Platform Development with Asterisk, Kamailio, XMPP server, and Presence with XCAP.`,
  },
]

export default services
