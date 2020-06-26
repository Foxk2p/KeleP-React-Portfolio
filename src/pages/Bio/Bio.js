import React from 'react'

const Bio = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(52, 30, 123);">
        <a className="navbar-brand" href="/">Kele's</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Bio<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <header className='masthead'>
        <p className='masthead-intro'>Hi I'm</p>
        <h1 className='masthead-heading'>Kele</h1>
      </header>

      <div className="spacing-div-sm"></div>

      <div className="container">
        <div className="row">
          <div className="col center">
            <img
              src="./Assets/images/kpBioPic2.png"
              alt="Kele P Image" className="bio-picture" style={{ width: "265px;" height: "250px;" }} />
          </div>
        </div>
      </div>

      <div className="spacing-div-sm"></div>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h2 className="titles">Introduction</h2>
            <p>My name is Kele Palafox and I am currently enrolled in The Coding Boot Camp at UCI Continuing Education.</p>
            <h2>Where I'm From</h2>
            <p>For most of my life I have lived on the island of Oahu, Hawaii.</p>
            <h2>What are your favorite hobbies?</h2>
            <p>In my free time I enjoy making music and relaxing outdoors.</p>
            <h2>What's your dream job?</h2>
            <p>It would be a dream come true to be a prominent freelance digital artist. </p>
            <h2>Where do you live?</h2>
            <p>I currently live in Huntington Beach, California.</p>
            <h2>Why do you want to be a web developer?</h2>
            <p>I believe that gaining the skills and experience of web development can provide an opportunity to bring
            crative
          projects and solutions into an exciting, fast-paced, and continuously changing digital world.</p>
          </div>
          <div className="col-sm-4">
            <h2 className="titles">My Story</h2>
            <p>While I currently reside in Huntington Beach, California, I am originaly from the island of Oahu, Hawaii.
            During my time in the islands, I attended a small private shcool called Maryknoll. Maryknoll Schools has a
            prominent Catholic history and tradition which instilled a foundation of service, community, and gratitude
            that I carry with me today.
            After my time there, I was presented with the oportunity to attend the University of Hawaii at Manoa. While
            working towards a bachelors degree with a music focus I joined the diverse and eclectic campus community. This
            experience not only reaffirmed my passion for the accademic interests I naturaly had but also broadened by
            perspective to include many more professional possibilites. One of these new found possibilites was web
            develpment.
          <br />Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quisquam sunt qui ipsam odit nesciunt adipisci iure veniam
                aliquam quas sit corporis nisi labore quos, nemo fuga iusto? Pariatur, incidunt quas.Lorem ipsum dolor sit,
                amet
                consectetur adipisicing elit. Quisquam sunt qui ipsam odit nesciunt adipisci iure veniam
                aliquam quas sit corporis nisi labore quos, nemo fuga iusto? Pariatur, incidunt quas.Lorem ipsum dolor sit,
                amet
                consectetur adipisicing elit. Quisquam sunt qui ipsam odit nesciunt adipisci iure veniam
          aliquam quas sit corporis nisi labore quos, nemo fuga iusto? Pariatur, incidunt quas.</p>
          </div>
        </div>
        <div className="row">
          <div className="center">
            <a href="./contact.html">
              <button>Contact Me</button>
            </a>
            <a href="./portfolio.html">
              <button>View my portfolio</button>
            </a>
          </div>
        </div>
      </div>


      <div className="spacing-div-sm"></div>

      <div className="row">
        <div className="col">
          <div className="content-footer">
            <footer id="footer">
              <ul className="social">
                <li><a href="http://www.github.com/Foxk2p">My Github</a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio
