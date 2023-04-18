import React from 'react';
import '../../resources/css/style.css';

import 'bootstrap';
import '../../resources/vendor/bootstrap/css/bootstrap.min.css';
import '../../resources/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../resources/vendor/glightbox/css/glightbox.min.css'
import '../../resources/vendor/swiper/swiper-bundle.min.css'

// npm i bootstrap@5.2.3
// npm install @mui/material @emotion/react @emotion/stylednpm install react-bootstrap bootstrap
// npm install react-bootstrap bootstrap

function Header () {
    return (
        <>
        <div> {/* className='fixed-top' */}
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="/main">MUSICBANK</a></h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li className="dropdown"><a href="/all"><span>조회</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/all">전체계좌</a></li>
                                    <li><a href="/account">입출금 통장조회</a></li>
                                    <li><a href="/deposit">예금조회</a></li>
                                    <li><a href="/saving">적금조회</a></li>
                                    <li className="dropdown"><a href="#!"><span>대출조회</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/loan_state">대출심사결과조회</a></li>
                                            <li><a href="/loan">대출계좌조회</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/sleep">휴면계좌조회</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/trans_deposit"><span>이체</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/trans_deposit">계좌이체</a></li>
                                    <li className="dropdown"><a href="#!"><span>자동이체</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/add_auto_trans">자동이체등록</a></li>
                                            <li><a href="/auto_trans">자동이체조회</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/trans_limit">이체한도 조회</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="#!"><span>상품</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/pdDeposit">예금</a></li>
                                    <li><a href="/pdSaving">적금</a></li>
                                    <li><a href="/pdAccount">입출금</a></li>
                                    <li><a href="/pdLoan">대출</a></li>
                                    <li className="dropdown"><a href="/pdfundList"><span>펀드</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/open_fund">펀드계좌개설</a></li>
                                            <li><a href="/pdfundList">펀드리스트</a></li>
                                            <li><a href="/pdfundHaving">펀드보유내역</a></li>
                                            <li><a href="/pdfundDetail">펀드거래내역</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/exchange"><span>환율</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/exchange">환율조회</a></li>
                                    <li><a href="/exchange_cal">환율계산기</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/cs_board"><span>고객센터</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/cs_board">공지사항</a></li>
                                    <li><a href="/chatting">채팅상담</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/mypage"><span>마이페이지</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/mypage">내 정보</a></li>
                                    <li><a href="/money">자산관리</a></li>
                                </ul>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
        </>
    );
}
export default Header;