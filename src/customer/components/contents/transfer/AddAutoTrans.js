// 자동이체등록
import React from "react";
import addTrans from '../../../../customer/resources/img/2-2.png';


function AddAutoTrans () {
    return (
        <div className="container">
            <img src={addTrans} alt="face" />
            SELECT a_num, acNumber, a_depositNum, a_depositBank, a_depositAmount, a_transferCycle, a_startDate, a_regDate, a_state<br />
            FROM auto_transferReg_tbl; --자동이체 등록/신청 정보
            <br/>
            <br/>
        </div>
    )
}
export default AddAutoTrans;