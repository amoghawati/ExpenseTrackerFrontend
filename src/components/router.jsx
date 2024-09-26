import { Route, Routes } from "react-router-dom";
import Protect from "./Protect";
import HOME from "./home";
import Navbar from "./navbar";
import AddTransaction from "./addTransaction";
import ExpenseList from "./expenseList";

const Router = () => {
  const r={
    width:"100vw"
  }
    return ( 
        <div style={{r}} className="Router d-flex ">
          <Navbar/>
          <Routes>
          
            <Route path="/home" element={<Protect child={<HOME/>}  />} />

            <Route path="/add-transaction" element={<Protect child={<AddTransaction/>}  />} />

            <Route path="/expense-list" element={<Protect child={<ExpenseList/>}  />} />

          </Routes>
        </div>
     );
}
 
export default Router;