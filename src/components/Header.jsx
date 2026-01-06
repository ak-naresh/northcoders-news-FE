import { Link } from "react-router-dom";
import TopicsDropdown from "./TopicsDropdown";
import logo from "../assets/NC News Logo.png";

function Header() {
  return (
    <header className="headerContainer">
      <Link to="/">
        <img src={logo} alt="NC News Logo" />
      </Link>
      <nav>
        <TopicsDropdown />
      </nav>
    </header>
  );
}

export default Header;
