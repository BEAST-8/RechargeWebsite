import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./assets/pages/LoginPage";
// import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./assets/pages/RegisterationPage";
import UserTypeSelection from "./assets/pages/UserTypeSelection";
import UserHomePage from "./assets/pages/UserHomePage";


// import UserNavigation from "./pages/UserNavigation";

// import UserSidebar from "./pages/UserSidebar";

// import UserProfilePage from "./pages/UserProfilePage";







//import RechargePlans from "./pages/RechargePlans";
//import TransactionHistory from "./pages/TransactionHistory";

//import Home from "./pages/Home";
//import About from "./pages/About";
//import Navbar from "./components/Navbar";

// import NavigationBar from "./components/NavigationBar";
//import AdminLoginForm from "./assets/pages/AdminLoginForm";
//import Dashboard from "./assets/pages/Dashboard";

function App() {
  

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<UserTypeSelection/>}/>
       
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
        
        <Route path="/LoginForm" element={<LoginPage/>}/>
        <Route path="/HomePage" element={<UserHomePage/>}/>
        
        {/* <Route path="/UserNavigation" element={<UserNavigation/>}/> */}
       
        {/* <Route path="/UserSidebar" element={<UserSidebar/>}/> */}
        
        {/* <Route path="/UserProfilePage" element={<UserProfilePage/>}/> */}
      
       
        {/* <Route path="/RechargePlans" element={<RechargePlans/>}/> */}
        {/* <Route path="/TransactionHistory" element={<TransactionHistory/>}/> */}
        
      </Routes>
    </Router>
    
  )
}

export default App
