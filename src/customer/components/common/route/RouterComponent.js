import React from "react";
import {Route, Routes} from 'react-router-dom'; // BrowserRouter
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
// 로그인
import Login from "../../common/login/Login";
// 회원가입
import Join from "../../common/join/Join";

const AppRouter = () => {
    return(
        <Routes  path="/customer/*" Component={Layout} >
            {/* 조회 */}
            <Route path="/account/all" Component={All} />
            <Route path="/account/account" Component={Account} />
            <Route path="/account/deposit" Component={Deposit} />
            <Route path="/account/saving" Component={Saving} />
            <Route path="/account/loan_state" Component={LoanState} />
            <Route path="/account/loan" Component={Loan} />
            <Route path="/account/sleep" Component={Sleep} />

            {/* 이체 */}
            <Route path="/transfer/trans_deposit" Component={TransDeposit} />
            <Route path="/transfer/add_auto_trans" Component={AddAutoTrans} />
            <Route path="/transfer/auto_trans" Component={AutoTrans} />
            <Route path="/transfer/trans_limit" Component={TransLimit} />

            {/* 상품 */}
            <Route path="/product/pdDeposit" Component={PdDeposit} />
            <Route path="/product/pdSaving" Component={PdSaving} />
            <Route path="/product/pdAccount" Component={PdAccount} />
            <Route path="/product/pdLoan" Component={PdLoan} />
            <Route path="/product/open_fund" Component={OpenFund} />
            <Route path="/product/pdfundList" Component={PdFundList} />
            <Route path="/product/pdfundHaving" Component={PdFundHaving} />
            <Route path="/product/pdfundDetail" Component={PdFundDetail} />

            {/* 환율 */}
            <Route path="/exchangerate/exchange" Component={ExchangeRate} />
            <Route path="/exchangerate/exchange_cal" Component={ExchangeRateCal} />

            {/* 고객센터 */}
            <Route path="/cscenter/cs_board" Component={CsBoard} />
            <Route path="/cscenter/chatting" Component={Chatting} />

            {/* 마이페이지 */}
            <Route path="/mypage/mypage" Component={Mypage} />
            <Route path="/mypage/money" Component={Money} />

            {/* 로그인 / 회원가입 */}
            <Route path="/login/login" Component={Login} />
            <Route path="/join/join" Component={Join} />

        </Routes>
    )
}
export default AppRouter;