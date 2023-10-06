import { BrowserRouter,Route,Routes } from "react-router-dom"
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Rigister'
import LogIn from "./pages/LogIn"
import Cart from "./pages/Cart"
import Reset from "./pages/Reset"
import { ToastContainer } from "react-toastify"
import Page404 from "./pages/Page404"

const App = () => {
 
  return (
  <div className="font-Poppins dark:bg-[#000]/90 dark:text-[#fff]  ">
    <BrowserRouter>
      <Header/>
        <div
        className=" mt-[80px] px-10">
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          <Route path='/rigister' element={<Register/>}/>
          <Route path='/reset' element={<Reset/>}/>
          <Route path='/cart' element={<Cart/>}/>
           <Route path="*" element={<Page404/>}/>
        </Routes>
       </div>
      <Footer/>
     </BrowserRouter>
     <ToastContainer  autoClose={2000} closeOnClick pauseOnHover/>
    </div>
  )
}

export default App