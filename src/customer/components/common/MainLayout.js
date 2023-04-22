//import MainBtn from "./MainBtn"; <MainBtn />
import MainBoard from "./MainBoard";
import MainCarousels from "./MainCarousels";   
// import MainLink from "./MainLink"; <MainLink />

function MainLayout() {
    return (
        <div>
           <MainCarousels/>    
            <br/> <br/>
            <MainBoard />
            <br/> <br/>
        </div>
    )
}
export default MainLayout;
