import { Outlet, Link } from "react-router-dom";
import './styles.css';

const Layout = () => {
  return (
    <form className="styled">
      <nav>
        <ul>
          <li className="layouts">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </form>
  )
};

export default Layout;