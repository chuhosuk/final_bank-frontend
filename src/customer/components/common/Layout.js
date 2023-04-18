import Topbar from "./Topbar";
import Header from "./Header"
//import MainCarousels from '../src/component/common/MainCarousels';
import RouterComponent from "./route/RouterComponent"
import Footer from "./Footer"
import '../../resources/css/style.css'
import MainCarousels from "./MainCarousels";
// <MainCarousels />

function Layout(){
    return(
        <div>
            <Topbar/>
            <Header />
            <MainCarousels/>
            <RouterComponent />
            <Footer />
        </div>
    )
}
export default Layout;