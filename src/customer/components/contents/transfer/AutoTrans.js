// 자동이체 조회
import React from "react";
import autoTrans from '../../../../customer/resources/img/2-3.png';

function AutoTrans () {
    return (
        <div className="container">
            <img src={autoTrans} alt="" />
            <br />
            SELECT at.at_num, a.acNumber, a.a_depositNum, a.a_depositBank, a.a_depositAmount, at.at_date, at.at_result <br />
            FROM auto_transfer_tbl at, auto_transferReg_tbl a, account_tbl ac<br />
            WHERE at.a_num = a.a_num<br />
            AND a.acNumber = ac.acNumber<br />
            AND ac.id = 'hong1234'; --자동이체 등록내역<br />
            <br />
            <br />
        </div>
    )
}
export default AutoTrans;