import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"

const About = ({ data }) => {
  const {
    strapiAbout: { title, aboutImage, info, stack },
  } = data
  console.log(aboutImage)
  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img
            // rendering SVG image through publicURL
            src={aboutImage[0].localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      info
      title
      stack {
        id
        title
      }
      aboutImage {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
