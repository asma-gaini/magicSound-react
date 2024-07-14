import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="headerMain">
      <div className="leftHeader">
        <img className="HeaderLogo" src="../../image/logo.webp" />
        <span className="headerTitle">Magic Sound</span>
      </div>
      <div className="rightHeader">
        <Link className="headerBtn" to="/login">
          <span>👤</span>
          Login
        </Link>
        <Link className="headerBtn" to="/aboutUs">
          about Us
        </Link>
      </div>
    </div>
  );
}

export default Header;
