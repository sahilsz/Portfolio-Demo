import Sidebar from "../sidebar/Sidebar";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span className="logo">
          Sahil<span className="dot">.</span>
        </span>
        <div className="social">
          <a href="https://github.com/sahilsz" target="_blank" rel="noreferrer">
            <img src="/github.png" title="Github"></img>
          </a>
          <a href="https://twitter.com/sahilszx">
            <img src="/twitter.png" title="Twiter"></img>
          </a>
          <a href="https://sahilsz.github.io" target="_blank" rel="noreferrer">
            <img src="/link.png" title="sahilsz.github.io"></img>
          </a>
          <a
            href="https://linkedin.com/in/sahilsz"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" title="Linkedin"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
