import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Users from './Users';
import Table from './Table';
import Products from './Products';




function App() {
  return (

    <BrowserRouter>
        <div id="wrapper">
          <Sidebar></Sidebar>
           <div id="content-wrapper" class="d-flex flex-column">
              <div id="content">
                <Navbar></Navbar>
                <Routes>
                  <Route path="/Users" element={<Users />}> </Route>
                  <Route path="/Table" element={<Table />}> </Route>
                  <Route path="/Products" element={<Products/>}> </Route>
                  
                 
            </Routes>
           </div>
     </div>
    </div>
    </BrowserRouter>
  );


}

export default App;
