import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="row" id="footer">
        <div className="col">
          <div className="content-footer">
            <footer>
              <ul className="social">
                <li><a href="http://www.github.com/Foxk2p" target="_blank">My Github</a></li>
              </ul>
            </footer>
          </div>
        </div>
        <div className="col">
          <div className="content-footer">
            <footer>
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/kele-palafox-1ba10b181/" target="_blank">My Linkedin</a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer