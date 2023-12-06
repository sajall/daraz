
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Login } from "./components/Login/Login";
import Home from "./components/Home/Home";
import { Signup } from "./components/Signup/Signup";
import { ProductDetails } from "./components/Product_details/ProductDetails";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { Cart } from "./components/Cart/Cart";
// react tostify for notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WishList } from "./components/WishList/WishList";
import { Users } from "./components/Users/Users";


function App() {
  
  // signup form k liy user ka data store krny k liye
  let [user, setUser] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/Login"
            element={<Login user={user} setUser={setUser}></Login>}
          ></Route>
          <Route
            path="/Signup"
            element={<Signup user={user} setUser={setUser}></Signup>}
          ></Route>
          <Route
            path="/"
            element={
              <Home ></Home>
            }
          ></Route>

          <Route
            path="product-details/:id"
            element={<ProductDetails  />}
          ></Route>
          <Route path='/Create-product' element={<CreateProduct ></CreateProduct>}></Route>
          <Route path='/add-to-cart' element={<Cart ></Cart>}></Route>
          <Route path='/wishlist' element={<WishList ></WishList>}></Route>
          <Route path='/show-users' element={<Users ></Users>}></Route>


        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;



  
  //   creating random id     
  //       const generateRandomId = () => {
  //         return Math.floor(Math.random() * 1000000);
  //       };
  //       
  // injecting random id in array
    // products.forEach((product) => {
    //   product.id = generateRandomId();
    // });