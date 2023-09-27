import "./navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span className="logo">Sahil</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png"></img>
          </a>
          <a href="#">
            <img src="/instagram.png"></img>
          </a>
          <a href="#">
            <img src="/youtube.png"></img>
          </a>
          <a href="#">
            <img src="/dribbble.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
