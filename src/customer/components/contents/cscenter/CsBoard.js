// 공지사항
import React from "react";
import faq from '../../../../customer/resources/img/faq.png';

function CsBoard () {
    return (
        <div className="container">
            <img src={faq} alt="face" />
            <br/>
            SELECT * FROM notice_tbl WHERE n_show='y' ORDER BY n_num DESC; --공지사항 리스트 전체
            <br/>
            <br/>
        </div>
    )
}
export default CsBoard;