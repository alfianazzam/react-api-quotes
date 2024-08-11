import { NavLink } from "react-router-dom";

function NavBar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={props.logo} alt="React Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                    to="/" 
                    end
                  >
                    Landing Page
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                    to="/Homepage"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} 
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default NavBar;
