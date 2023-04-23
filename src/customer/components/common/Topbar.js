import React from 'react';
import {Link} from 'react-router-dom';
import '../../resources/css/style.css';
import '../../resources/vendor/bootstrap/css/bootstrap.min.css';
import '../../resources/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../resources/vendor/boxicons/css/boxicons.min.css'
import '../../resources/vendor/glightbox/css/glightbox.min.css'
import '../../resources/vendor/swiper/swiper-bundle.min.css'
//  <a href = "/admin" className='link'>admin</a>
//  <a href="/customer/login/login" className="link ">Login</a>
//  <a href="/customer/Join/Join" className="link">Join</a>

// a => Link로 변경했어요.
// 현재 header는 문제 없어서 변경하지 않았습니다.
// 문제 발생시 Link로 변경하겠습니다.

function Topbar () {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <Link to="/admin" className="link">admin</Link>
                </div>
                <div className="social-links d-none d-md-block">
                    <Link to="/customer/login/login" className="link">Login</Link>
                    <Link to="/customer/Join/Join" className="link">Join</Link>
                </div>
            </div>
        </section>
    );
}
export default Topbar;