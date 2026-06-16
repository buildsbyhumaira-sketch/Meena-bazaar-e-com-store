import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Index";
import Home from "../Home/Index";
import Footer from "../Footer/Index";
import Shop from "../Shop/Index";
import CheckOut from "../CheckOut/Index"
import ProceedToCheckOut from "../ProceedToCheckOut/Index"
import Login from "../Login/Index"
import SingleProduct from "../SingleProduct/Index"
import About from "../About/Index"
import PageNotFound from "../404/Index"
import SearchItem from "../searchPage/Index"
import OrderTracker from "../ordertracker/Index"
import Info from "./PageInfo"
import Signup from "../../components/Signup/Index"
import Dashboard from "../dashboard";
import "../App/App.css";

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelector(".app").classList.add("show");
    })
  })
  return (
    <Router>
      <div className="app" >
        <Info></Info>
        <h2 className='alert' >
          <span id='span'
            onClick=
            {(e) => e.currentTarget.parentElement.classList.remove("show")}>
            x
          </span>
          product is already modified!!!
        </h2>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path="/product" element={
            <>
              <Header />
              <SingleProduct />
              <Footer />
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Header />
              <CheckOut />
              <Footer />
            </>
          } />
          <Route path="/Payment" element={
            <>
              <Header />
              <ProceedToCheckOut />
              <Footer />
            </>
          } />
          <Route path="/Shop" element={
            <>
              <Header />
              <Shop />
              <Footer />
            </>
          } />
          <Route path="/dashboard" element={
            <>
              {/* <Header /> */}
              <Dashboard />
              {/* <Footer /> */}
            </>
          } />
          <Route path="/Login" element={
            <Login />
          } />
          <Route path="/signup" element={
            <Signup />
          } />
          <Route path="/searchitem" element={
            <>
              <Header />
              <SearchItem />
              <Footer />
            </>
          } />
          <Route path="/trackorder" element={
            <>
              <Header />
              <OrderTracker />
              <Footer />
            </>
          } />
          <Route path='*' element={
            <>
              <PageNotFound />
            </>
          } />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
