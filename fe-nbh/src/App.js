// import logo from "./logo.svg";
// import "./App.css";
// import Landing from "./pages/Landing.js";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <Landing />
//       </header>
//     </div>
//   );
// }

// export default App;

// import 'assets/scss/style.scss'
import Landing from "./pages/Landing.js";
// import LoginPage from 'pages/LoginPage';
// import Dashboard from 'pages/Dashboard';
// import Dashboard_Ticket from 'pages/Dashboard_Ticket';
// import Dashboard_Sales from 'pages/Dashboard_Sales';
// import Generate from 'pages/Generate';
// import ClickPage from 'pages/ClickPage';
// import FormLogin from 'parts/FormLogin';
// import TestCode from 'parts/TestCode';
// import EditPrice from 'parts/EditPrice';
// import EditVoucher from 'parts/EditVoucher';
// import Booking from 'parts/Booking';

import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
// import { ProtectedRoute } from 'ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/LoginPage" component={LoginPage}></Route> */}
        <Route exact path="/LandingPage" component={Landing}></Route>
        {/* <ProtectedRoute path="/Dashboard" component={Dashboard}/>
        <Route exact path="/Generate" component={Generate}></Route>
        <Route exact path="/ClickPage" component={ClickPage}></Route>
        <Route exact path="/Dashboard_Ticket" component={Dashboard_Ticket}></Route>
        <Route exact path="/Dashboard_Sales" component={Dashboard_Sales}></Route>
        <Route exact path="/TestCode" component={TestCode}></Route>
        <Route exact path="/EditPrice" component={EditPrice}></Route>
        <Route exact path="/EditVoucher" component={EditVoucher}></Route>
        <Route exact path="/Booking" component={Booking}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
