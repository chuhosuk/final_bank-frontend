import Topbar from "./Topbar";
import Header from "./Header"
import RouterComponent from "./route/RouterComponent"
import Footer from "./Footer"
import '../../resources/css/style.css'
import MainLayout from "./MainLayout"; 

function Layout(){
    return(
        <div>
            <Topbar/>
            <Header />
            <MainLayout />
            <RouterComponent />

            <Footer />
        </div>
    )
}
export default Layout;