import "./collaboration.scss";
import Header from "./header";

function CollaborationPage() {
  function submit() {
    console.log("contact form submit disabled in demo");
    alert("now sending email to Lee!");
  }

  return (
    <>
      <Header />
      <div className="collaboration-page">
        <div className="collaboration-container">
          <div className="contact-info">
            {/* <h2>Conect With Me</h2> */}
            <p>
              Ready to collaborate? I'm excited to hear about your ideas and
              explore how we can work together to create something amazing.
            </p>
            <div className="contact-methods">
              <p>
                <span className="icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span>
                Email:{" "}
                <a href="mailto:leecooper6239@gmail.com">
                  leecooper6239@gmail.com
                </a>
              </p>
              <p>
                <span className="icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <path
                      fill="#fff"
                      d="M14.5 17h-2.1v-4.1c0-.9-.3-1.5-1.1-1.5-.6 0-1 .4-1.2.8-.1.2-.1.5-.1.8V17H8v-7h2v1c.3-.5.9-1.2 2.1-1.2 1.5 0 2.4 1 2.4 2.9V17zm-7.3-8.2c-.7 0-1.2-.5-1.2-1.1 0-.6.5-1.1 1.2-1.1s1.2.5 1.2 1.1c0 .6-.5 1.1-1.2 1.1z"
                    />
                  </svg>
                </span>
                LinkedIn:
                <a href="https://www.linkedin.com/in/lee-cooper-103075273/">
                  {" "}
                  leecooper229
                </a>
              </p>
              <p>
                <span className="icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6l-.1-2c-3.4.7-4.1-1.4-4.1-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7-1.7.7-1.7-.9-.6-1.3-1.2-1.3-2.1 0-2.9 1.8-3.6 3.5-3.8-.4-.4-.5-1-.5-1.6 0-1.2.1-2.1.1-2.4 0-.3-.2-.6-.8-.5A12 12 0 0112 .5" />
                  </svg>
                </span>
                GitHub:{" "}
                <a href="https://github.com/leecooper29">leecooper229</a>
              </p>
              <p>
                <span className="icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                Location: Stamford, CT (Open to remote)
              </p>
              <p>
                <span className="icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                Availability: Weekdays 9am–6pm ET
              </p>
              <p>
                <span className="icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2H2v20l4-4h16z" />
                  </svg>
                </span>
                Typical response time: within 24 hours
              </p>
              <p>
                <span className="icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92V21a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 4.18 2 2 0 014 2h4.09a2 2 0 012 1.72c.09.66.23 1.3.42 1.92a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.16-2a2 2 0 012.11-.45c.62.19 1.26.33 1.92.42A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                Phone: (optional) available upon request
              </p>
            </div>
          </div>
          <div className="form-container">
            <form className="contact-form" method="POST">
              <h4>Contact Me</h4>
              <div className="form-item">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="form-item">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
              <div className="form-item">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <button className="ctt" type="button" onClick={submit}>
                Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollaborationPage;
