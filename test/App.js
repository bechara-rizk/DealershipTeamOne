
import './App.css';
import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebars";
//import Navbar from "./components/Navbar";
// import Employees from "./components/Employees.js";
// import Customers from "./components/Customers.js";
// import Orders from "./components/Orders.js";
// import Kanban from "./components/Kanban.js";
// import Charts from "./components/Charts.js";
// import Home from "./components/Home.js";

function App() {
  return (
    <div className="main">

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="nav">
        <div className="navbar">
           {/* <Navbar />  */}
        </div>
        
        <div>
          
          <h3>display text here </h3><h3>when clicking on an icon in the sidebar..</h3>
          {/* <Routes> */}

            {/* <Route path='/' exact element={(<Home />)} />
            <Route path='/employees' element={(<Employees />)} />
            <Route path='/customers'  element={(<Customers />)} />
            <Route path='/kanban'  element={(<Kanban />)} />
            <Route path='/orders'  element={(<Orders />)} />
            <Route path='/charts'  element={(<Charts />)} /> */}

          {/* </Routes> */}

        </div>
      </div>

    </div>
  );
}

export default App;