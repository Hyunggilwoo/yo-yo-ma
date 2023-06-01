import { Outlet, Link } from "react-router-dom";
import "./styles.css";

const Layout = () => {
  return (
    <div className="container">
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
          <li className="layouts">
            <Link to="/OpenTickets">Open Tickets</Link>
          </li>
        </ul>
      </nav>

      <div className="page-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
