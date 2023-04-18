import { Component } from "react";
import Header from "./Header";
import MenuBar from "./Menubar";
import '../../resources/css/Layout.css'
import RouteComponent from "../common/route/RouteComponent";

/*
    현재 Layout안에 Header, Menubar, contents 컴포넌트 포함
    App.js에서는 Layout 호출만 하면 됨 
*/
class Layout extends Component{
    render(){
        return(
            <>
                <Header/>
                <div className="contents">
                    <MenuBar/>
                    <RouteComponent/>
                </div>
            </>
        )
    }
}
export default Layout;
