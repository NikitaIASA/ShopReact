import React, { useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import AddPost from "./pages/AddPost/AddPost";
import AnotherAccount from "./pages/AnotherAcount/AnotherAccount";
import BusinessAccount from "./pages/BusinessAccount/BusinessAccount";
import MyAccount from "./pages/MyAccount/MyAccount";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import './scss/style.scss';
import Header from "./layout/Header/Header";

function App() {
  const [user, setUser] = React.useState({});
  
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [])

  return (
    <div className="App">
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/myaccount" element={<MyAccount/>}/>
        <Route path="/businessaccount" element={<BusinessAccount/>}/>
        <Route path="/anotheraccount" element={<AnotherAccount/>}/>
        <Route path="/addpost" element={<AddPost/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
