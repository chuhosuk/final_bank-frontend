import React from "react";
import {Route, Routes} from 'react-router-dom';
// 조회
import All from "../../contents/account/All";
import Account from "../../contents/account/Account";
import Deposit from "../../contents/account/Deposit";
import Saving from "../../contents/account/Saving";
import LoanState from "../../contents/account/LoanState";
import Loan from "../../contents/account/Loan";
import Sleep from "../../contents/account/Sleep";
// 이체
import TransDeposit from "../../contents/transfer/TransDeposit";
import AddAutoTrans from "../../contents/transfer/AddAutoTrans";
import AutoTrans from "../../contents/transfer/AutoTrans";
import TransLimit from "../../contents/transfer/TransLimit";
// 상품
import PdDeposit from "../../contents/product/PdDeposit";
import PdSaving from "../../contents/product/PdSaving";
import PdAccount from "../../contents/product/PdAccount";
import PdLoan from "../../contents/product/PdLoan";
import OpenFund from "../../contents/product/OpenFund";
import PdFundList from "../../contents/product/PdFundList";
import PdFundHaving from "../../contents/product/PdFundHaving";
import PdFundDetail from "../../contents/product/PdFundDetail";
// 환율
import ExchangeRate from "../../contents/exchangerate/ExchangeRate";
import ExchangeRateCal from "../../contents/exchangerate/ExchangeRateCal";
// 고객센터
import CsBoard from "../../contents/cscenter/CsBoard";
import Chatting from "../../contents/cscenter/Chatting";
// 마이페이지
import Mypage from "../../contents/mypage/Mypage";
import Money from "../../contents/mypage/Money";
import Layout from "../Layout";

const AppRouter = () => {
    return(
        <Routes  path="/customer/*" Component={Layout} >
            {/* 조회 */}
            <Route path="/all" Component={All} />
            <Route path="/account" Component={Account} />
            <Route path="/deposit" Component={Deposit} />
            <Route path="/saving" Component={Saving} />
            <Route path="/loan_state" Component={LoanState} />
            <Route path="/loan" Component={Loan} />
            <Route path="/sleep" Component={Sleep} />

            {/* 이체 */}
            <Route path="/trans_deposit" Component={TransDeposit} />
            <Route path="/add_auto_trans" Component={AddAutoTrans} />
            <Route path="/auto_trans" Component={AutoTrans} />
            <Route path="/trans_limit" Component={TransLimit} />

            {/* 상품 */}
            <Route path="/pdDeposit" Component={PdDeposit} />
            <Route path="/pdSaving" Component={PdSaving} />
            <Route path="/pdAccount" Component={PdAccount} />
            <Route path="/pdLoan" Component={PdLoan} />
            <Route path="/open_fund" Component={OpenFund} />
            <Route path="/pdfundList" Component={PdFundList} />
            <Route path="/pdfundHaving" Component={PdFundHaving} />
            <Route path="/pdfundDetail" Component={PdFundDetail} />

            {/* 환율 */}
            <Route path="/exchange" Component={ExchangeRate} />
            <Route path="/exchange_cal" Component={ExchangeRateCal} />

            {/* 고객센터 */}
            <Route path="/cs_board" Component={CsBoard} />
            <Route path="/chatting" Component={Chatting} />

            {/* 마이페이지 */}
            <Route path="/mypage" Component={Mypage} />
            <Route path="/money" Component={Money} />
        </Routes>
    )
}
export default AppRouter;