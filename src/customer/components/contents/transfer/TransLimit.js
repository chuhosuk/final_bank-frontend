// 이체한도 조회
import React from "react";
import translimit from '../../../../customer/resources/img/2-4.png';

function TransLimit () {
    return (
        <div className="contianer">
            <img src={translimit} alt=""/>
            <br/>
            SELECT trsfLimit FROM account_tbl WHERE id='hong1234'; -- 이체 한도 조회
            <br/>
            <br/>
        </div>
    )
}
export default TransLimit;