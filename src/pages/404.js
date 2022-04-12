import React from "react"
import { Link } from "gatsby"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h2>not the page you are looking for?</h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
