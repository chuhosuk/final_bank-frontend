// 계좌이체
import React from "react";
import transDeposit from '../../../../customer/resources/img/transDeposit.png';

function TransDeposit () {
    return (
        <div className="container">
            <img src={transDeposit} alt="face" />
            <br />
            SELECT * <br />
          FROM transfer_tbl<br />
         WHERE t_num = 1; --이체 결과 조회 1건
            <br />
            <br />
        </div>
    )
}
export default TransDeposit;