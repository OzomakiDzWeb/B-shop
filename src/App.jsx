import { BrowserRouter,Route,Routes } from "react-router-dom"
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Rigister'
import OrderHistory from './pages/OrderHistory'
import LogIn from "./pages/LogIn"
import Cart from "./pages/Cart"
import Reset from "./pages/Reset"

const App = () => {
  return (
  <div className="font-Poppins px-10 ">
    <BrowserRouter>
      <Header/>
      
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          <Route path='/rigister' element={<Register/>}/>
          <Route path='/reset' element={<Reset/>}/>
          <Route path='/order' element={<OrderHistory/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
     
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App