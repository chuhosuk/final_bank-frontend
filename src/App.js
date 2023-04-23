import { BrowserRouter, Route,Routes,Link } from "react-router-dom";
import LayoutC from "./customer/components/common/Layout";
import LayoutA from "./admin/components/common/Layout";
import ProductApplication from "./customer/components/contents/product/product-application/ProductApplication";
import SavingApplication from "./customer/components/contents/product/product-application/SavingApplication";
import DepositApplication from "./customer/components/contents/product/product-application/DepositApplication";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" Component={LayoutA} />
          <Route path="/customer/*" Component={LayoutC} />
        </Routes>
          <Link to ="/admin/*">관리자</Link>
          <Link to ="/customer/*">고객</Link>
      </BrowserRouter>
    </div>
  );
}
export default App;
