import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Mix It Up</h2>
        <p className="contact-subtitle">
          Have a project, event, or just want to chat? Drop a line.
        </p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="YOUR NAME" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="YOUR EMAIL" required />
          </div>
          <div className="form-group">
            <textarea placeholder="YOUR MESSAGE" rows="4" required />
          </div>

          <button type="submit" className="submit-btn">
            {" "}
            SEND MESSAGE
          </button>
        </form>
      </div>

      <footer className="mini_footer">
        <p>&copy; 2026 MODMIX. ALL RIGHTS RESERVED</p>
      </footer>
    </div>
  );
};

export default Contact;
