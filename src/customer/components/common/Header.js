import React from 'react';
import '../../resources/css/style.css';

import 'bootstrap';
import '../../resources/vendor/bootstrap/css/bootstrap.min.css';
import '../../resources/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../resources/vendor/glightbox/css/glightbox.min.css'
import '../../resources/vendor/swiper/swiper-bundle.min.css'
import { Link } from 'react-router-dom';

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
                            <li className="dropdown"><a href="/customer/account/all"><span>조회</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/customer/account/all">전체계좌</a></li>
                                    <li><a href="/customer/account/account">입출금 통장조회</a></li>
                                    <li><a href="/customer/account/deposit">예금조회</a></li>
                                    <li><a href="/customer/account/saving">적금조회</a></li>
                                    <li className="dropdown"><a href="#!"><span>대출조회</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/customer/account/loan_state">대출심사결과조회</a></li>
                                            <li><a href="/customer/account/loan">대출계좌조회</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/customer/account/sleep">휴면계좌조회</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/customer/trans_deposit"><span>이체</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/customer/transfer/trans_deposit">계좌이체</a></li>
                                    <li className="dropdown"><a href="/customer/transfer/auto_trans!"><span>자동이체</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/customer/transfer/add_auto_trans">자동이체등록</a></li>
                                            <li><a href="/customer/transfer/auto_trans">자동이체조회</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/customer/transfer/trans_limit">이체한도 조회</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="#!"><span>상품</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><Link to ="/customer/product/pdDeposit">예금</Link></li>
                                    <li><a href="/customer/product/pdSaving">적금</a></li>
                                    <li><a href="/customer/product/pdAccount">입출금</a></li>
                                    <li><a href="/customer/product/pdLoan">대출</a></li>
                                    <li className="dropdown"><a href="/customer/product/pdfundList"><span>펀드</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="/customer/product/open_fund">펀드계좌개설</a></li>
                                            <li><a href="/customer/product/pdfundList">펀드리스트</a></li>
                                            <li><a href="/customer/product/pdfundHaving">펀드보유내역</a></li>
                                            <li><a href="/customer/product/pdfundDetail">펀드거래내역</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/customer/exchangerate/exchange"><span>환율</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/customer/exchangerate/exchange">환율조회</a></li>
                                    <li><a href="/customer/exchangerate/exchange_cal">환율계산기</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/cs_board"><span>고객센터</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/customer/cscenter/cs_board">공지사항</a></li>
                                    <li><a href="/customer/cscenter/chatting">채팅상담</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="/customer/mypage/mypage"><span>마이페이지</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="/customer/mypage/mypage">내 정보</a></li>
                                    <li><a href="/customer/mypage/money">자산관리</a></li>
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