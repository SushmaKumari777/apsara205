// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router';
import Naina from './components/Naina';
import Halfstyle from './components/Halfstyle';
import Sanskari from './components/Sanskari';
// import Allm from './components/Allm';
import Jsr from './components/Jsr';
import Footer from './components/Footer';
import Strapkurti from './components/Strapkurti';
// import Addtocart from './components/Addtocart';
import Vrinda from './components/Vrinda';
import ViewProduct from './components/ViewProduct';
// import BuyNow from './components/BuyNow';
import Category from './components/Category';
import Buy from './components/Buy';
import Cart from './components/Cart';
import Example from './components/Example';
import Checkout from './components/Checkout';
import Gender from './components/Gender';
import Pooh from './components/Pooh';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import Register2 from './components/Register2';
import Login from './components/Login';
import Address from './components/Address';


function App() {
  return (
    <div>
      <Header> </Header>

      {/* <Home> </Home> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/naina" element={<Naina />} />
        <Route path="/halfstyle" element={<Halfstyle />} />
        <Route path="/sanskari" element={<Sanskari />} />
        {/* <Route path="/allm" element={<Allm />} /> */}
        <Route path="/jsr" element={<Jsr />} />
        <Route path="/strapkurti" element={<Strapkurti />} />
        {/* <Route path="/addtocart/:productId" element={<Addtocart />} /> */}
        <Route path="/vrinda" element={<Vrinda />} />
        <Route path="/viewProduct/:productId" element={<ViewProduct />} />
        {/* <Route path="/buyNow" element={<BuyNow />} /> */}
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/gender/:idealFor" element={<Gender />} />
        <Route path="/buy/:productId" element={<Buy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/example" element={<Example />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pooh" element={<Pooh />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
      

        <Route path='*' element={<Home />} />
        <Route path="/footer" element={<Header />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
