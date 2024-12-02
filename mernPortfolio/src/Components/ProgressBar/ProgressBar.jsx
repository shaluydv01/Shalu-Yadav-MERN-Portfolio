import React from 'react'
import './ProgressBar.css'

const ProgressBar = () => {

  return (
    <>
      <div className="progress-container">
        <div className="progress_title center">
          <h1>Programming Languages</h1>
        </div>

        <div className="progress-items">
          <div className="progress-item">
            <div className="progress-info">
              <p>HTML</p>
              <p>90%</p>
            </div>
            <div className="progress-line" data-percent="90%">
              <span style={{width: "90%"}}></span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-info">
              <p>CSS</p>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{width: "80%"}}></span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-info">
              <p>JavaScript</p>
              <p>70%</p>
            </div>
            <div className="progress-line" data-percent="70%">
              <span style={{width: "70%"}}></span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-info">
              <p>Reactjs</p>
              <p>75%</p>
            </div>
            <div className="progress-line" data-percent="75%">
              <span style={{width: "75%"}}></span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-info">
              <p>Nodejs</p>
              <p>70%</p>
            </div>
            <div className="progress-line" data-percent="70%">
              <span style={{width: "70%"}}></span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-info">
              <p>Python</p>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{width: "80%"}}></span>
            </div>
          </div>

          <div className="progress-item">
            <div className="progress-info">
              <p>C Programming</p>
              <p>80%</p>
            </div>
            <div className="progress-line" data-percent="80%">
              <span style={{width: "80%"}}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgressBar