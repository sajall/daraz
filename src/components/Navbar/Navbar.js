
import './Navbar.css';
import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";  
import { Link } from 'react-router-dom';  

export function Navbar(){
    return (
        <>
  

         <section className="border p-4 mb-4 d-flex align-items-center flex-column bg-#cd3f00" >
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" id='navbar'>
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Navbar brand */}
     <img src="daraz.JPG" alt="" />
       {/* Search form */}
       <div className="input-group ps-5">
          <div
            id="navbar-search-autocomplete"
            className="form-outline"
            data-mdb-input-init=""
          >
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" htmlFor="form1">
              Search
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            data-mdb-ripple-init=""
          >
            <i className="fas fa-search" />
          </button>
        </div> 
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-collapse-init=""
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Login'>
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to='/Signup'>
              Signup
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link
              className="nav-link disabled"
             to="/Signup"
              tabIndex={-1}
              aria-disabled="true"
            >
              Signup
            </Link>
          </li> */}
          {/* Navbar dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-dropdown-init=""
              aria-expanded="false"
            >
              Dropdown
            </a>
            {/* Dropdown menu */}
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
       
        </ul>
        {/* Left links */}
      
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</section>




        {/* </div> */}
     
        </>
    )
}