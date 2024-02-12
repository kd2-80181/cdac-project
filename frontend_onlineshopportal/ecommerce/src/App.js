import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import EditUser from "./customer/components/UserProfiePage/UserProfilePage";
import AccountPage from "./customer/components/UserProfiePage/UserProfilePage";
import UserEditProfile from "./customer/components/UserProfiePage/UserEditPage";
import { Link, Switch, Route } from "react-router-dom";
//import CreateUser from './customer/components/CreateAccountPage/CreateAccountPage';
import { Router, Routes } from "react-router-dom";


function App() {
  return (
    <div className="">
      <Navigation />
      <Routes>
        {/* //<Route path='/' element={<HomePage/>}/> */}
        {/* <Route path='/CreateAccountPage' element={<CreateUser/>}/> */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users/edituser" element={<EditUser/>}></Route>
        <Route path="/users/accountpage" element={<AccountPage/>}></Route>
        <Route path="/users/editaccountpage" element={<UserEditProfile/>}></Route>
        {/* //<Route path='/Navigation' element={<Navigation/>}/> */}
      </Routes>
      <Footer />
    </div>

    // </div>
    // {/* <div className='container'>
    //   <Link to="/"></>
    // </div> */}
  );
}

export default App;
