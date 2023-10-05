import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
export default function Header(){
    const {isLoggedIn, email,token} = useSelector((store)=>store.user);
    return <>
      <header className="header_section">
      <div className="header_top">
        <div className="container">
          <div className="contact_nav">
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" alt=""/>
            </a>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                {isLoggedIn ? <ul className="navbar-nav  ">
                 <li className="nav-item active">
                    <a className="nav-link" href="index.html">ADD RECEPTIONIST <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html"> RECEPTION LIST</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="treatment.html">APPOINTMENT LIST</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="doctor.html">PROFILE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="testimonial.html">Logout</a>
                  </li>
                 </ul> : <ul className="navbar-nav">
                 <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html"> About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="treatment.html">Treatment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="doctor.html">Doctors</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="testimonial.html">Testimonial</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>}
                
              </div>
              <div className="quote_btn-container">
                {!isLoggedIn ? <><Link to="/sign-in">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign in
                  </span>
                </Link>
                <Link to="/sign-up">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Sign Up
                  </span>
                </Link></>:""}
                
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
}