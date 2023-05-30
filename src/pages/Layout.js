import { Outlet, Link } from "react-router-dom";
import "./styles.css";

const Layout = () => {
  return (
    <form className="styled">
      <nav>
        <ul className="styledUL">
          <li className="layouts">
            <Link to="/">Home</Link>
          </li>
          <li className="layouts">
            <Link to="/Invoice">Invoice</Link>
          </li>
          <li className="layouts">
            <Link to="/Services">ShopServices</Link>
          </li>
          <li className="layouts">
            <Link to="/CustomerLookup">Customer Lookup</Link>
          </li>
          <li className="layouts">
            <Link to="/IntakeForm">Intake Form</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </form>
  );
};

export default Layout;
