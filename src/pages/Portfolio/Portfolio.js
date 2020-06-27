import React from 'react'
import Homesteading from '../../Assets/images/Urban Homesteading.png'
import Movie from '../../Assets/images/Movie-Sense.png'
import Quiz from '../../Assets/images/JavaScript-Quiz.png'
import Weather from '../../Assets/images/Weather-Dashboard.png'
import Scheduler from '../../Assets/images/My-Work-Day-Scheduler.png'
import '../../Assets/CSS/reset.css'
import '../../Assets/CSS/style.css'

const Portfolio = () => {
  return (
    <>
      <div className="spacing-div"></div>

      <div className="container">

        <div className="row">

          <div className="col-sm col-6">
            <a href="https://github.com/IsaacVon/Project1-UrbanHomesteading-" target="_blank">
              <div className="titleBg">
                <h5 className="titles">Urban Homesteading</h5>
                <h6 className="subTitles">View Project Code</h6>
              </div>
            </a>
            <a href="https://isaacvon.github.io/Project1-UrbanHomesteading-/" target="_blank">
              <div className="titleBg">
                <img src={Homesteading} alt="Urban Homesteading" className="img-thumbnail thumbnailSize" />
                <h6 className="subTitles">View Live Application
              </h6>
              </div>
            </a>
          </div>

          <div className="col-sm col-1"></div>

          <div className="col-sm col-6">

            <a href="https://github.com/Foxk2p/Project-2" target="_blank">
              <div className="titleBg">
                <h5 className="titles">Movie Blog</h5>
                <h6 className="subTitles">View Project Code</h6>
              </div>
            </a>
            <a href="https://salty-reef-54366.herokuapp.com/" target="_blank">
              <div className="titleBg">
                <img src={Movie} alt="Movie Blog" className="img-thumbnail thumbnailSize" />
                <h6 className="subTitles">View Live Application
              </h6>
              </div>
            </a>
          </div>

        </div>


        <div className="spacing-div"></div>

        <div className="row">

          <div className="col-sm  col-6">
            <a href="https://github.com/Foxk2p/JavaScript-Code-Quiz" target="_blank">
              <div className="titleBg">
                <h5 className="titles">JavaScript Quiz</h5>
                <h6 className="subTitles">View Project Code</h6>
              </div>
            </a>
            <a href="https://foxk2p.github.io/JavaScript-Code-Quiz/" target="_blank">
              <div className="titleBg">
                <img src={Quiz} alt="JavaScript-Quiz" className="img-thumbnail thumbnailSize" />
                <h6 className="subTitles">View Live Application</h6>
              </div>
            </a>
          </div>

          <div className="col-sm col-1"></div>

          <div className="col-sm  col-6">
            <a href="https://github.com/Foxk2p/Weather-Dashboard" target="_blank">
              <div className="titleBg">
                <h5 className="titles">Weather Dashboard</h5>
                <h6 className="subTitles">View Project Code</h6>
              </div>
            </a>
            <a href="https://foxk2p.github.io/Weather-Dashboard/" target="_blank">
              <div className="titleBg">
                <img src={Weather} alt="Weather-Dashboard" className="img-thumbnail thumbnailSize" />
                <h6 className="subTitles">View Live Application</h6>
              </div>
            </a>
          </div>

        </div>

        <div className="spacing-div"></div>

        <div className="row">

          <div className="col-sm col-6">
            <a href="https://github.com/Foxk2p/My-Work-Day-Scheduler" target="_blank">
              <div className="titleBg">
                <h5 className="titles">My Work Day Scheduler
                </h5>
                <h6 className="subTitles">View Project Code
                </h6>
              </div>
            </a>
            <a href="https://foxk2p.github.io/My-Work-Day-Scheduler/" target="_blank">
              <div className="titleBg">
                <img src={Scheduler} alt="My-Work-Day-Scheduler" className="img-thumbnail thumbnailSize" />
                <h6 className="subTitles">View Live Application</h6>
              </div>
            </a>
          </div>

          <div className="col-sm col-1">
          </div>

          <div className="col-sm col-6">
          </div>

        </div>

        <div class="spacing-div"></div>

        <div class="spacing-div"></div>

      </div>


    </>
  )
}

export default Portfolio

{/* style=" width: 400px; height: 300px;" */ }