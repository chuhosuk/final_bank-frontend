// 대출 상품
import React from "react";
import pd_fudHaving from  '../../../../customer/resources/img/pdloan.png';
import PdLoanDetail from './PdLoanDetail';

function PdLoan () {
    return (
       <div className="container">
              <img src={pd_fudHaving} alt="" /><br />
             SELECT * FROM loan_product;
             <PdLoanDetail />
             <br />
             <br />
             <br />
        </div>
    )
}
export default PdLoan;