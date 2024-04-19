import React from 'react'
import '../Speaktous/speaktous.css'
const speaktous = () => {
  return (
    <>
        <section className="ai-speakus-section ">
        <div className="ai-support-all">
          <div className="ai-main-speaktous container">
            <p className="text-center divider-stu">Speak to us</p>
            <div className="container ai-container-speaktous">
              <div className="left-div-speaktous">
                <p className="left-head-para-speaktous">OR EMAIL US NOW!</p>
                <h2 className="left-head-text-speaktous">info@Direccion.com</h2>
                <p className="left-head-subtext-speaktous">
                  With our collaboration model, bring agility and effectiveness
                  to your project delivery timelines.
                </p>
                <button className="ai-button">Speak to us</button>
              </div>
              <div className="right-div-speaktous">
                <p className="form-speaktous-text">DISCUSS YOUR REQUIREMENTS</p>
                <h2 className="form-speaktous-head">
                  Solving problems is our passion...
                </h2>
                <div className="form-div-ai">
                  <form>
                    <div className="form-group-stu">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group-stu">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-horizontal">
                      <div className="form-group-stu">
                        <label htmlFor="purpose">Purpose:</label>
                        <input
                          type="text"
                          className="horizontal-input"
                          id="purpose"
                          name="purpose"
                        />
                      </div>
                      <div className="form-group-stu">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                          type="tel"
                          className="horizontal-input"
                          id="phoneNumber"
                          name="phoneNumber"
                        />
                      </div>
                    </div>
                    <div className="form-group-stu">
                      <label htmlFor="message">Message:</label>
                      <textarea id="message" name="message" />
                    </div>
                    <button className="ai-button-stu" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1713423034">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
    </>
  )
}

export default speaktous