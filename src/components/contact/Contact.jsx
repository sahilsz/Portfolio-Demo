import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let&apos;s work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>me@sahils.in</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>India</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+91 100</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
