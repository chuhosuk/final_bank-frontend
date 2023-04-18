import { Component } from "react";
import {BrowserRouter,Link,Route, Routes,Outlet} from 'react-router-dom';
import MainComponents from "../contents/MainComponents";
import LoanComponent from "../contents/product/LoanComponent";
import SavingComponent from "../contents/product/SavingComponent";
import DepositComponent from "../contents/product/DepositComponent";
import AccountComponent from "../contents/acSearch/AccountComponent";
import DormantComponent from "../contents/acSearch/DormantComponent";
import AcDepositComponent from "../contents/acSearch/AcDepositComponent";
import InfoComponent from "../contents/customer/InfoComponent";
import WithdrawalComponent from "../contents/customer/WithdrawalComponent";
import ChatComponent from "../contents/csCenter/ChatComponent";
import NoticeComponent from "../contents/csCenter/NoticeComponent";



class RouteComponent extends Component{
    render(){
        return(
            <Routes>
                {/* contents경로에서 컴포넌트 만들면 import 해서 추가하기 */}
                <Route path = "/" exact = {true} Component={MainComponents}/>
                <Route path = "/admin" exact = {true} Component={SavingComponent}/>
                {/* 상품관리 */}
                <Route path = "/product/loan" Component={LoanComponent}>
                    <Route path =":add" Component={'상품등록'}/>
                    <Route path =":list" Component={'상품리스트'}/>
                    <Route path =":apply" Component={'대출신청조회'}/>
                </Route>   
                <Route path = "/product/deposit" Component={DepositComponent}>
                    <Route path =":add" Component={'상품등록'}/>        
                    <Route path =":list" Component={'상품리스트'}/>
                </Route>
                <Route path = "/product/saving" Component={SavingComponent}>
                    <Route path =":add" Component={'상품등록'}/>
                    <Route path =":list" Component={'상품리스트'}/>
                </Route>
                {/* 조회관리 */}
                <Route path = "/acSearch/acAccount" Component={AccountComponent}/>
                <Route path = "/acSearch/acDeposit" Component={AcDepositComponent}/>
                <Route path = "/acSearch/acDormant" Component={DormantComponent}/>
                {/* 고객관리 */}
                <Route path = "/customer/withdrawal" Component={WithdrawalComponent}/>
                <Route path = "/customer/info" Component={InfoComponent}/>
                {/* 고객센터 */}
                <Route path = "/csCenter/notice" Component={NoticeComponent}/>
                <Route path = "/csCenter/chat" Component={ChatComponent}/>
            </Routes>
        )
    }
}
export default RouteComponent;