import NavLogo from '../assets/Logos/Website-Logo.png'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <div>
            <div class="header13 po-relative">
                {/* <!-- Header topbar --> */}
                <div class="container">
                    {/* <!-- Header navbar --> */}
                    <nav class="navbar fixed-top navbar navbar-expand-lg hover-dropdown h13-nav" style={{ backgroundColor: 'rgb(51, 51, 51)' }}>
                        <a class="navbar-brand" href="https://www.tenpluslabs.com/">
                            <img 
                                src={ NavLogo }           
                                width="143px" height="52px"
                                alt="project management companies in nigeria" 
                            />
                        </a>
                        <Link to="https://www.tenpluslabs.com/" class="ml-4 text-white visit-main-website">Visit Main Site</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#header13"
                                aria-controls="header13" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="ti-menu"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="header13">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><Link class="nav-link" to="/">Home</Link></li>
                                <li class="nav-item "><Link class="nav-link" to="/faq">FAQ</Link></li>
                                <li class="nav-item "><Link class="nav-link" to="/contact">Contact Us</Link></li> 
                                <li class="nav-item dropdown dropdown-align ">
                                <a class="nav-link dropdown-toggle" href="#" id="h13-dropdown" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"> Get Started  
                                    <i class="fa fa-angle-down m-l-5 angle-align"></i>
                                </a>
                                <ul class="b-none dropdown-menu animated flipInY">
                                    <li><Link class="dropdown-item" to="/signup">Sign Up</Link></li>
                                    <li><Link class="dropdown-item" to="/login">Login</Link></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- End Header navbar --> */}
                </div>
            </div>
        </div>
    )
}
export default Navbar