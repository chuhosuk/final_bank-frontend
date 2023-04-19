// 적금 상품
import React from "react";
import saving from '../../../../customer/resources/img/3-2.png';


function PdSaving () {
    return (
       <div className="container">
            <img src={saving} alt="" />
            SELECT * FROM  savings_product; 
       </div>
    )
}
export default PdSaving;