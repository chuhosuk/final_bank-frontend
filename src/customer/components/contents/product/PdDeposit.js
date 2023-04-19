// 예금 상품
import React from "react";
import pd_deposit from '../../../../customer/resources/img/3-1.png';

function PdDeposit () {
    return (
        <div className="container">
             <img src={pd_deposit} alt="" /><br/>
             SELECT * FROM  deposit_product; -- 예금 상품 리스트
        </div>
    )
}
export default PdDeposit;