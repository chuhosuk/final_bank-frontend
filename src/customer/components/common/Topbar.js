import React from 'react';
import {Link} from 'react-router-dom';
import '../../resources/css/style.css';
import '../../resources/vendor/bootstrap/css/bootstrap.min.css';
import '../../resources/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../resources/vendor/boxicons/css/boxicons.min.css'
import '../../resources/vendor/glightbox/css/glightbox.min.css'
import '../../resources/vendor/swiper/swiper-bundle.min.css'

function Topbar () {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <a href = "/admin" className='link'>admin</a>
                </div>
                <div className="social-links d-none d-md-block">
                    <a href="#!" className="link ">Login</a>
                    <a href="#!" className="link">Join</a>
                </div>
            </div>
        </section>
    );
}
export default Topbar;