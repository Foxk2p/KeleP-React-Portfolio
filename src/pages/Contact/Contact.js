import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <p className="titles">Contact Me
          </p>
        </div>
      </div>

      <div className="spacing-div"></div>


      <div className="container">
        <div className="row">
          <div className="col-sm ">
            <h2 className="titles titleBg ">
              Contact me by email:
            </h2>
            <p className="marginLeft">
              foxk2p@gmail.com
            </p>
          </div>

          <div className="col-sm center">
            <h2 className="titles titleBg ">
              Contact me by phone:
            </h2>
            <p>
              (808) 398-5798
            </p>
          </div>
        </div>

        <div className="spacing-div-xl"></div>

        <div className="row">
          {/* <div className="col center">
            <a href="./index.html">
              <button>Back to Bio</button>
            </a>
          </div> */}
        </div>


        <div className="spacing-div-sm"></div>
        <div className="spacing-div-sm"></div>
        <div className="spacing-div-sm"></div>
       
      </div>
    </>
  )
}

export default Contact
